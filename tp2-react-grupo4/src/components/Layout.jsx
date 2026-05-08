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
    </div>
  );
}

export default Layout;