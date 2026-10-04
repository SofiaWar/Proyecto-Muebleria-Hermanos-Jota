import React from 'react';

function Carrito({ carrito, cambiarCantidad, eliminarDelCarrito, irAProductos }) {
  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  return (
    <div id="carrito-main">
      <section className="carrito-seccion">
        <p className="etiqueta">TU COMPRA</p>
        <h1>Carrito</h1>
        <p className="carrito-intro">Revisá las piezas que elegiste.</p>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <h2>Tu carrito está vacío</h2>
            <p>Todavía no agregaste ningún producto.</p>
            <a
              href="#productos"
              className="btn-carrito-volver"
              onClick={(e) => { e.preventDefault(); irAProductos(); }}
            >
              Ver productos
            </a>
          </div>
        ) : (
          <>
            <div id="carrito-productos">
              {carrito.map((item) => (
                <article className="item-carrito" key={item.id}>
                  <img src={`/${item.imagen}`} alt={item.nombre} />

                  <div className="item-carrito-info">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio.toLocaleString()}</p>
                    <div className="cantidad-producto">
                      <button
                        type="button"
                        className="btn-cantidad"
                        aria-label={`Disminuir cantidad de ${item.nombre}`}
                        onClick={() => cambiarCantidad(item.id, -1)}
                      >
                        −
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        type="button"
                        className="btn-cantidad"
                        aria-label={`Aumentar cantidad de ${item.nombre}`}
                        onClick={() => cambiarCantidad(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="item-carrito-final">
                    <strong>${(item.precio * item.cantidad).toLocaleString()}</strong>
                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="carrito-resumen">
              <h2>Resumen</h2>
              <div className="resumen-total">
                <span>Total</span>
                <strong>${total.toLocaleString()}</strong>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Carrito;
