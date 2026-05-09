<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

function Layout({ children }) {
  // Estado para controlar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto que lee el estado y aplica la clase al body del HTML
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Fija (Requerimiento obligatorio TP2) */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <h2>Grupo 4</h2>
        </div>
        <nav className="sidebar-nav">
          <Link to="/">🏠 Inicio</Link>
          <Link to="/explorador">🔍 Buscador JSON</Link>
          <Link to="/api">🌐 API Externa</Link>
          <Link to="/galeria">🖼️ Galería</Link>
          <Link to="/bitacora">📝 Bitácora</Link>
        </nav>
      </aside>

      {/* Panel Central */}
      <div className="main-content">
        {/* Cabecera superior con el botón de Tema */}
        <header className="topbar">
          <h1>Panel de Control Web</h1>
          <button 
            className="btn-theme" 
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </header>

        {/* Aquí adentro React inyectará la vista que corresponda (Home, Perfil, etc) */}
        <main className="content-area">
          {children}
        </main>
      </div>
=======
import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Layout({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navSections = useMemo(
    () => [
      {
        title: 'Dashboard',
        items: [{ to: '/', label: 'Inicio', icon: '🏠' }]
      },
      {
        title: 'Equipo',
        items: [
          { to: '/perfil/veronica', label: 'Verónica', icon: '👤' },
          { to: '/perfil/mailen', label: 'Mailén', icon: '👤' },
          { to: '/perfil/braian', label: 'Braian', icon: '👤' },
          { to: '/perfil/guillermo', label: 'Guillermo', icon: '👤' }
        ]
      },
      {
        title: 'Exploradores',
        items: [{ to: '/explorador', label: 'Buscador JSON', icon: '🔍' }]
      },
      {
        title: 'Proyecto',
        items: [
          { to: '/api', label: 'API Externa', icon: '☁️' },
          { to: '/galeria', label: 'Galería', icon: '🖼️' },
          { to: '/bitacora', label: 'Bitácora', icon: '📘' }
        ]
      }
    ],
    []
  );

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <img className="brand-logo" src="/img/logodev.jpeg" alt="Logo Dev" />
            <div className="brand-title">Grupo 4</div>
            <div className="brand-subtitle">TP2 • React</div>
          </div>
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={theme === 'light'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>

        <nav className="sidebar-nav" aria-label="Navegación principal">
          {navSections.map((section) => (
            <div key={section.title} className="nav-section">
              <div className="nav-section-title">{section.title}</div>
              <ul className="nav-list">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
                      end={item.to === '/'}
                    >
                      <span className="nav-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="nav-label">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="app-main">
        <div className="app-content">{children}</div>
      </main>
>>>>>>> Stashed changes
    </div>
  );
}

export default Layout;
