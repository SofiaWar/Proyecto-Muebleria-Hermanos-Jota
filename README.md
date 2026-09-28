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

El proyecto ha sido reestructurado en dos directorios principales para separar las responsabilidades lógicas y de presentación:

*   **/backend (Node.js & Express):** Servidor web que aloja nuestra API REST básica.
    *   Utiliza `express.Router` para organizar las rutas de forma modular.
    *   Implementa middlewares personalizados para funcionalidades de logging (registro de método y URL) y parseo JSON.
    *   Manejador centralizado de errores y peticiones 404.
*   **/client (React):** Interfaz de usuario reconstruida desde cero utilizando la arquitectura de componentes.
    *   Componentización en elementos reutilizables (`Navbar`, `Footer`, `ProductCard`, `ProductList`, etc.).
    *   Manejo del estado de la aplicación (carrito de compras y formularios controlados) mediante el hook `useState`.
    *   Implementación de renderizado condicional para mostrar diferentes vistas en la UI (Catálogo, Contacto, Detalle).

## 📦 Funcionalidades Principales

*   **Catálogo Dinámico desde API:** El frontend realiza peticiones asíncronas mediante `fetch` a la ruta `GET /api/productos` del backend, manejando el ciclo de vida de la petición (estados de carga, éxito y error).
*   **Gestión de Carrito:** Los productos se añaden al estado global en React, actualizando dinámicamente el contador numérico en la barra de navegación pasándolo mediante *props*.
*   **Formulario Controlado:** La sección de contacto valida los datos del lado del cliente simulando un envío exitoso con actualización en el DOM.

## ⚙️ Instrucciones de Instalación y Ejecución

Para ejecutar este proyecto de forma local, es necesario levantar ambos servidores de manera concurrente en dos terminales distintas.

**1. Levantar el Backend (API)**
1. Abrir una terminal en la raíz del proyecto y navegar hacia el directorio del servidor: `cd Backend`
2. Instalar las dependencias: `npm install`
3. Iniciar el servidor local: `node server.js`

**2. Levantar el Frontend (Cliente React)**
1. Abrir una nueva terminal y navegar hacia el directorio del cliente: `cd client`
2. Instalar las dependencias: `npm install`
3. Iniciar el servidor de desarrollo: `npm start` (Se abrirá en `http://localhost:3000` por defecto).

## 📅 Estado del Proyecto

*Sprint 3 y 4 Finalizados.*
