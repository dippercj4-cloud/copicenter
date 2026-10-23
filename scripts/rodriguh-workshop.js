const WORKSHOP_CATALOG = [
  {
    id: 'mantenimiento-basico',
    category: 'Mantenimiento',
    title: 'Limpieza y revisión básica',
    description: 'Limpieza interna y externa, revisión de ventiladores y organización de conexiones.',
    scope: 'Hardware',
    price: 25000,
    priceType: 'fixed'
  },
  {
    id: 'revisar-conexiones',
    category: 'Mantenimiento',
    title: 'Revisión de conexiones',
    description: 'Inspección básica de cables, dispositivos y puertos para mejorar estabilidad.',
    scope: 'Diagnóstico',
    price: 15000,
    priceType: 'fixed'
  },
  {
    id: 'instalar-ram-ssd',
    category: 'Mantenimiento',
    title: 'Instalación de RAM y SSD',
    description: 'Colocación de componentes compatibles cuando corresponda y comprobación inicial.',
    scope: 'Hardware',
    price: 20000,
    priceType: 'fixed'
  },
  {
    id: 'usb-boot',
    category: 'Sistemas operativos',
    title: 'Preparación de USB booteable',
    description: 'Preparación de medios para instalación, con verificación básica de compatibilidad.',
    scope: 'Instalación',
    price: 12000,
    priceType: 'fixed'
  },
  {
    id: 'instalacion-windows-linux',
    category: 'Sistemas operativos',
    title: 'Instalación de sistema compatible',
    description: 'Instalación y configuración inicial de sistemas operativos compatibles con evaluación previa.',
    scope: 'Sistema',
    price: 25000,
    priceType: 'fixed'
  },
  {
    id: 'drivers-programas',
    category: 'Sistemas operativos',
    title: 'Drivers y programas básicos',
    description: 'Instalación inicial de controladores y software legítimo según compatibilidad.',
    scope: 'Software',
    price: 18000,
    priceType: 'fixed'
  },
  {
    id: 'linux-principiante',
    category: 'Linux Lab',
    title: 'Orientación para principiantes',
    description: 'Acompañamiento para empezar a usar Linux con terminal, escritorio y hábitos básicos.',
    scope: 'Aprendizaje',
    price: 0,
    priceType: 'manual'
  },
  {
    id: 'linux-instalar',
    category: 'Linux Lab',
    title: 'Instalación de distribución compatible',
    description: 'Preparación del medio e instalación de distribuciones que el operador domina.',
    scope: 'Linux',
    price: 22000,
    priceType: 'fixed'
  },
  {
    id: 'personalizar-escritorio',
    category: 'Linux Lab',
    title: 'Personalización de escritorio',
    description: 'Ajustes básicos de temas, iconos y recursos existentes para una estética limpia.',
    scope: 'Configuración',
    price: 16000,
    priceType: 'fixed'
  },
  {
    id: 'config-perifericos',
    category: 'Hardware y personalización',
    title: 'Configuración de periféricos',
    description: 'Conexiones, sonido, impresoras y dispositivos con ajustes iniciales.',
    scope: 'Periféricos',
    price: 14000,
    priceType: 'fixed'
  },
  {
    id: 'instalacion-componentes',
    category: 'Hardware y personalización',
    title: 'Instalación de componentes compatibles',
    description: 'Montaje y comprobación inicial de piezas compatibles según el equipo.',
    scope: 'Hardware',
    price: 20000,
    priceType: 'fixed'
  },
  {
    id: 'furry-tech',
    category: 'Hardware y personalización',
    title: 'Configuración tecnológica con estilo furry',
    description: 'Temas, recursos y ajustes visuales con un enfoque tecnológico y cultural.',
    scope: 'Personalización',
    price: 0,
    priceType: 'manual'
  }
];

const CART_STORAGE_KEY = 'rw-cart-v1';

const state = {
  cart: loadCart()
};

const elements = {
  catalog: document.getElementById('rw-catalog'),
  cartItems: document.getElementById('rw-cart-items'),
  cartTotal: document.getElementById('rw-cart-total'),
  pendingCount: document.getElementById('rw-pending-count'),
  itemCount: document.getElementById('rw-item-count'),
  clearCart: document.getElementById('rw-clear-cart'),
  exportButton: document.getElementById('rw-export-image')
};

