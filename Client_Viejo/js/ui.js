// =====================================================
// FUNCIÓN PARA CREAR UNA TARJETA
// =====================================================
function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement("article");
  tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>$${producto.precio.toLocaleString("es-AR")}</strong>
        <div class="acciones-producto">
            <button type="button" class="btn-detalle" data-id="${producto.id}">Ver detalle</button>
            <button type="button" class="btn-carrito" data-id="${producto.id}">Añadir al carrito</button>
        </div>
    `;
  return tarjeta;
}

// =====================================================
// VER DETALLE DEL PRODUCTO (MODAL)
// =====================================================
function abrirModalDetalle(id) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const listaCaracteristicas = producto.caracteristicas
    .map((caracteristica) => `<li>${caracteristica}</li>`)
    .join("");

  const modal = document.createElement("div");
  modal.className = "modal-producto";
  modal.innerHTML = `
        <div class="modal-contenido">
            <button type="button" class="cerrar-modal" aria-label="Cerrar">×</button>
            <div class="modal-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="modal-info">
                <p class="etiqueta">DETALLE DE LA PIEZA</p>
                <h2>${producto.nombre}</h2>
                <p class="modal-descripcion">${producto.descripcion}</p>
                <h3>Características</h3>
                <ul>${listaCaracteristicas}</ul>
                <strong class="modal-precio">$${producto.precio.toLocaleString("es-AR")}</strong>
                <div class="acciones-producto" style="padding: 1.5rem 0 0 0;">
                    <button type="button" class="btn-modal-carrito btn-carrito" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  modal
    .querySelector(".cerrar-modal")
    .addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) modal.remove();
  });
}

// =====================================================
// ACTUALIZAR TOTALES (CARRITO Y PAGO)
// =====================================================
function actualizarTotales() {
  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0,
  );
  const subtotalEl = document.getElementById("carrito-subtotal");
  const totalEl = document.getElementById("carrito-total");
  const botonTotalEl = document.getElementById("boton-total");

  if (subtotalEl)
    subtotalEl.textContent = `$${subtotal.toLocaleString("es-AR")}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toLocaleString("es-AR")}`;
  if (botonTotalEl)
    botonTotalEl.textContent = `$${subtotal.toLocaleString("es-AR")}`;
}
