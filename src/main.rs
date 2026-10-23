use std::{
    collections::HashSet,
    env,
    error::Error,
    fs,
    net::SocketAddr,
    path::{Path, PathBuf},
    sync::Arc,
    time::{SystemTime, UNIX_EPOCH},
};

use axum::{
    extract::{Path as AxumPath, State},
    http::{HeaderMap, StatusCode},
    response::IntoResponse,
    routing::{delete, get, patch, post, put},
    Json, Router,
};
use copicenter::models::{
    CatalogItem, CreateOrder, Order, OrderLine, PersistedStore, UpdateOrderStatus,
};
use tokio::sync::RwLock;
use tower_http::services::{ServeDir, ServeFile};

const ADMIN_TOKEN_HEADER: &str = "x-admin-token";
const MAX_ORDER_LINES: usize = 100;
const MAX_QUANTITY: u32 = 99;
const ALLOWED_PRICE_TYPES: [&str; 5] = ["fixed", "unit", "from", "range", "manual"];
const ALLOWED_ORDER_STATUSES: [&str; 4] =
    ["pending", "in_progress", "completed", "cancelled"];

struct AppState {
    store: RwLock<PersistedStore>,
    store_path: PathBuf,
    admin_token: String,
}

type ApiResult<T> = Result<T, (StatusCode, String)>;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let admin_token = env::var("COPICENTER_ADMIN_TOKEN")
        .map_err(|_| "Define COPICENTER_ADMIN_TOKEN (mínimo 16 caracteres) antes de iniciar")?;
    if admin_token.len() < 16 {
        return Err("COPICENTER_ADMIN_TOKEN debe tener al menos 16 caracteres".into());
    }

    let data_dir = env::var_os("COPICENTER_DATA_DIR")
        .map(PathBuf::from)
        .unwrap_or_else(|| PathBuf::from(".copicenter-data"));
    let store_path = data_dir.join("store.json");
    let store = load_store(&store_path, &data_dir)?;
    let state = Arc::new(AppState {
        store: RwLock::new(store),
        store_path,
        admin_token,
    });

    let app = Router::new()
        .route("/api/health", get(|| async { "ok" }))
        .route("/api/catalog", get(get_catalog))
        .route("/api/orders", post(create_order))
        .route("/api/admin/orders", get(get_orders))
        .route("/api/admin/orders/{id}", patch(update_order_status))
        .route("/api/admin/catalog/{id}", put(save_catalog_item))
        .route("/api/admin/catalog/{id}", delete(delete_catalog_item))
        .route_service("/", ServeFile::new("index.html"))
        .route_service("/index.html", ServeFile::new("index.html"))
        .route_service(
            "/rodriguh-workshop.html",
            ServeFile::new("rodriguh-workshop.html"),
        )
        .nest_service("/assets", ServeDir::new("assets"))
        .nest_service("/styles", ServeDir::new("styles"))
        .nest_service("/wasm", ServeDir::new("wasm"))
        .with_state(state);

    let address: SocketAddr = env::var("COPICENTER_BIND")
        .unwrap_or_else(|_| "0.0.0.0:3000".to_owned())
        .parse()?;
    let listener = tokio::net::TcpListener::bind(address).await?;
    println!("Copicenter disponible en http://{address}");
    axum::serve(listener, app).await?;
    Ok(())
}

fn load_store(store_path: &Path, data_dir: &Path) -> Result<PersistedStore, Box<dyn Error>> {
    if store_path.exists() {
        let contents = fs::read_to_string(store_path)?;
        let store: PersistedStore = serde_json::from_str(&contents)?;
        validate_catalog(&store.catalog)?;
        return Ok(store);
    }

    fs::create_dir_all(data_dir)?;
    let catalog: Vec<CatalogItem> = serde_json::from_str(include_str!("../data/catalog.json"))?;
    validate_catalog(&catalog)?;
    let store = PersistedStore {
        catalog,
        orders: Vec::new(),
        next_order_id: 1,
    };
    persist_store(store_path, &store)?;
    Ok(store)
}

