import { useState } from 'react';
import jsonData from '../data/tecnologias.json';
import './LocalDataExplorer.css';

function LocalDataExplorer() {
  // Estado para guardar el texto del buscador
  const [busqueda, setBusqueda] = useState('');

  // Lógica de filtrado en tiempo real
  const datosFiltrados = jsonData.filter((item) => {
    return (
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.tipo.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <div className="explorer-container fade-in-up">
      <header className="explorer-header">
        <h2>Buscador en Tiempo Real</h2>
        <p>Explora nuestra base de datos local ({jsonData.length} objetos cargados).</p>
      </header>

      {/* Input de búsqueda controlado por React */}
      <input
        type="text"
        placeholder="🔍 Buscar por nombre o tipo (ej: React o Frontend)..."
        className="search-input"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

            {/* Grilla de resultados */}
      <div className="data-grid">
        {datosFiltrados.length > 0 ? (
          datosFiltrados.map((item, index) => (
            <div 
              key={item.id} 
              className="data-card" 
              /*  Aplicamos el delay en cascada directamente con React  */
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <h3>{item.nombre}</h3>
              <p><strong>Tipo:</strong> {item.tipo}</p>
              <span className="badge">{item.rol}</span>
            </div>
          ))
        ) : (
          <p className="no-results">No se encontraron resultados para "{busqueda}".</p>
        )}
      </div>
    </div>
  );
}

export default LocalDataExplorer;