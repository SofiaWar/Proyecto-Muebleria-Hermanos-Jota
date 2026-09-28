import React from 'react';

function ProductCard({ producto, agregarAlCarrito, verDetalle }) {
  return (
    // Cambiamos el div por el article que espera tu CSS
    <article> 
      <img 
        src={`/${producto.imagen}`} 
        alt={producto.nombre} 
        onClick={() => verDetalle(producto)} 
        style={{ cursor: 'pointer' }}
      />
      <h3>{producto.nombre}</h3>
      
      {/* Tu CSS usa 'strong' para darle el color siena y el tamaño al precio */}
      <strong>${producto.precio.toLocaleString()}</strong>
      
      {/* Agregamos la clase específica para los botones */}
      <div className="acciones-producto">
        <button onClick={() => verDetalle(producto)}>Ver Detalle</button>
        <button onClick={() => agregarAlCarrito(producto)}>Añadir al Carrito</button>
      </div>
    </article>
  );
}

export default ProductCard;