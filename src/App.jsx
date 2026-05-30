import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeDashboard from './components/HomeDashboard';
import UserProfile from './components/UserProfile';
import LocalDataExplorer from './components/LocalDataExplorer';
import ExternalApi from './components/ExternalApi';
import ImageGallery from './components/ImageGallery';
import Bitacora from './components/Bitacora';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 1. Ruta Principal: La portada con las tarjetas animadas */}
          <Route path="/" element={<HomeDashboard />} />
          
          {/* 2. Ruta Dinámica: El perfil de cada integrante */}
          <Route path="/perfil/:id" element={<UserProfile />} />
          <Route path="/api" element={<ExternalApi />} />
          
          <Route path="/explorador" element={<LocalDataExplorer />} />
          <Route path="/bitacora" element={<Bitacora />} />
         
          <Route path="/galeria" element={<ImageGallery />} />
           
          {/* Ruta 404 por si el usuario escribe mal la URL */}
          <Route path="*" element={<h2>Error 404: Página no encontrada</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;