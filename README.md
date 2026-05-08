# TP2: Portafolio Interactivo en React - Grupo 4

**Enlace al Proyecto Desplegado (Vercel):** `[Próximamente]`

## 1. Descripción del Proyecto
Este proyecto es una *Single Page Application* (SPA) desarrollada con React y Vite. Representa la evolución de nuestro portafolio estático original (TP1), migrando hacia una arquitectura de componentes dinámicos y enrutamiento con React Router. El sistema funciona como un "Dashboard" centralizado que permite explorar los perfiles profesionales de cada integrante del equipo, buscar tecnologías en tiempo real y consumir datos de servicios externos.

## 2. Integrantes
*   **Guillermo** - [Perfil de (link)
*   **Braian** -[Perfil de (link)
*   **Mailén** - [Perfil de (link)
*   **Verónica** - [Perfil de (link)

## 3. Tecnologías Utilizadas
*   **Frontend:** React (Hooks: `useState`, `useParams`), Vite, JavaScript (ES6+), HTML5, CSS3 puro.
*   **Enrutamiento:** React Router DOM.
*   **Despliegue y Control de Versiones:** Git, GitHub, Vercel.

## 4. Estructura de Archivos
La arquitectura del proyecto está modularizada en la carpeta `src`:
*   `src/components/`: Contiene todos los componentes funcionales de React.
    *   `Layout.jsx`: Componente padre que contiene la Sidebar fija.
    *   `HomeDashboard.jsx`: Vista de la portada animada.
    *   `UserProfile.jsx`: Plantilla dinámica del perfil de cada integrante.
    *   `LocalDataExplorer.jsx`: Componente con el buscador en tiempo real.
    *   *(Pendiente)* `ApiModule.jsx` y `ImageGallery.jsx`.
*   `src/data/`: Contiene el archivo estático `tecnologias.json` con los 20 objetos.
*   `public/img/`: Recursos gráficos, avatares y capturas.

## 5. Guía de Estilos
*   **Paleta de Colores (Basada en Variables CSS):**
    *   Fondo Principal: `#f9f9f9`
    *   Texto Principal: `#333333`
    *   Sidebar y Header: `#2c3e50` (Azul Oscuro elegante)
    *   Botones y Acentos: `#3498db` (Azul Claro)
    *   Elementos de contraste: `#e74c3c` (Rojo acento)
*   **Tipografías:**
    *   **Poppins** (Principal, elegante y redondeada): [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
    *   **Roboto** (Fallback y lectura fluida): [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
*   **Iconografía y Privacidad:**
    *   Se utilizaron recursos nativos (emojis) y CSS puro. Para proteger la privacidad del equipo, se utilizaron avatares e imágenes generadas por Inteligencia Artificial en lugar de fotografías reales.

## 6. Funcionalidades y Componentes Implementados (Lo hecho)
Hasta el momento, la aplicación cuenta con la siguiente lógica en React:

1.  **Navegación Dashboard (`Layout.jsx` y `App.jsx`):** Se implementó `react-router-dom` para crear una barra lateral fija. Al hacer clic en los enlaces, la vista central cambia sin recargar la página (SPA).
2.  **Portada Dinámica (`HomeDashboard.jsx`):** Renderiza dinámicamente un arreglo de objetos usando `.map()`. Incorpora animaciones de entrada en cascada configuradas mediante `animation-delay` en línea.
3.  **Perfil de Usuario Interactivo (`UserProfile.jsx`):**
    *   Utiliza el hook `useParams` para leer la URL y cargar los datos dinámicamente.
    *   Implementa un carrusel manual utilizando el hook `useState` para cambiar el índice de la imagen renderizada.
    *   Las barras de habilidades se llenan dinámicamente utilizando variables de CSS (`--target-width`) conectadas a los datos locales.
4.  **Buscador en Tiempo Real (`LocalDataExplorer.jsx`):** 
    *   Lee un archivo JSON de 20 objetos (`tecnologias.json`).
    *   Utiliza `useState` para capturar el valor del *input* y el método `.filter()` nativo de JavaScript para actualizar la grilla de resultados instantáneamente.

*(Nota : Aquí debemos agregar las capturas de pantalla de la Home y del Buscador funcionando)*
`![Captura del Buscador](link-a-tu-imagen.png)`

## 7. Funcionalidades en Desarrollo (Lo que falta)
Las siguientes secciones requeridas para la entrega final se encuentran actualmente en construcción:

*   **Módulo de API Externa:** Consumo asíncrono de un servicio público, con gestión de estados de *loading* (carga), renderizado de errores y controles de paginación.
*   **Galería Lightbox:** Visualizador interactivo de imágenes que permita hacer zoom y cerrarse al presionar la tecla ESC.
*   **Bitácora y Evolución:** La vista `/bitacora` que justificará el paso de HTML a React e incluirá el diagrama visual del **Árbol de Componentes** de nuestra SPA.

## 8. Uso de Inteligencia Artificial
En el desarrollo de este proyecto, se utilizaron asistentes de Inteligencia Artificial (especificar modelo, ej. Gemini/ChatGPT) para los siguientes propósitos:
*   **Resolución de Bugs:** Identificación de errores de ruteo de Vite (`Failed to resolve import`) originados por rutas relativas incorrectas o archivos CSS faltantes.
*   **Generación de Imágenes:** Creación de los avatares ficticios para mantener la privacidad de los integrantes.
