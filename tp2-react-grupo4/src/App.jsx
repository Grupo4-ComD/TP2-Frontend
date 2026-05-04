import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Aquí importaremos las vistas a medida que las vayamos creando
// import HomeDashboard from './components/HomeDashboard'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Ruta principal temporal */}
          <Route path="/" element={<h1>Bienvenido al Dashboard del Grupo 4</h1>} />
          
          {/* Ejemplo de rutas futuras vacías para que no de error */}
          <Route path="/explorador" element={<h2>Aquí irá el buscador JSON</h2>} />
          <Route path="/api" element={<h2>Aquí irá la API</h2>} />
          <Route path="/galeria" element={<h2>Aquí irá la Galería</h2>} />
          <Route path="/bitacora" element={<h2>Aquí irá la Bitácora de React</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
