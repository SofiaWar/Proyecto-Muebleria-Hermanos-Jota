// Estado del carrito
let carrito = JSON.parse(localStorage.getItem("carritoHermanosJota")) || [];

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carritoHermanosJota", JSON.stringify(carrito));
}

// Agregar producto
function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const productoExistente = carrito.find((item) => item.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1,
    });
  }

  guardarCarrito();
  actualizarContadorCarrito();
  mostrarCarrito();
}

// Contador del carrito (Global para Navbar)
function actualizarContadorCarrito() {
  const contador = document.getElementById("carrito-contador");
  if (!contador) return;
  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0,
  );
  contador.textContent = cantidadTotal;
}

// Mostrar carrito en carrito.html
function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-productos");
  const carritoVacio = document.getElementById("carrito-vacio");
  const carritoContenido = document.getElementById("carrito-contenido");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    carritoVacio.style.display = "block";
    carritoContenido.style.display = "none";
    actualizarTotales();
    return;
  }

  carritoVacio.style.display = "none";
  carritoContenido.style.display = "block";

  carrito.forEach((producto) => {
    const item = document.createElement("article");
    item.className = "item-carrito";
    item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="item-carrito-info">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio.toLocaleString("es-AR")}</p>
                <div class="cantidad-producto">
                    <button type="button" class="btn-cantidad" data-id="${producto.id}" data-accion="restar">−</button>
                    <span>${producto.cantidad}</span>
                    <button type="button" class="btn-cantidad" data-id="${producto.id}" data-accion="sumar">+</button>
                </div>
            </div>
            <div class="item-carrito-final">
                <strong>$${(producto.precio * producto.cantidad).toLocaleString("es-AR")}</strong>
                <button type="button" class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
            </div>
        `;
    contenedor.appendChild(item);
  });

  actualizarTotales();
}

// Cambiar cantidad
function cambiarCantidad(id, accion) {
  const producto = carrito.find((item) => item.id === id);
  if (!producto) return;

  if (accion === "sumar") {
    producto.cantidad++;
  } else if (accion === "restar") {
    producto.cantidad--;
    if (producto.cantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
  }

  guardarCarrito();
  actualizarContadorCarrito();
  mostrarCarrito();
}

// Eliminar del carrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
  actualizarContadorCarrito();
  mostrarCarrito();
}

// Escuchar eventos dentro del carrito
document.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-cantidad")) {
    const id = Number(evento.target.dataset.id);
    const accion = evento.target.dataset.accion;
    cambiarCantidad(id, accion);
  }

  if (evento.target.classList.contains("btn-eliminar")) {
    const id = Number(evento.target.dataset.id);
    eliminarDelCarrito(id);
  }
});
