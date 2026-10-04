import React from 'react';

function Navbar({ cantidadCarrito, navegar }) {
  return (
    <header>
      <div className="header-inner">
        <a href="#inicio" className="logo" onClick={(e) => { e.preventDefault(); navegar('catalogo'); }}>
          {/* Usamos el logo en SVG desde la carpeta public */}
          <img src="/img/logo.svg" alt="Mueblería Hermanos Jota" />
        </a>

        <nav aria-label="Navegación principal">
          <ul>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); navegar('catalogo'); }}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); navegar('nosotros'); }}>Nosotros</a></li>
            <li><a href="#productos" onClick={(e) => { e.preventDefault(); navegar('productos'); }}>Productos</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); navegar('contacto'); }}>Contacto</a></li>
            {/* Ítem del carrito dinámico */}
            <li><a href="#carrito" onClick={(e) => { e.preventDefault(); navegar('carrito'); }} style={{ color: 'var(--dorado)' }}>Carrito ({cantidadCarrito})</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;