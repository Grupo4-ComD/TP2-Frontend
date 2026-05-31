import { useState } from 'react';
import jsonData from '../data/tecnologias.json';
import './LocalDataExplorer.css';

const emojiMap = {
  'React': '⚛️', 'JavaScript': '🟨', 'HTML5': '🧱', 'CSS3': '🎨',
  'Node.js': '🟩', 'Express': '🚂', 'MongoDB': '🍃', 'MySQL': '🐬',
  'Git': '🌿', 'GitHub': '🐙', 'Vite': '⚡', 'Vercel': '▲',
  'Figma': '🎭', 'Bootstrap': '🅱️', 'Tailwind': '💨', 'TypeScript': '🔷',
  'Python': '🐍', 'Java': '☕', 'Angular': '🅰️', 'Vue.js': '💚'
};

const rolClass = (rol) => {
  const map = {
    'Frontend': 'rol--frontend',
    'Backend': 'rol--backend',
    'DevOps': 'rol--devops',
    'Fullstack': 'rol--fullstack',
    'UX/UI': 'rol--uxui',
  };
  return map[rol] || '';
};

function LocalDataExplorer() {
  const [busqueda, setBusqueda] = useState('');

  const datosFiltrados = jsonData.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.tipo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="explorer-container fade-in-up">
      <header className="explorer-header">
        <h2>Buscador en Tiempo Real</h2>
        <p>Explorá nuestra base de datos local ({jsonData.length} tecnologías cargadas).</p>
      </header>

      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar por nombre o tipo (ej: React, Framework)..."
          className="search-input"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {busqueda && (
          <span className="search-count">
            {datosFiltrados.length} resultado{datosFiltrados.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="data-grid">
        {datosFiltrados.length > 0 ? (
          datosFiltrados.map((item, index) => (
            <div
              key={item.id}
              className={`data-card ${rolClass(item.rol)}`}
              style={{ animationDelay: `${index * 0.07}s`, animationFillMode: 'both' }}
            >
              <div className="data-card-icon">{emojiMap[item.nombre] || '🔧'}</div>
              <h3>{item.nombre}</h3>
              <p><strong>Tipo:</strong> {item.tipo}</p>
              <span className="badge">{item.rol}</span>
            </div>
          ))
        ) : (
          <p className="no-results">😕 Sin resultados para "{busqueda}".</p>
        )}
      </div>
    </div>
  );
}

export default LocalDataExplorer;