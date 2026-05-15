import React from 'react';
import './Bitacora.css';

function Bitacora() {
  return (
    <div className="bitacora-module fade-in-up">
      <header className="bitacora-header">
        <h2>Bitácora del Proyecto</h2>
        <p>Documentación técnica, evolución y arquitectura de nuestra SPA.</p>
      </header>

      {/* NUEVO: Historial de Desarrollo con las fechas simuladas */}
      <section className="bitacora-card" style={{ marginBottom: '20px' }}>
        <h3>📅 Historial de Desarrollo</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <li>
            <strong style={{ color: 'var(--secondary-color)' }}>02/05/2026 - Planificación y Setup Inicial:</strong><br />
            Nos reunimos para organizar la evolución de nuestro proyecto estático del TP1 hacia una arquitectura de componentes, transformándolo en una <em>Single Page Application</em> (SPA). Definimos el flujo de trabajo utilizando Trello para la asignación de módulos y la estrategia GitFlow en GitHub para no pisarnos el código al fusionar ramas. Inicializamos el entorno de trabajo usando Vite.
          </li>
          <li>
            <strong style={{ color: 'var(--secondary-color)' }}>05/05/2026 - Refactorización de Portada y Perfiles:</strong><br />
            Comenzamos a migrar la presentación del equipo. Braian se encargó de modernizar la grilla principal (<code>.team-grid</code>) y añadió animaciones avanzadas, incluyendo el "efecto vinilo" para su carrusel de discos. Mailén resolvió conflictos de diseño, ajustando los breakpoints y corrigiendo el menú hamburguesa. Verónica y Guillermo estructuraron los datos de sus perfiles dentro del objeto <code>TEAM_DATA</code> para que React los renderice dinámicamente.
          </li>
          <li>
            <strong style={{ color: 'var(--secondary-color)' }}>08/05/2026 - Desarrollo de Módulos de Datos:</strong><br />
            Nos enfocamos en la lógica asíncrona y de filtrado. Armamos el archivo <code>tecnologias.json</code> con los 20 objetos obligatorios y programamos el Buscador para que filtre en tiempo real usando el hook <code>useState</code>. Luego, implementamos el Módulo de la API Externa consumiendo los personajes de Rick and Morty, añadiendo la paginación y capturando los errores del servidor.
          </li>
          <li>
            <strong style={{ color: 'var(--secondary-color)' }}>10/05/2026 - Galería Lightbox y UX:</strong><br />
            Para cumplir con otro requerimiento obligatorio, construimos la Galería de Imágenes interactiva. Logramos aislar el estado del Lightbox para que las imágenes se amplíen con el fondo oscuro y respondan a las teclas de flechas y ESC. Braian sumó un efecto de carga simulado en terminal para optimizar la transición visual al entrar a cada perfil.
          </li>
          <li>
            <strong style={{ color: 'var(--secondary-color)' }}>11/05/2026 - Bitácora, Árbol de Renderizado y Cierre:</strong><br />
            Consolidamos el sistema de rutas con <code>react-router-dom</code> y dejamos lista esta Bitácora, incluyendo la justificación de nuestra migración a React y el esquema jerárquico del Árbol de Renderizado.
          </li>
        </ul>
      </section>

      <div className="bitacora-grid">
        <section className="bitacora-card">
          <h3>👥 Roles y Flujo de Trabajo</h3>
          <p>
            El equipo <strong>DeveloPET Friendly</strong> se organizó utilizando una metodología ágil. 
            Para la gestión de tareas y división de módulos empleamos tableros tipo Trello, asignando 
            historias de usuario a cada integrante. El control de versiones se realizó mediante <strong>GitHub</strong>, 
            utilizando ramas (branches) individuales bajo la estrategia de <em>GitFlow</em> para evitar 
            conflictos en el código principal (main) al momento de fusionar (merge) el trabajo de los diferentes portafolios.
          </p>
        </section>

        <section className="bitacora-card">
          <h3>🚀 Justificación de Migración a React</h3>
          <p>
            En el TP1 contábamos con múltiples archivos HTML, CSS y JS separados, lo que generaba redundancia 
            y recargas completas del navegador al cambiar de página. La evolución hacia una arquitectura 
            basada en <strong>React.js</strong> nos permitió transformar el proyecto en una <em>Single Page Application (SPA)</em>.
          </p>
          <p style={{ marginTop: '10px' }}>
            <strong>Ventajas logradas:</strong> Modularización del código (componentes reutilizables), 
            manejo eficiente del DOM Virtual para actualizaciones en tiempo real (como en el buscador JSON), 
            y enrutamiento dinámico (React Router) para una navegación sin interrupciones.
          </p>
        </section>
      </div>

      <section className="bitacora-card tree-section" style={{ marginTop: '20px' }}>
        <h3>🌳 Árbol de Renderizado (Component Tree)</h3>
        <p className="text-muted">Estructura jerárquica de la aplicación, desde la raíz hasta los hijos.</p>
        
        <div className="tree-visualizer">
          <ul className="tree">
            <li>
              <span className="node root">App.jsx (Router)</span>
              <ul>
                <li>
                  <span className="node layout">Layout.jsx (Estructura Base)</span>
                  <ul>
                    <li><span className="node leaf">Sidebar / Navbar (Navegación Fija)</span></li>
                    <li>
                      <span className="node layout">Contenido Dinámico (Routes)</span>
                      <ul>
                        <li>
                          <span className="node view">HomeDashboard.jsx (Ruta "/")</span>
                          <ul><li><span className="node leaf">MemberCard (Tarjetas Equipo)</span></li></ul>
                        </li>
                        <li>
                          <span className="node view">UserProfile.jsx (Ruta "/perfil/:id")</span>
                          <ul><li><span className="node leaf">ProfileView (Info y Carrusel)</span></li></ul>
                        </li>
                        <li>
                          <span className="node view">ExternalApi.jsx (Ruta "/api")</span>
                          <ul><li><span className="node leaf">Paginación y Tarjetas API</span></li></ul>
                        </li>
                        <li><span className="node view">LocalDataExplorer.jsx (Ruta "/json")</span></li>
                        <li>
                          <span className="node view">ImageGallery.jsx (Ruta "/galeria")</span>
                          <ul><li><span className="node leaf">Lightbox (Modal Interactivo)</span></li></ul>
                        </li>
                        <li><span className="node view">Bitacora.jsx (Ruta "/bitacora")</span></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Bitacora;