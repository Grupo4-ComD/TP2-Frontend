import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* Barra Lateral Fija (Sidebar) */}
      <aside style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
        {/* Aquí luego pueden poner el logo del grupo como pide el TP */}
        <h2>Grupo 4</h2>
        <nav style={{ marginTop: '30px' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>🏠 Inicio (Dashboard)</Link></li>
            <li><Link to="/explorador" style={{ color: '#fff', textDecoration: 'none' }}>🔍 Buscador JSON</Link></li>
            <li><Link to="/api" style={{ color: '#fff', textDecoration: 'none' }}>☁️ API Externa</Link></li>
            <li><Link to="/galeria" style={{ color: '#fff', textDecoration: 'none' }}>🖼️ Galería Lightbox</Link></li>
            <li><Link to="/bitacora" style={{ color: '#fff', textDecoration: 'none' }}>📘 Bitácora</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Panel Central Dinámico (MainContent) */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9' }}>
        {children}
      </main>

    </div>
  );
}

export default Layout;