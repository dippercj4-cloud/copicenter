use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct CatalogItem {
    pub id: String,
    pub brand: String,
    pub category: String,
    pub name: String,
    pub description: String,
    pub unit: String,
    pub price: u64,
    pub price_type: String,
    pub price_min: Option<u64>,
    pub price_max: Option<u64>,
    pub requires_details: bool,
    pub scope: Option<String>,
    pub tag: Option<String>,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct CartLine {
    pub id: String,
    pub quantity: u32,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct OrderLine {
    pub id: String,
    pub name: String,
    pub brand: String,
    pub quantity: u32,
    pub price_type: String,
    pub unit_price: u64,
    pub subtotal: u64,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Order {
    pub id: u64,
    pub created_at: u64,
    pub customer_name: String,
    pub customer_contact: String,
    pub status: String,
    pub subtotal: u64,
    pub items_pending_quote: u32,
    pub items: Vec<OrderLine>,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct CreateOrder {
    pub customer_name: String,
    pub customer_contact: String,
    pub items: Vec<CartLine>,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct UpdateOrderStatus {
    pub status: String,
}

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct PersistedStore {
    pub catalog: Vec<CatalogItem>,
    pub orders: Vec<Order>,
    pub next_order_id: u64,
}
