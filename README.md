# TP2: Portafolio Interactivo en React - Grupo 4

**Enlace al Proyecto Desplegado (Vercel):** `[https://tp-2-frontend-five.vercel.app/]`

## 1. Descripción del Proyecto
Este proyecto es una *Single Page Application* (SPA) desarrollada con React y Vite. Representa la evolución de nuestro portafolio estático original (TP1), migrando hacia una arquitectura de componentes dinámicos y enrutamiento con React Router. El sistema funciona como un "Dashboard" centralizado que permite explorar los perfiles profesionales de cada integrante del equipo, buscar tecnologías en tiempo real y consumir datos de servicios externos.

## 2. Integrantes
*   **Guillermo** - [Perfil de (link)
*   **Braian** -[Perfil de (link)
*   **Mailén** - [Perfil de (link)
*   **Verónica** - [Perfil de (link)

## 3. Tecnologías Utilizadas
* **Core:** React, Vite, JavaScript (ES6+), HTML5, CSS3.
* **Enrutamiento:** React Router DOM.
* **Diseño y UI:** Variables CSS (Custom Properties) para Modo Oscuro, CSS Modules / Hojas de estilo estructuradas.
* **Fuentes e Iconos:** Google Fonts, FontAwesome.
* **Despliegue:** Vercel / GitHub Pages.

## 4. Estructura de Archivos
Nuestra arquitectura sigue el patrón estándar de un proyecto React inicializado con Vite:
```text
/src
 ├── /components    # Componentes reutilizables (HomeDashboard, UserProfile, ExternalApi, etc.)
 ├── /data          # Archivo tecnologias.json con 20 objetos para la base de datos local
 ├── App.jsx        # Enrutador principal (React Router) y estructura base
 ├── index.css      # Estilos globales y variables del Dark Mode
 └── main.jsx       # Punto de entrada a la aplicación (Virtual DOM)
/public
 └── /img           # Imágenes estáticas (avatares, miniaturas de proyectos)

## 5. Guía de Estilos
Paleta de Colores (Modo Oscuro):
Superficie Principal (Background): #0f172a
Superficie de Tarjetas (Cards): #1e293b
Texto Primario: #f8fafc
Acento Primario: #3b82f6 (Azul)
Acento Secundario / Success: #10b981 (Verde Esmeralda)
Tipografías: Inter obtenida desde Google Fonts para garantizar excelente legibilidad en interfaces digitales modernas.
Iconografía: Emojis nativos y FontAwesome para el diseño de la botonera lateral.

## 6. Funcionalidades y Componentes Implementados (Lo hecho)
HomeDashboard.jsx & UserProfile.jsx: Renderizado dinámico de tarjetas iterando sobre un arreglo de datos (TEAM_DATA). Incluye efecto de carga de terminal simulada al cambiar de vistas.
LocalDataExplorer.jsx: Buscador en tiempo real que utiliza el hook useState y el método .filter() sobre un archivo JSON local, actualizando el Virtual DOM instantáneamente ante cada tecla presionada por el usuario.
ExternalApi.jsx: Consumo asíncrono de la API de Rick & Morty mediante fetch y useEffect. Incluye manejo de estados avanzados: pantalla de carga (isLoading), captura de errores con botón de reintento (try...catch), y controles de paginación obligatorios.
ImageGallery.jsx: Galería que utiliza estado para implementar un modal interactivo (Lightbox) controlable mediante clics, flechas del teclado y la tecla ESC.

*(Nota : Aquí debemos agregar las capturas de pantalla de la Home, appi y del Buscador funcionando)*
`![Captura del Buscador](link-a-tu-imagen.png)`

## 7. Evolución del Proyecto (De TP1 a TP2)
En el Trabajo Práctico 1, contábamos con múltiples archivos HTML inconexos (index.html, vero.html, guille.html) que requerían recargar el navegador en cada clic, compartiendo bloques redundantes de código (como la barra de navegación). Con la migración a React, logramos:
Modularización: Convertimos la navegación y el layout en componentes reutilizables.
Navegación Fluida: Gracias a react-router-dom, implementamos una SPA sin tiempos de recarga de página.
Manejo del DOM Eficiente: Funciones que requerían manipulación directa y laboriosa del DOM con vanilla JS, ahora se controlan fácilmente mediante el estado (useState) de React.

## 8. Uso de Inteligencia Artificial
En el desarrollo de este proyecto, utilizamos la asistencia de Inteligencia Artificial siguiendo las directrices de la cátedra:
Herramientas utilizadas: ChatGPT / Gemini / NotebookLM.
Uso en Contenido y Código: La IA fue clave como herramienta de Pair Programming. Se utilizó para refactorizar efectos visuales de CSS puro del TP1 y adaptarlos a la nueva estructura JSX de las tarjetas de perfil. Además, nos asistió en el debugging (resolución de errores) durante la implementación de la paginación y manejo de errores asíncronos en la API externa. También se empleó para estructurar la documentación jerárquica del Árbol de Componentes en la Bitácora.
Imágenes: Se emplearon herramientas generativas de IA y recursos gráficos digitales para la creación de avatares de perfil representativos, manteniendo la privacidad de los rostros de los integrantes tal como habilita la consigna.
