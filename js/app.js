console.log("Hermanos Jota - JavaScript funcionando");

const productos = [
    {
        id: 1,
        nombre: "Mesa de comedor Pampa",
        precio: 450000,
        descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
        imagen: "img/Mesa Comedor Pampa.png"
    },

    {
        id: 2,
        nombre: "Sillón Copacabana",
        precio: 280000,
        descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
        imagen: "img/Sillón Copacabana.png"
    },

    {
        id: 3,
        nombre: "Biblioteca Recoleta",
        precio: 320000,
        descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
        imagen: "img/Biblioteca Recoleta.png"
    },

    {
        id: 4,
        nombre: "Mesa de Noche Aconcagua",
        precio: 520000,
        descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
        imagen: "img/Mesa de Noche Aconcagua.png"
    }
];

console.log(productos);

const contenedorProductos = document.getElementById("productos-container");

productos.forEach((producto) => {
    const tarjeta = document.createElement("article");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>$${producto.precio.toLocaleString("es-AR")}</strong>

        <div class="acciones-producto">
            <button type="button">Ver detalle</button>
            <button type="button">Añadir al carrito</button>
        </div>
    `;

    contenedorProductos.appendChild(tarjeta);
});