function currency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value || 0);
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function getServiceSubtotal(item, qty) {
  if (item.priceType !== 'fixed') return 0;
  return item.price * qty;
}

function describePrice(item) {
  if (item.priceType === 'manual') return 'Precio por cotizar';
  return currency(item.price);
}

function renderCatalog() {
  elements.catalog.innerHTML = WORKSHOP_CATALOG.map((item) => {
    const isManual = item.priceType === 'manual';
    return `
      <article class="rw-card ${isManual ? 'manual-quote' : ''}">
        <div class="rw-card-header">
          <span class="rw-card-category">${escapeHtml(item.category)}</span>
          <span class="rw-price-badge">${escapeHtml(describePrice(item))}</span>
        </div>

        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>

        <div class="rw-card-details">
          <span class="rw-tag">${escapeHtml(item.scope)}</span>
          <span class="rw-tag">${isManual ? 'Precio por cotizar' : 'Precio definido'}</span>
        </div>

        <div class="rw-card-actions">
          <button class="rw-primary" type="button" data-add="${item.id}">Añadir</button>
        </div>
      </article>
    `;
  }).join('');
}

function addToCart(itemId) {
  const item = WORKSHOP_CATALOG.find((entry) => entry.id === itemId);
  if (!item) return;

  const existing = state.cart.find((entry) => entry.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: itemId, quantity: 1 });
  }

  saveCart();
  renderCart();
}

function updateQuantity(itemId, quantity) {
  const safeQty = Math.max(1, Number(quantity) || 1);
  const item = state.cart.find((entry) => entry.id === itemId);
  if (!item) return;
  item.quantity = safeQty;
  saveCart();
  renderCart();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((entry) => entry.id !== itemId);
  saveCart();
  renderCart();
}

