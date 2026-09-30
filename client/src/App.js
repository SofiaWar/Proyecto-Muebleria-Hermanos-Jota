import React, { useState } from 'react';
import './css/styles.css'; 
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import ProductDetail from './components/ProductDetail';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';

function App() {
  const [carrito, setCarrito] = useState([]); 
  const [vista, setVista] = useState('catalogo'); 
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); 
  const [vistaOrigen, setVistaOrigen] = useState('catalogo'); // vista desde la que se abrió el detalle

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Cambia de vista y vuelve al inicio de la página. No hay React Router: cambiar
  // de vista solo reemplaza el contenido de <main>, y el navegador conserva el
  // scroll. 'instant' evita la animación de scroll-behavior: smooth (base.css).
  const navegar = (nuevaVista) => {
    setVista(nuevaVista);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const verDetalle = (producto) => {
    setVistaOrigen(vista);
    setProductoSeleccionado(producto);
    navegar('detalle');
  };

  return (
    <div className="App">
      <Navbar cantidadCarrito={carrito.length} navegar={navegar} />
      
      {/* Contenedor principal idéntico a index.html */}
      <main id="inicio">
        {vista === 'catalogo' && (
          <>
            <section id="nosotros" aria-labelledby="titulo-principal">
              <div className="nosotros-texto">
                <h1 id="titulo-principal">Treinta años de oficio, una misma madera</h1>
                <p>En Mueblería Hermanos Jota llevamos <strong>30 años</strong> diseñando y fabricando muebles que acompañan hogares de generación en generación. Nuestra tradición se sostiene en el trabajo artesanal, la selección cuidadosa de maderas nobles y el respeto por cada detalle. Lo que empezó como un taller familiar hoy es un legado: piezas duraderas, honestas y hechas para vivirlas.</p>
              </div>
              <div className="nosotros-imagen">
                <img src="/img/Living.png" alt="Ambiente de interior con muebles de madera" />
              </div>
            </section>

            <section id="productos" aria-labelledby="titulo-productos">
              <h2 id="titulo-productos">Productos destacados</h2>
              <p className="seccion-intro">Una selección de piezas que representan nuestro taller: forma, función y madera bien trabajada.</p>
              
              <ProductList soloDestacados agregarAlCarrito={agregarAlCarrito} verDetalle={verDetalle} />
              
              <div className="ver-catalogo">
                <a href="#productos" onClick={(e) => { e.preventDefault(); navegar('productos'); }}>Ver todos los productos</a>
              </div>
            </section>
          </>
        )}

        {vista === 'productos' && (
          <div id="productos-main">
            <section className="catalogo-hero">
              <p className="etiqueta">COLECCIÓN</p>
              <h1>Nuestros productos</h1>
              <p>Piezas pensadas para acompañar la vida cotidiana, combinando oficio, materiales nobles y diseño atemporal.</p>
            </section>

            <section className="catalogo">
              <div className="catalogo-titulo">
                <h2>Catálogo</h2>
                <p>Conocé todas nuestras piezas.</p>
              </div>
              <ProductList agregarAlCarrito={agregarAlCarrito} verDetalle={verDetalle} />
            </section>
          </div>
        )}

        {vista === 'nosotros' && <Nosotros />}
        
        {vista === 'contacto' && <ContactForm />}

        {vista === 'detalle' && productoSeleccionado && (
          <ProductDetail 
            producto={productoSeleccionado} 
            volver={() => navegar(vistaOrigen)} 
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </main>

      <Footer navegar={navegar} />
    </div>
  );
}

export default App;