fn validate_catalog(catalog: &[CatalogItem]) -> Result<(), Box<dyn Error>> {
    let mut ids = HashSet::with_capacity(catalog.len());
    for item in catalog {
        if item.id.trim().is_empty()
            || item.name.trim().is_empty()
            || item.category.trim().is_empty()
            || item.description.trim().is_empty()
            || item.brand.trim().is_empty()
            || !ALLOWED_PRICE_TYPES.contains(&item.price_type.as_str())
            || !ids.insert(item.id.as_str())
        {
            return Err(format!("Catálogo inválido: servicio {}", item.id).into());
        }
    }
    Ok(())
}

fn persist_store(path: &Path, store: &PersistedStore) -> ApiResult<()> {
    let contents = serde_json::to_vec_pretty(store)
        .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))?;
    let temporary_path = path.with_extension("json.tmp");
    fs::write(&temporary_path, contents)
        .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))?;
    fs::rename(&temporary_path, path)
        .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))
}

fn require_admin(headers: &HeaderMap, state: &AppState) -> ApiResult<()> {
    let provided = headers
        .get(ADMIN_TOKEN_HEADER)
        .and_then(|value| value.to_str().ok());
    if provided == Some(state.admin_token.as_str()) {
        Ok(())
    } else {
        Err((
            StatusCode::UNAUTHORIZED,
            "Token administrativo inválido o ausente".to_owned(),
        ))
    }
}

async fn get_catalog(State(state): State<Arc<AppState>>) -> Json<Vec<CatalogItem>> {
    Json(state.store.read().await.catalog.clone())
}

async fn create_order(
    State(state): State<Arc<AppState>>,
    Json(request): Json<CreateOrder>,
) -> ApiResult<(StatusCode, Json<Order>)> {
    let customer_name = request.customer_name.trim();
    let customer_contact = request.customer_contact.trim();
    if customer_name.is_empty() || customer_name.len() > 120 {
        return Err((
            StatusCode::BAD_REQUEST,
            "El nombre debe tener entre 1 y 120 caracteres".to_owned(),
        ));
    }
    if customer_contact.len() > 80 {
        return Err((
            StatusCode::BAD_REQUEST,
            "El contacto no puede superar 80 caracteres".to_owned(),
        ));
    }
    if request.items.is_empty() || request.items.len() > MAX_ORDER_LINES {
        return Err((
            StatusCode::BAD_REQUEST,
            format!("El pedido debe tener entre 1 y {MAX_ORDER_LINES} servicios"),
        ));
    }

    let mut store = state.store.write().await;
    let mut ids = HashSet::with_capacity(request.items.len());
    let mut items = Vec::with_capacity(request.items.len());
    let mut subtotal = 0_u64;
    let mut items_pending_quote = 0_u32;

    for line in request.items {
        if line.quantity == 0 || line.quantity > MAX_QUANTITY || !ids.insert(line.id.as_str()) {
            return Err((
                StatusCode::BAD_REQUEST,
                "Cada servicio debe ser único y tener una cantidad entre 1 y 99".to_owned(),
            ));
        }
        let item = store
            .catalog
            .iter()
            .find(|item| item.id == line.id)
            .ok_or_else(|| {
                (
                    StatusCode::BAD_REQUEST,
                    format!("Servicio no encontrado: {}", line.id),
                )
            })?;
        let line_subtotal = if item.price_type == "fixed" || item.price_type == "unit" {
            item.price.checked_mul(u64::from(line.quantity)).ok_or_else(|| {
                (
                    StatusCode::BAD_REQUEST,
                    "El importe del pedido excede el límite permitido".to_owned(),
                )
            })?
        } else {
            items_pending_quote = items_pending_quote.saturating_add(1);
            0
        };
        subtotal = subtotal.checked_add(line_subtotal).ok_or_else(|| {
            (
                StatusCode::BAD_REQUEST,
                "El importe del pedido excede el límite permitido".to_owned(),
            )
        })?;
        items.push(OrderLine {
            id: item.id.clone(),
            name: item.name.clone(),
            brand: item.brand.clone(),
            quantity: line.quantity,
            price_type: item.price_type.clone(),
            unit_price: item.price,
            subtotal: line_subtotal,
        });
    }

    let order = Order {
        id: store.next_order_id,
        created_at: SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map_err(|error| (StatusCode::INTERNAL_SERVER_ERROR, error.to_string()))?
            .as_secs(),
        customer_name: customer_name.to_owned(),
        customer_contact: customer_contact.to_owned(),
        status: "pending".to_owned(),
        subtotal,
        items_pending_quote,
        items,
    };
    let mut updated = store.clone();
    updated.next_order_id = updated.next_order_id.checked_add(1).ok_or_else(|| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            "No se pueden crear más pedidos".to_owned(),
        )
    })?;
    updated.orders.push(order.clone());
    persist_store(&state.store_path, &updated)?;
    *store = updated;
    Ok((StatusCode::CREATED, Json(order)))
}

