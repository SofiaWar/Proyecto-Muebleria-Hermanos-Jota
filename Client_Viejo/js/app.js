console.log("Hermanos Jota - Scripts iniciados");

document.addEventListener("DOMContentLoaded", async () => {
  // Inicializar contador de carrito general
  actualizarContadorCarrito();

  // Cargar productos de forma asíncrona (Sprint req)
  const productosCargados = await getProductos();

  // =====================================================
  // PRODUCTOS.HTML: Mostrar todo el catálogo y buscador
  // =====================================================
  const contenedorProductos = document.getElementById("productos-container");
  const buscadorInput = document.getElementById("buscador-input");

  if (contenedorProductos) {
    const renderizarCatalogo = (filtro = "") => {
      contenedorProductos.innerHTML = "";
      const productosFiltrados = productosCargados.filter((p) =>
        p.nombre.toLowerCase().includes(filtro.toLowerCase()),
      );

      if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = "<p>No se encontraron productos.</p>";
        return;
      }

      productosFiltrados.forEach((producto) => {
        const tarjeta = crearTarjetaProducto(producto);
        contenedorProductos.appendChild(tarjeta);
      });
    };

    // Render inicial
    renderizarCatalogo();

    // Evento de búsqueda (Sprint req)
    if (buscadorInput) {
      buscadorInput.addEventListener("input", (e) => {
        renderizarCatalogo(e.target.value);
      });
    }
  }

  // =====================================================
  // INDEX.HTML: Mostrar productos destacados
  // =====================================================
  const contenedorDestacados = document.getElementById("destacados-container");
  if (contenedorDestacados) {
    const productosDestacados = productosCargados
      .filter((producto) => producto.destacado)
      .slice(0, 3);
    productosDestacados.forEach((producto) => {
      const tarjeta = crearTarjetaProducto(producto);
      contenedorDestacados.appendChild(tarjeta);
    });
  }

  // =====================================================
  // CARRITO.HTML: Mostrar el contenido del carrito
  // =====================================================
  const carritoContenedor = document.getElementById("carrito-productos");
  if (carritoContenedor) {
    mostrarCarrito();
  }
});

// =====================================================
// DELEGACIÓN DE EVENTOS GLOBALES
// =====================================================
document.addEventListener("click", (evento) => {
  // Abrir detalle (Modal)
  if (evento.target.classList.contains("btn-detalle")) {
    const id = Number(evento.target.dataset.id);
    abrirModalDetalle(id);
  }

  // Añadir al carrito
  if (evento.target.classList.contains("btn-carrito")) {
    const id = Number(evento.target.dataset.id);
    agregarAlCarrito(id);

    const producto = productos.find((p) => p.id === id);
    if (producto) {
      alert(`${producto.nombre} fue añadido al carrito.`);
    }
  }
});

// =====================================================
// SIMULACIÓN DE PAGO (carrito.html)
// =====================================================
const formularioPago = document.getElementById("formulario-pago");
if (formularioPago) {
  formularioPago.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validaciones custom
    const numeroTarjeta = document
      .getElementById("numero-tarjeta")
      .value.replace(/\s+/g, "");
    const vencimiento = document.getElementById("vencimiento").value;
    const cvv = document.getElementById("cvv").value;

    if (!/^\d{16}$/.test(numeroTarjeta)) {
      alert("Por favor, ingrese un número de tarjeta válido de 16 dígitos.");
      return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(vencimiento)) {
      alert("Por favor, ingrese un vencimiento válido (MM/AA).");
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      alert("Por favor, ingrese un código de seguridad (CVV) válido.");
      return;
    }

    // Ocultar formulario e intro, pero NO todo el section "pago" (que contiene el mensaje de éxito)
    formularioPago.style.display = "none";
    const pagoIntro = document.querySelector(".pago-intro");
    if (pagoIntro) pagoIntro.style.display = "none";

    document.querySelector(".carrito-seccion").style.display = "none";

    // Mostrar éxito
    document.getElementById("compra-exitosa").style.display = "block";

    // Limpiar carrito
    localStorage.removeItem("carritoHermanosJota");
    carrito.length = 0; // Vaciar array global
    actualizarContadorCarrito();
  });
}

// =====================================================
// VALIDACIÓN FORMULARIO DE CONTACTO (Sprint req)
// =====================================================
const formContacto = document.querySelector(".formulario-contacto");
if (formContacto) {
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completá los campos obligatorios.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Por favor, ingresá un correo electrónico válido.");
      return;
    }

    // Mostrar feedback en el DOM y ocultar el formulario
    formContacto.innerHTML = `
      <div style="background-color: #f9f1e8; color: #3d2a1a; padding: 2.5rem; border-radius: 4px; text-align: center; border: 1px solid #ded0c1;">
        <h3 style="margin-bottom: 1rem; color: #a0522d;">¡Mensaje enviado exitosamente!</h3>
        <p>Gracias por contactarte con Hermanos Jota. Te responderemos a la brevedad.</p>
      </div>
    `;
  });
}
