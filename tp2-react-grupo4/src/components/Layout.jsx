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
    </div>
  );
}

export default Layout;
