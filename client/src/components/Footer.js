import React from 'react';

function Footer({ navegar }) {
  return (
    <footer id="contacto">
      <div className="footer-inner">
        <div className="footer-col">
          <img src="/img/logo.svg" alt="Hermanos Jota" className="footer-logo" />
          <p>Treinta años de oficio, una misma madera.</p>
        </div>
        <div className="footer-col">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); navegar('catalogo'); }}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => { e.preventDefault(); navegar('nosotros'); }}>Nosotros</a></li>
            <li><a href="#productos" onClick={(e) => { e.preventDefault(); navegar('productos'); }}>Productos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li>Av. San Juan 2847, CABA</li>
            <li>info@hermanosjota.com.ar</li>
            <li>+54 11 4567-8900</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <small>
            © 2026 Mueblería Hermanos Jota · Taller familiar desde 1996 · Buenos Aires
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;