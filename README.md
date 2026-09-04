# 🪑 E-commerce Mueblería Hermanos Jota

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Mueblería Hermanos Jota** es la fachada completa y experiencia interactiva del cliente para un e-commerce ficticio. Este proyecto ha sido construido utilizando tecnologías del lado del cliente (HTML, CSS y JavaScript) y enfocado en la experiencia del usuario, diseño modular y buenas prácticas.

## 👥 Equipo de Trabajo (Grupo 9)

Este proyecto fue desarrollado de manera colaborativa por el **Grupo 9**:

1. **Ángela Lucero Álvarez**
2. **Ezequiel Gonzalez**
3. **Lautaro Leal Del Prete**
4. **Matias Edgardo Tula Sarquis**
5. **Sofía Guerra**

## 🚀 Arquitectura y Tecnologías

El proyecto ha sido modularizado para facilitar el mantenimiento y la escalabilidad:

- **HTML5 Semántico**: Uso correcto de `<header>`, `<main>`, `<footer>`, `<section>` y `<article>`.
- **CSS3 Modular**:
  - `variables.css`: Sistema de diseño (colores, fuentes).
  - `base.css`: Estilos globales y reset.
  - `layout.css`: Header, Navbar minimalista, y Footer funcional.
  - `pages.css`: Estilos específicos de secciones y páginas.
- **JavaScript Modularizado (Vanilla JS sin ES Modules)**:
  Se separaron los scripts para mejorar la organización del código sin depender de un servidor local, evitando problemas de CORS al abrir los archivos localmente (`file://`):
  - `data.js`: Almacena el array de productos simulando la base de datos.
  - `cart.js`: Contiene toda la lógica relacionada con LocalStorage y el carrito.
  - `ui.js`: Controla el renderizado de tarjetas en el DOM y la apertura de modales.
  - `app.js`: Coordina los eventos globales y la inicialización de la página.

## 📦 Funcionalidades Principales

- **Catálogo Dinámico:** Renderizado de productos desde una "base de datos" JS utilizando Promesas y funciones asíncronas para simular latencia de red.
- **Carrito de Compras Persistente:** Uso de `localStorage` para guardar productos añadidos al carrito.
- **Modal de Detalles:** Vista rápida de productos sin recargar la página.
- **Diseño Mobile-First:** El CSS está pensado para funcionar fluidamente en celulares, tablets y monitores grandes.
- **Flujo de Compra Simulado:** El usuario puede llegar hasta la pantalla final del carrito y validar su compra con éxito.

## 📅 Estado del Proyecto

_Sprint 1 y 2 Finalizados._ Las próximas iteraciones incluirán validación estricta de formularios y consumo de APIs reales.
