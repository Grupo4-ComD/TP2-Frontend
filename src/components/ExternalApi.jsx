import { useState, useEffect } from 'react';
import './ExternalApi.css';

function ExternalApi() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPageChanging, setIsPageChanging] = useState(false);
  
  // NUEVO: Estado para forzar un reintento si la API falla
  const [retryTrigger, setRetryTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const startedAt = Date.now();
      const minLoadingMs = 800;
      setIsLoading(true); 
      setError(null);     
      setIsPageChanging(false);

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        if (!response.ok) {
          // Si pasas muy rápido y la API te bloquea, disparamos el error
          throw new Error('El servidor de la API está saturado o falló la conexión.');
        }
        const data = await response.json();
        
        setCharacters(data.results);
        setTotalPages(data.info.pages); 
      } catch (err) {
        setError(err.message); 
      } finally {
        const elapsed = Date.now() - startedAt;
        const remaining = Math.max(0, minLoadingMs - elapsed);
        if (remaining > 0) {
          await new Promise((resolve) => setTimeout(resolve, remaining));
        }
        setIsLoading(false); 
      }
    };

    fetchData();
  // Al agregar retryTrigger aquí, React volverá a intentar conectarse si cambia su valor
  }, [currentPage, retryTrigger]); 

  const handlePrevPage = () => {
    if (isLoading) return;
    if (currentPage > 1) {
      setIsPageChanging(true);
      setTimeout(() => setCurrentPage((p) => p - 1), 180);
    }
  };

  const handleNextPage = () => {
    if (isLoading) return;
    if (currentPage < totalPages) {
      setIsPageChanging(true);
      setTimeout(() => setCurrentPage((p) => p + 1), 180);
    }
  };

  return (
    <div className="api-module fade-in-up">
      <header className="api-header">
        <h2>Módulo de API Externa</h2>
        <p>Consumiendo datos asíncronos con manejo de estados y paginación.</p>
      </header>

      <section className="api-panel">
        <div className="api-topbar" aria-hidden="true">
          <div className={isLoading ? 'api-loadingbar is-active' : 'api-loadingbar'} />
        </div>

        {isLoading && !error && (
          <>
            <div className="api-grid" aria-label="Cargando resultados">
              {Array.from({ length: 8 }).map((_, index) => (
                <article key={`skeleton-${index}`} className="api-card api-card--skeleton" aria-hidden="true">
                  <div className="api-skeleton api-skeleton-img" />
                  <div className="api-card-body">
                    <div className="api-skeleton api-skeleton-title" />
                    <div className="api-skeleton api-skeleton-meta" />
                  </div>
                </article>
              ))}
            </div>

            <div className="pagination-controls" aria-hidden="true">
              <button disabled className="btn-page">
                ❮ Anterior
              </button>
              <span className="page-indicator">Cargando…</span>
              <button disabled className="btn-page">
                Siguiente ❯
              </button>
            </div>
          </>
        )}

        {/* MEJORA: Pantalla de error con botón de reintento */}
        {error && (
          <div className="api-status error">
            <p>❌ {error}</p>
            <button 
              onClick={() => setRetryTrigger(prev => prev + 1)} 
              className="btn-page" 
              style={{marginTop: '15px'}}
            >
              🔄 Volver a intentar
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <div className={isPageChanging ? 'api-grid is-leaving' : 'api-grid'}>
              {characters.map((char, index) => (
                <article
                  key={`${currentPage}-${char.id}`}
                  className="api-card api-card--enter"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <img src={char.image} alt={char.name} loading="lazy" />
                  <div className="api-card-body">
                    <h3>{char.name}</h3>
                    <p className="api-species">
                      <span className={`status-dot ${char.status.toLowerCase()}`}></span>
                      {char.species} - {char.status}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="pagination-controls">
              <button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                className="btn-page"
              >
                ❮ Anterior
              </button>
              
              <span className="page-indicator">
                Página <strong>{currentPage}</strong> de {totalPages}
              </span>
              
              <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                className="btn-page"
              >
                Siguiente ❯
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default ExternalApi;
