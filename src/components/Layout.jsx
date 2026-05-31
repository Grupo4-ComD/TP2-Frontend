import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FootprintsBackground from "./FootprintsBackground";

function Layout({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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
      
      {/* MODO DIOS: Inyectamos el CSS directamente en React para aplastar reglas viejas */}
      <style>{`
        .menu-toggle, .mobile-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          /* El botón hamburguesa flota siempre arriba a la derecha */
          .menu-toggle {
            display: flex !important;
            align-items: center; justify-content: center;
            background-color: var(--secondary-color, #6366f1) !important;
            color: white !important; border: none;
            font-size: 24px; width: 45px; height: 45px;
            position: fixed !important; top: 15px !important; right: 15px !important;
            z-index: 10001 !important; border-radius: 8px; cursor: pointer;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }

          /* ESCONDEMOS LA BARRA A LA FUERZA (-100%) Y LA TRAEMOS (0) CON EL ESTADO DE REACT */
          div.app-shell aside.app-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: ${menuOpen ? '0' : '-100%'} !important;
            width: 280px !important;
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            z-index: 10000 !important;
            background-color: var(--sidebar-bg, #1e293b) !important;
            transition: left 0.4s ease-in-out !important;
            box-shadow: 5px 0 15px rgba(0,0,0,0.5) !important;
             overflow-y: auto !important;
          }

          /* Fondo oscuro atrás de la barra */
          .mobile-overlay {
            display: ${menuOpen ? 'block' : 'none'} !important;
            position: fixed !important; inset: 0 !important;
            background: rgba(15, 23, 42, 0.6) !important;
            backdrop-filter: blur(2px) !important;
            z-index: 9999 !important;
          }

          /* Liberamos todo el ancho de la pantalla */
          div.app-shell { display: block !important; width: 100% !important; }
          main.app-main { padding-top: 80px !important; width: 100% !important; margin-left: 0 !important; }
        }
      `}</style>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>

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
                      onClick={closeMenu}
                    >
                      <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Div vacío que se usa para oscurecer el fondo */}
      <div className="mobile-overlay" onClick={closeMenu}></div>

      <FootprintsBackground />

      <main className="app-main">
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
