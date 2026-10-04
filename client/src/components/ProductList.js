import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function ProductList({ agregarAlCarrito, verDetalle, soloDestacados = false }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacemos la petición a la API de tu backend
    fetch('/api/productos')
      .then(res => {
        if (!res.ok) throw new Error('Error en la conexión con el servidor');
        return res.json();
      })
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []); // El array vacío hace que se ejecute solo una vez al montar el componente

  // Renderizado condicional según el ciclo de vida de la petición
  if (cargando) return <p>Cargando catálogo...</p>;
  if (error) return <p>Ups! Hubo un problema: {error}</p>;

  // Si se pide, mostramos solo los productos marcados con destacado: true en los datos
  const productosAMostrar = soloDestacados
    ? productos.filter(producto => producto.destacado)
    : productos;

return (
    <div className="productos-grid" id="destacados-container">
      {productosAMostrar.map(producto => (
        <ProductCard key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} verDetalle={verDetalle} />
      ))}
    </div>
  );
}

export default ProductList; 