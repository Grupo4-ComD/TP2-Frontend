import { useState, useEffect } from 'react';
import './ImageGallery.css';

function ImageGallery() {
  // Arreglo de imágenes para la galería (puedes reemplazarlas por tus propias fotos en la carpeta public/img/)
  const images = [
    { id: 1, src: 'https://picsum.photos/id/1018/800/600', alt: 'Paisaje Natural' },
    { id: 2, src: 'https://picsum.photos/id/1015/800/600', alt: 'Río y Montañas' },
    { id: 3, src: 'https://picsum.photos/id/1019/800/600', alt: 'Costa Oceánica' },
    { id: 4, src: 'https://picsum.photos/id/1016/800/600', alt: 'Cañón' },
    { id: 5, src: 'https://picsum.photos/id/1020/800/600', alt: 'Animal salvaje' },
    { id: 6, src: 'https://picsum.photos/id/1024/800/600', alt: 'Ave en vuelo' },
    { id: 7, src: 'https://picsum.photos/id/1025/800/600', alt: 'Bosque en invierno' },
    { id: 8, src: 'https://picsum.photos/id/1021/800/600', alt: 'Naturaleza abstracta' },
    { id: 8, src: 'https://picsum.photos/id/433/800/600', alt: 'Oso pardo' }
    
  ];

  // Estado para controlar el Lightbox (guarda el índice de la imagen abierta, o null si está cerrado)
  const [currentIndex, setCurrentIndex] = useState(null);

  const randomOrders = images.map(() => Math.random());

  // Funciones de navegación del Lightbox
  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  
  const showPrev = (e) => {
    e.stopPropagation(); // Evita que el clic cierre el lightbox
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Requerimiento Obligatorio: Cierre mediante tecla ESC y navegación con flechas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return; // Si el lightbox está cerrado, no hace nada
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'ArrowRight') showNext(e);
    };
   

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown); // Limpieza del evento
  }, [currentIndex]); // Se vuelve a ejecutar si cambia la imagen actual

  return (
    <div className="gallery-module fade-in-up">
      <header className="gallery-header">
        <h2>Galería Interactiva</h2>
        <p>Visualizador tipo Grid con funcionalidad de Lightbox (Usa las flechas y la tecla ESC).</p>
      </header>

      {/* Grilla principal de imágenes */}
      <section className="gallery-grid">
        {images.map((img, index) => (
          <div 
            key={img.id} 
            className="gallery-item" 
            style={{ '--delay': `${randomOrders[index]}s` }}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <span>🔍 Ampliar</span>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox (Renderizado Condicional) */}
      {currentIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✖</button>
          
          <button className="lightbox-btn left" onClick={showPrev}>❮</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt} 
              className="lightbox-img"
            />
            <p className="lightbox-caption">
              {images[currentIndex].alt} ({currentIndex + 1} / {images.length})
            </p>
          </div>

          <button className="lightbox-btn right" onClick={showNext}>❯</button>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;