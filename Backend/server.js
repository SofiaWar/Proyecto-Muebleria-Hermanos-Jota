const express = require('express');
const app = express();
const PORT = 3001; // Usamos el 3001 para dejarle el 3000 libre a React más adelante

// Importamos los datos locales
const productos = require('./data.js'); 

// --- MIDDLEWARES GLOBALES ---
// Middleware para futuras peticiones POST
app.use(express.json()); 

// Middleware de logging (registra método y URL de cada petición)
app.use((req, res, next) => {
    console.log(`[LOG] Petición recibida: ${req.method} ${req.url}`);
    next();
});

// --- RUTAS CON express.Router ---
const productosRouter = express.Router();

// GET /api/productos -> Devuelve el listado completo en JSON
productosRouter.get('/', (req, res) => {
    res.json(productos);
});

// GET /api/productos/:id -> Devuelve un producto por ID o error 404
productosRouter.get('/:id', (req, res) => {
    const idProducto = parseInt(req.params.id);
    const productoEncontrado = productos.find(p => p.id === idProducto);

    if (productoEncontrado) {
        res.json(productoEncontrado);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// Conectamos el router a la ruta base
app.use('/api/productos', productosRouter);

// --- MANEJADORES DE ERRORES ---
// Manejador centralizado para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ error: 'La ruta especificada no existe' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Backend de Mueblería Hermanos Jota corriendo en http://localhost:${PORT}`);
});