# 🪑 E-commerce Mueblería Hermanos Jota

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

**Mueblería Hermanos Jota** es la fachada completa y experiencia interactiva del cliente para un e-commerce ficticio. En esta etapa, el proyecto evolucionó de una arquitectura puramente frontend a una verdadera aplicación cliente-servidor, dejando de usar datos locales estáticos para consumir su propia API REST.

## 👥 Equipo de Trabajo (Grupo H)

Este proyecto fue desarrollado de manera colaborativa por el **Grupo 9**:

1. **Ángela Lucero Álvarez**
2. **Ezequiel Gonzalez**
3. **Lautaro Leal Del Prete**
4. **Sofía Guerra**

## 🚀 Arquitectura y Tecnologías

El proyecto es una aplicación cliente-servidor dividida en dos directorios principales:

```text
Navegador ── React (client, :3000) ──proxy──▶ Express (Backend, :3001)
                                                   │
                                                   └── data.js (datos en memoria)
```

```text
Backend/       API REST con Node.js + Express (los datos viven en data.js)
client/        Aplicación React (Create React App)
Client_Viejo/  Versión anterior del sitio en HTML, CSS y JS puro (se conserva como referencia)
```

No hay base de datos: los productos están definidos en `Backend/data.js` y se sirven desde memoria.

### Backend (`Backend/`)

*   Node.js + Express 5, escuchando en el puerto **3001**.
*   `express.Router` monta las rutas de productos bajo `/api/productos`.
*   Middlewares: `express.json()` y un logger propio que imprime método y URL de cada petición.
*   Manejador de rutas inexistentes (404) que responde en JSON.

**Endpoints**

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/productos` | Devuelve el listado completo de productos (siempre todos) |
| GET | `/api/productos/:id` | Devuelve un producto. Si no existe: 404 `{ "error": "Producto no encontrado" }` |
| cualquier otra | — | 404 `{ "error": "La ruta especificada no existe" }` |

**Modelo de producto:** `id`, `nombre`, `precio`, `descripcion`, `caracteristicas[]`, `imagen`, `destacado`.

### Frontend (`client/`)

*   React 19 con Create React App. No se usa React Router ni ninguna librería de estado.
*   Comunicación con el backend: `ProductList` hace `fetch('/api/productos')`. La ruta es relativa gracias a `"proxy": "http://localhost:3001"` en `client/package.json`, por lo que en desarrollo no hace falta configurar CORS.
*   Estilos: `src/css/styles.css` importa `variables.css`, `base.css`, `layout.css` y `pages.css`.
*   Imágenes: se sirven desde `client/public/img` y se referencian como `/img/archivo`. Las de producto llegan en el campo `imagen` de la API.

**Componentes (`client/src/components`)**

| Componente | Rol |
|---|---|
| `Navbar` | Navegación principal y contador del carrito |
| `ProductList` | Pide los productos a la API y renderiza las tarjetas. Prop opcional `soloDestacados` |
| `ProductCard` | Tarjeta de un producto (ver detalle / añadir al carrito) |
| `ProductDetail` | Detalle de un producto |
| `Carrito` | Vista del carrito: ítems, cantidades, eliminar y total |
| `Nosotros` | Página institucional |
| `ContactForm` | Formulario de contacto controlado |
| `Footer` | Pie de página con enlaces de navegación |

## 🧭 Navegación

La app no usa router. `App.js` guarda un estado `vista` y renderiza el contenido de `<main>` según su valor:

| `vista` | Qué muestra |
|---|---|
| `catalogo` | Inicio: presentación y productos destacados |
| `productos` | Catálogo completo (todos los productos) |
| `nosotros` | Página Nosotros |
| `contacto` | Formulario de contacto |
| `carrito` | Carrito de compras |
| `detalle` | Detalle del producto seleccionado |

*   `navegar(vista)` cambia la vista **y lleva el scroll al inicio de la página**. Se pasa por props a `Navbar` y `Footer`, y la usan el logo, el botón "Ver todos los productos" y el resto de los enlaces.
*   El scroll se reinicia porque cambiar de vista solo reemplaza el contenido de `<main>`: sin ese paso el navegador conserva la posición anterior.
*   `vistaOrigen` recuerda desde qué vista se abrió un detalle, para que "Volver" regrese allí (Inicio → Detalle → Inicio, Productos → Detalle → Productos).
*   Limitación conocida: la URL no cambia al navegar, por lo que no hay enlaces directos a una vista ni funciona el botón "atrás" del navegador. La alternativa sería adoptar React Router.

## 📦 Funcionalidades Principales

*   **Catálogo dinámico desde la API:** el frontend consume `GET /api/productos` con `fetch`, manejando los estados de carga, éxito y error.
*   **Productos destacados:** se definen con `destacado: true` en `Backend/data.js`. La API devuelve siempre todos los productos y `ProductList` filtra en el cliente cuando recibe `soloDestacados` (es lo que usa Inicio). El catálogo completo usa el mismo componente sin esa prop. Con un catálogo pequeño filtrar en el cliente es más simple; si creciera, podría moverse al backend (por ejemplo, `?destacado=true`).
*   **Carrito de compras:**
    *   El estado vive en `App.js` (`useState`). Cada ítem es el producto más su `cantidad`.
    *   `agregarAlCarrito` suma una unidad si el producto ya está en el carrito, en lugar de duplicarlo.
    *   `cambiarCantidad(id, ±1)` aumenta o disminuye la cantidad; al llegar a 0 el producto se quita. `eliminarDelCarrito(id)` quita el producto completo.
    *   El contador del Navbar muestra el total de unidades, y la vista `Carrito` muestra los ítems y el total en pesos.
    *   Limitaciones: el carrito no se guarda (se vacía al recargar la página) y no hay checkout, pagos ni pedidos en el backend.
*   **Formulario de contacto controlado:** valida los datos del lado del cliente y simula un envío exitoso con un mensaje de confirmación. No envía datos al backend.

## ⚙️ Instrucciones de Instalación y Ejecución

Requiere Node.js y npm. Para ejecutar el proyecto hay que levantar ambos servidores a la vez, en dos terminales distintas.

**1. Levantar el Backend (API)**
1. Desde la raíz del proyecto: `cd Backend`
2. Instalar las dependencias: `npm install`
3. Iniciar el servidor: `node server.js` (queda en `http://localhost:3001`). El `package.json` del backend no define un script `start`.

**2. Levantar el Frontend (Cliente React)**
1. En otra terminal, desde la raíz del proyecto: `cd client`
2. Instalar las dependencias: `npm install`
3. Iniciar el servidor de desarrollo: `npm start` (se abre en `http://localhost:3000`).

Con el backend apagado el catálogo muestra el mensaje de error "Ups! Hubo un problema".

## 🧠 Decisiones Técnicas

*   **Navegación por estado en lugar de React Router:** es lo más simple para el alcance educativo del proyecto y evita agregar una dependencia. Su costo es la limitación de URL descrita arriba.
*   **Destacados con el campo `destacado`:** reutiliza un dato que ya existía en el modelo, sin inventar otro criterio, y permite reutilizar `ProductList` para Inicio y para el catálogo completo.
*   **Carrito con `cantidad` por ítem:** evita entradas duplicadas y hace que el contador y el total se calculen directamente desde el estado.
*   **Estado del carrito en `App`:** el contador del Navbar y la vista `Carrito` lo comparten mediante props, sin necesidad de Context ni librerías.

## 📅 Estado del Proyecto

*Sprint 3 y 4 Finalizados.*

Pendientes conocidos: persistencia del carrito, checkout y una URL por vista.