function renderCart() {
  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = '<div class="rw-empty">El carrito está vacío.</div>';
    elements.cartTotal.textContent = '$0';
    elements.pendingCount.textContent = '0';
    elements.itemCount.textContent = '0';
    return;
  }

  const items = state.cart.map((entry) => {
    const item = WORKSHOP_CATALOG.find((catalogItem) => catalogItem.id === entry.id);
    if (!item) return null;

    const subtotal = getServiceSubtotal(item, entry.quantity);
    const displayPrice = item.priceType === 'manual' ? 'Precio por cotizar' : currency(subtotal);

    return `
      <div class="rw-cart-item">
        <div class="rw-item-top">
          <div>
            <h4>${escapeHtml(item.title)}</h4>
            <small>${escapeHtml(item.category)}</small>
          </div>
          <button class="rw-item-remove" type="button" data-remove="${item.id}">Eliminar</button>
        </div>

        <div class="rw-item-controls">
          <div class="rw-qty" aria-label="Cantidad de ${escapeHtml(item.title)}">
            <button type="button" data-qty-change="decrease" data-item-id="${item.id}">−</button>
            <input type="number" min="1" value="${entry.quantity}" data-qty-input="${item.id}" />
            <button type="button" data-qty-change="increase" data-item-id="${item.id}">+</button>
          </div>
          <strong>${displayPrice}</strong>
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  elements.cartItems.innerHTML = items;

  const subtotal = state.cart.reduce((sum, entry) => {
    const item = WORKSHOP_CATALOG.find((catalogItem) => catalogItem.id === entry.id);
    if (!item) return sum;
    return sum + getServiceSubtotal(item, entry.quantity);
  }, 0);

  const pending = state.cart.filter((entry) => {
    const item = WORKSHOP_CATALOG.find((catalogItem) => catalogItem.id === entry.id);
    return item && item.priceType === 'manual';
  }).length;

  elements.cartTotal.textContent = currency(subtotal);
  elements.pendingCount.textContent = String(pending);
  elements.itemCount.textContent = String(state.cart.reduce((sum, entry) => sum + entry.quantity, 0));
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function exportCartImage() {
  if (state.cart.length === 0) {
    window.alert('Añade al menos un servicio antes de exportar el pedido.');
    return;
  }

  try {
    await document.fonts.ready;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas no disponible');
    }

    const width = 1200;
    const height = 980;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#080B12';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#111827';
    ctx.fillRect(48, 48, width - 96, 180);

    ctx.fillStyle = '#19BFFF';
    ctx.font = '700 38px "JetBrains Mono", monospace';
    ctx.fillText('Rodriguh Workshop', 80, 110);

    ctx.fillStyle = '#F3F4F6';
    ctx.font = '700 42px "JetBrains Mono", monospace';
    ctx.fillText('Resumen del pedido', 80, 162);

    ctx.fillStyle = '#9CA3AF';
    ctx.font = '600 20px "JetBrains Mono", monospace';
    ctx.fillText(`Generado: ${new Date().toLocaleString('es-CO')}`, 80, 200);

    const rows = state.cart.map((entry) => {
      const item = WORKSHOP_CATALOG.find((catalogItem) => catalogItem.id === entry.id);
      if (!item) return null;
      return {
        ...item,
        quantity: entry.quantity,
        subtotal: getServiceSubtotal(item, entry.quantity),
        isManual: item.priceType === 'manual'
      };
    }).filter(Boolean);

    let y = 290;
    rows.forEach((row) => {
      const text = `• ${row.quantity} x ${row.title}`;
      ctx.fillStyle = '#F3F4F6';
      ctx.font = '600 24px "JetBrains Mono", monospace';
      ctx.fillText(text, 80, y);

      const priceText = row.isManual ? 'Precio por cotizar' : currency(row.subtotal);
      ctx.fillStyle = row.isManual ? '#9CA3AF' : '#19BFFF';
      ctx.font = '600 22px "JetBrains Mono", monospace';
      ctx.fillText(priceText, width - 290, y);
      y += 42;
    });

    const totalDefined = rows.reduce((sum, row) => sum + (row.isManual ? 0 : row.subtotal), 0);
    const pendingCount = rows.filter((row) => row.isManual).length;

    ctx.fillStyle = '#101d32';
    ctx.fillRect(48, y + 16, width - 96, 170);

    ctx.fillStyle = '#F3F4F6';
    ctx.font = '700 26px "JetBrains Mono", monospace';
    ctx.fillText('Total con precio definido', 82, y + 72);
    ctx.fillStyle = '#19BFFF';
    ctx.font = '700 36px "JetBrains Mono", monospace';
    ctx.fillText(currency(totalDefined), width - 300, y + 72);

    ctx.fillStyle = '#F3F4F6';
    ctx.font = '700 26px "JetBrains Mono", monospace';
    ctx.fillText('Servicios pendientes de cotización', 82, y + 120);
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '700 30px "JetBrains Mono", monospace';
    ctx.fillText(String(pendingCount), width - 160, y + 120);

    ctx.fillStyle = '#D0E6FF';
    ctx.font = '500 20px "JetBrains Mono", monospace';
    ctx.fillText('Nota: el presupuesto es estimado y requiere confirmación cuando corresponda.', 82, y + 152);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'resumen-rodriguh-workshop.png';
    link.click();
  } catch (error) {
    console.error(error);
    window.alert('No se pudo exportar el resumen del pedido. Inténtalo nuevamente.');
  }
}

function attachListeners() {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add]');
    if (addButton) {
      addToCart(addButton.dataset.add);
      return;
    }

    const removeButton = event.target.closest('[data-remove]');
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      return;
    }

    const qtyButton = event.target.closest('[data-qty-change]');
    if (qtyButton) {
      const itemId = qtyButton.dataset.itemId;
      const entry = state.cart.find((item) => item.id === itemId);
      if (!entry) return;
      const nextQty = qtyButton.dataset.qtyChange === 'increase' ? entry.quantity + 1 : entry.quantity - 1;
      updateQuantity(itemId, nextQty);
      return;
    }
  });

  document.addEventListener('input', (event) => {
    const qtyInput = event.target.closest('[data-qty-input]');
    if (!qtyInput) return;

    const itemId = qtyInput.dataset.qtyInput;
    const value = Number(qtyInput.value);
    if (!Number.isFinite(value) || value < 1) {
      qtyInput.value = 1;
    }
    updateQuantity(itemId, qtyInput.value);
  });

  elements.clearCart.addEventListener('click', () => {
    if (state.cart.length === 0) {
      window.alert('El carrito ya está vacío.');
      return;
    }

    const confirmClear = window.confirm('¿Deseas vaciar el carrito de Rodriguh Workshop?');
    if (!confirmClear) return;
    clearCart();
  });

  elements.exportButton.addEventListener('click', exportCartImage);
}

function init() {
  renderCatalog();
  renderCart();
  attachListeners();
}

init();
