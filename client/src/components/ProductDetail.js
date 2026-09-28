import React from 'react';

function ProductDetail({ producto, volver, agregarAlCarrito }) {
  if (!producto) return null; // Por seguridad, si no hay producto no renderiza nada

  return (
    <div className="detalle-container" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button 
        onClick={volver} 
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: '#eee', border: 'none' }}
      >
        ← Volver al Catálogo
      </button>
      
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img src={`/${producto.imagen}`} alt={producto.nombre} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2>{producto.nombre}</h2>
          <h3 style={{ color: '#555' }}>${producto.precio.toLocaleString()}</h3>
          <p style={{ lineHeight: '1.6' }}>{producto.descripcion}</p>
          
          <h4>Características:</h4>
          <ul>
            {producto.caracteristicas.map((caracteristica, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{caracteristica}</li>
            ))}
          </ul>
          
          <button 
            onClick={() => agregarAlCarrito(producto)}
            style={{ marginTop: '1rem', padding: '1rem 2rem', backgroundColor: '#333', color: 'white', border: 'none', cursor: 'pointer', width: '100%' }}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;