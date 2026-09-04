console.log("Hermanos Jota - JavaScript funcionando");


/* =========================================
   FORMATEAR PRECIO
   ========================================= */

function formatearPrecio(precio) {
    return `$${precio.toLocaleString("es-AR")}`;
}


/* =========================================
   CREAR TARJETA DE PRODUCTO
   ========================================= */

function crearTarjetaProducto(producto) {

    const tarjeta = document.createElement("article");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">

        <p class="categoria-producto">
            ${producto.categoria}
        </p>

        <h3>${producto.nombre}</h3>

        <p>${producto.descripcion}</p>

        <strong>${formatearPrecio(producto.precio)}</strong>

        <div class="acciones-producto">
            <button type="button">Ver detalle</button>
            <button type="button">Añadir al carrito</button>
        </div>
    `;

    return tarjeta;
}


/* =========================================
   RENDERIZAR PRODUCTOS EN UN CONTENEDOR
   ========================================= */

function renderizarProductos(contenedor, listaProductos) {

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (listaProductos.length === 0) {

        contenedor.innerHTML = `
            <p class="sin-resultados">
                No encontramos productos que coincidan con tu búsqueda.
            </p>
        `;

        return;
    }

    listaProductos.forEach((producto) => {
        contenedor.appendChild(crearTarjetaProducto(producto));
    });
}


/* =========================================
   INICIO: solo 4 productos destacados
   ========================================= */

const contenedorDestacados =
    document.getElementById("destacados-container");

if (contenedorDestacados) {
    renderizarProductos(contenedorDestacados, productos.slice(0, 4));
}


/* =========================================
   CATÁLOGO: todos los productos
   ========================================= */

const contenedorCatalogo =
    document.getElementById("productos-container");

if (contenedorCatalogo) {
    renderizarProductos(contenedorCatalogo, productos);
}


/* =========================================
   BÚSQUEDA EN VIVO (solo en el catálogo)
   ========================================= */

const inputBusqueda = document.getElementById("buscador-input");

if (inputBusqueda && contenedorCatalogo) {

    let temporizadorBusqueda;

    inputBusqueda.addEventListener("input", () => {

        clearTimeout(temporizadorBusqueda);

        temporizadorBusqueda = setTimeout(() => {

            const termino = inputBusqueda.value
                .trim()
                .toLowerCase();

            const resultados = productos.filter((producto) => {
                return (
                    producto.nombre.toLowerCase().includes(termino) ||
                    producto.categoria.toLowerCase().includes(termino) ||
                    producto.descripcion.toLowerCase().includes(termino)
                );
            });

            renderizarProductos(contenedorCatalogo, resultados);

        }, 250);

    });

}
