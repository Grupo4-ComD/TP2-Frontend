import { useState, useEffect, useMemo } from 'react';
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
    { id: 9, src: 'https://picsum.photos/id/433/800/600', alt: 'Oso pardo' }
    
  ];

  // Estado para controlar el Lightbox (guarda el índice de la imagen abierta, o null si está cerrado)
  const [currentIndex, setCurrentIndex] = useState(null);

  const randomOrders = useMemo(() => images.map(() => Math.random()), []);

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
    <>
      {/* 1. CONTENEDOR PRINCIPAL DE LA GALERÍA (CON LA ANIMACIÓN) */}
      <div className="gallery-module fade-in-up">
        <header className="gallery-header">
          <h2>Galería Interactiva</h2>
          <p>Visualizador tipo Grid con funcionalidad de Lightbox (Usa las flechas y la tecla ESC).</p>
        </header>

        {/* Mapeo de la grilla de imágenes */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item" 
               style={{ animationDelay: `${randomOrders[index]}s`, animationFillMode: 'both' }}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div> {/* <--- AQUÍ SE CIERRA EL CONTENEDOR ANIMADO */}


      {/* 2. MODAL LIGHTBOX (TOTALMENTE INDEPENDIENTE PARA NO PERDER EL FIXED) */}
      {currentIndex !== null && (
        <div 
          className="modal-lightbox" 
          style={{ display: 'flex' }} 
          onClick={closeLightbox}
        >
          {/* Botón Cerrar */}
          <span className="cerrar-modal" onClick={closeLightbox}>&times;</span>
          
          {/* Botón Anterior */}
          <button className="lightbox-nav prev" onClick={showPrev}>&#10094;</button>

          {/* Imagen Central Ampliada */}
          <img 
            className="modal-contenido" 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            onClick={(e) => e.stopPropagation()} /* Evita que al hacer clic en la foto se cierre el modal */
          />

          {/* Botón Siguiente */}
          <button className="lightbox-nav next" onClick={showNext}>&#10095;</button>
        </div>
      )}
    </>
  );
}

export default ImageGallery;