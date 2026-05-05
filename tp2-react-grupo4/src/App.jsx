import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeDashboard from './components/HomeDashboard';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 1. Ruta Principal: La portada con las tarjetas animadas */}
          <Route path="/" element={<HomeDashboard />} />
          
          {/* 2. Ruta Dinámica: El perfil de cada integrante */}
          <Route path="/perfil/:id" element={<UserProfile />} />
          
          {/* 3. Rutas futuras obligatorias del TP2 (En construcción) */}
          <Route path="/explorador" element={<h2>Aquí irá el buscador JSON en tiempo real</h2>} />
          <Route path="/api" element={<h2>Aquí irá el consumo de la API Externa</h2>} />
          <Route path="/galeria" element={<h2>Aquí irá la Galería Lightbox interactiva</h2>} />
          <Route path="/bitacora" element={<h2>Aquí irá la Bitácora y el Árbol de Componentes</h2>} />
          
          {/* Ruta 404 por si el usuario escribe mal la URL */}
          <Route path="*" element={<h2>Error 404: Página no encontrada</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;