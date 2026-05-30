# 🚀 Grupo 4 - TP2: Proyecto React en Equipo (SPA)

## 📌 Descripción del Proyecto
Este proyecto es una Single Page Application (SPA) desarrollada con React, que representa la evolución y migración de nuestro Trabajo Práctico 1 estático hacia una arquitectura basada en componentes. Implementa una navegación de estilo Dashboard con una barra lateral (Sidebar) responsiva, gestión de rutas con React Router DOM, consumo asíncrono de una API pública, y un explorador dinámico de archivos JSON locales.

## 🔗 Enlace al Proyecto Desplegado
* **Vercel:** [https://tp-2-frontend-five.vercel.app/]

## 👥 Integrantes del Equipo
* **Braian ** - [https://tp-2-frontend-five.vercel.app/perfil/braian]
* **Guillermo ** - [https://tp-2-frontend-five.vercel.app/perfil/guillermo]
* **Mailén ** - [https://tp-2-frontend-five.vercel.app/perfil/mailen]
* **Verónica ** - [https://tp-2-frontend-five.vercel.app/perfil/veronica]

## 🛠️ Tecnologías Utilizadas
* **Core:** React, React Router DOM, JavaScript (ES6+).
* **Maquetado y Estilos:** HTML5, CSS3 puro (Flexbox, Grid, Variables CSS, Modo Oscuro).
* **Entorno y Build:** Vite, Node.js, NPM.
* **Control de Versiones y Deploy:** Git, GitHub, Vercel.
* **Recursos Visuales:** Emojis nativos, Google Fonts.

## 📁 Estructura de Archivos
La arquitectura del proyecto sigue las buenas prácticas de React y Vite:

```text
/
├── public/
│   └── img/               # Recursos estáticos, avatares e imágenes de proyectos
├── src/
│   ├── components/        # Componentes reutilizables (Layout, Sidebar, Cards)
│   ├── pages/             # Vistas principales (Home, Perfiles, Galería, Bitácora)
│   ├── App.jsx            # Configuración principal de React Router
│   ├── main.jsx           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales y variables de Modo Oscuro
├── index.html             # Plantilla base
└── package.json           # Dependencias del proyecto
```

## 🎨 Guía de Estilos
* **Tipografías:** [Roboto](https://fonts.google.com/specimen/Roboto) - Google Fonts.
* **Paleta de Colores (Hexadecimales):**
  * Fondo Modo Oscuro: `#1e293b` (Sidebar) / `#0f172a` (Main)
  * Fondo Modo Claro: `#ffffff` / `#f3f4f6`
  * Color Primario (Acentos/Botones): `#3b82f6` / `#6366f1`
* **Iconografía:** Emojis nativos de sistema integrados en la estructura de navegación y textos.

## ⚡ JavaScript y React (Funcionalidades Dinámicas)
La aplicación cuenta con una fuerte lógica de componentes interactivos:
1. **Navegación Dinámica y Sidebar:** Uso de `useState` para controlar la apertura y cierre del "Menú Hamburguesa" en dispositivos móviles, inyectando clases dinámicamente (`active`).
2. **Theme Toggle (Modo Oscuro/Claro):** Implementado con `useState` y `useEffect` guardando la preferencia del usuario en el `localStorage`.
3. **Explorador JSON:** Lógica de filtrado en tiempo real utilizando métodos de array (`filter`, `map`) actualizando el estado de la vista de forma inmediata.
4. **Consumo de API Externa:** Peticiones asíncronas (`fetch`) controladas con `useEffect`, manejando estados de carga (`isLoading`) y un sistema de paginación interactivo.
5. **Renderizado de Perfiles:** Inyección dinámica de datos (`TEAM_DATA`) para mostrar habilidades, progreso y proyectos a través del paso de *props* e identificadores en la URL (`useParams`).

## 📸 Capturas de Pantalla
### ● Dashboard Principal
Vista principal con la grilla de integrantes y acceso rápido a cada perfil, hover activo en card de Braian.

<img width="1620" height="914" alt="Captura de pantalla 2026-05-30 163134" src="https://github.com/user-attachments/assets/8f0a6b90-2c4b-40a1-9b54-d6d192400546" />

### ● Perfil Individual
Vista detallada de cada perfil con habilidades técnicas, tech stack y carrusel de proyectos.

<img width="1544" height="1023" alt="Captura de pantalla 2026-05-30 145557" src="https://github.com/user-attachments/assets/fda942dd-c17c-4776-a6e4-f79b9d6a6506" />

### ● Buscador JSON en Tiempo Real
Filtrado dinámico activo sobre 20 objetos locales con actualización instantánea.

<img width="1609" height="916" alt="Captura de pantalla 2026-05-30 145609" src="https://github.com/user-attachments/assets/f54c14a4-1d1e-4096-aff1-eca0cc071223" />

### ● API Externa con Paginación
Consumo asíncrono de la API de Rick and Morty con sistema de navegación por páginas.

<img width="1606" height="1050" alt="Captura de pantalla 2026-05-30 163530" src="https://github.com/user-attachments/assets/e2d467dd-b9db-4edc-8d17-2e156d6197c4" />

### ● Galería Interactiva
Visualizador tipo Grid con funcionalidad Lightbox, navegación con flechas y cierre por ESC.

<img width="80%" height="926" alt="Captura de pantalla 2026-05-30 163102" src="https://github.com/user-attachments/assets/945e8c12-0482-4af5-ab77-d05b728ea051" />
- <img width="80%" height="928" alt="Captura de pantalla 2026-05-30 163546" src="https://github.com/user-attachments/assets/f176f2d9-9466-49e2-9878-c1f0462d4503" />

### ● Bitácora del Proyecto
Documentación técnica con historial de desarrollo, roles y justificación de migración a React.

<img width="1614" height="981" alt="Captura de pantalla 2026-05-30 163655" src="https://github.com/user-attachments/assets/32dcaf50-9531-4b2b-94bc-4a777b467b58" />


## 📈 Evolución del Proyecto (Migración TP1 a TP2)
Se realizó una reestructuración total del código del TP1. Pasamos de utilizar archivos HTML y scripts JS aislados a un entorno modularizado con **Vite y React**. 
* Reemplazamos la navegación superior clásica por una **Sidebar Fija tipo Dashboard** para centralizar el enrutamiento.
* Refactorizamos el CSS para evitar conflictos de clases utilizando selectores más específicos y aislando responsabilidades.
* Eliminamos la recarga de páginas mediante la implementación de `React Router DOM`.

## 🤖 Uso de Inteligencia Artificial
En este proyecto, las herramientas de IA funcionaron como un asistente técnico de gran valor:
* **Herramientas utilizadas:** ChatGPT / Claude.
* **Uso en Código y Debugging:** 
  * Se utilizó para diseñar la lógica dinámica del **Menú Hamburguesa**, inyectando estado de React (`menuOpen`) directamente en las clases de CSS para forzar transiciones visuales limpias en móviles y eludir problemas de memoria caché.
  * Ayudó a diagnosticar y corregir problemas de enrutamiento de imágenes al migrar los recursos estáticos hacia la carpeta `public/` de Vite, corrigiendo rutas relativas rotas en `App.js` y componentes individuales.
* **Uso en Contenido:** Generación de textos descriptivos, optimización de biografías de perfiles e ideas para esquematizar los componentes de la Bitácora.