async fn get_orders(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
) -> ApiResult<Json<Vec<Order>>> {
    require_admin(&headers, &state)?;
    let mut orders = state.store.read().await.orders.clone();
    orders.sort_by_key(|order| std::cmp::Reverse(order.id));
    Ok(Json(orders))
}

async fn update_order_status(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
    AxumPath(id): AxumPath<u64>,
    Json(request): Json<UpdateOrderStatus>,
) -> ApiResult<Json<Order>> {
    require_admin(&headers, &state)?;
    if !ALLOWED_ORDER_STATUSES.contains(&request.status.as_str()) {
        return Err((
            StatusCode::BAD_REQUEST,
            "Estado no válido".to_owned(),
        ));
    }
    let mut store = state.store.write().await;
    let mut updated = store.clone();
    let order = updated
        .orders
        .iter_mut()
        .find(|order| order.id == id)
        .ok_or_else(|| (StatusCode::NOT_FOUND, "Pedido no encontrado".to_owned()))?;
    order.status = request.status;
    let result = order.clone();
    persist_store(&state.store_path, &updated)?;
    *store = updated;
    Ok(Json(result))
}

async fn save_catalog_item(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
    AxumPath(id): AxumPath<String>,
    Json(item): Json<CatalogItem>,
) -> ApiResult<Json<CatalogItem>> {
    require_admin(&headers, &state)?;
    if item.id != id {
        return Err((
            StatusCode::BAD_REQUEST,
            "El id de la ruta no coincide con el servicio".to_owned(),
        ));
    }
    validate_catalog(std::slice::from_ref(&item))
        .map_err(|error| (StatusCode::BAD_REQUEST, error.to_string()))?;
    let mut store = state.store.write().await;
    let mut updated = store.clone();
    if let Some(existing) = updated.catalog.iter_mut().find(|entry| entry.id == id) {
        *existing = item.clone();
    } else {
        updated.catalog.push(item.clone());
    }
    persist_store(&state.store_path, &updated)?;
    *store = updated;
    Ok(Json(item))
}

async fn delete_catalog_item(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
    AxumPath(id): AxumPath<String>,
) -> ApiResult<impl IntoResponse> {
    require_admin(&headers, &state)?;
    let mut store = state.store.write().await;
    let mut updated = store.clone();
    let original_len = updated.catalog.len();
    updated.catalog.retain(|item| item.id != id);
    if updated.catalog.len() == original_len {
        return Err((StatusCode::NOT_FOUND, "Servicio no encontrado".to_owned()));
    }
    persist_store(&state.store_path, &updated)?;
    *store = updated;
    Ok(StatusCode::NO_CONTENT)
}
