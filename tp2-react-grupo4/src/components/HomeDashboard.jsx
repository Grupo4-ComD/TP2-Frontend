
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeDashboard.css'; 

function HomeDashboard() {
  const navigate = useNavigate();
  // Estado que controla si se muestra la pantalla de "Cargando..."
  const [isNavigating, setIsNavigating] = useState(false);

  // Función que simula la carga del TP1 antes de cambiar de ruta
  const handleProfileClick = (id) => {
    setIsNavigating(true); // Enciende la pantalla de carga
    setTimeout(() => {
      navigate(`/perfil/${id}`); // Cambia de ruta después de 1 segundo
    }, 1000); 
  };

  const teamMembers = [
        {
      id: 'guillermo',
      name: 'Guillermo ',
      role: 'Desarrollador Full Stack & IA',
      avatar: 'img/avatar-guille.jpg',
      cardClass: 'card--guillermo' 
    },
    {
      id: 'veronica',
      name: 'Verónica ',
      role: 'Bioquímica y Desarrolladora',
      avatar: 'img/avatar-vero.jpeg',
      cardClass: 'card--vero' 
    },
    {
      id: 'mailen',
      name: 'Mailén',
      role: 'Administración en Salud y Tech',
      avatar: 'img/avatar-mailen.png',
      cardClass: 'card--mailen' 
    },
    {
      id: 'braian',
      name: 'Braian ',
      role: 'Dev & Data',
      avatar: 'img/avatar-braian.png',
      cardClass: 'card--braian' 
    }

  ];

  return (
    <>
      {/* Pantalla de carga condicional que rinde homenaje al TP1 */}
      {isNavigating && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <h2>Cargando portafolio...</h2>
        </div>
      )}

      <div className="home-dashboard fade-in-up">
        <section className="team-presentation">
          <h2>Bienvenidos a nuestro Dashboard</h2>
          <p>Somos el Grupo 4. Explora nuestros perfiles profesionales, habilidades y proyectos destacados.</p>
        </section>

        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <article 
              key={member.id} 
              className={`card ${member.cardClass}`} 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={member.avatar} alt={`Avatar de ${member.name}`} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {/* Reemplazamos el <Link> por un botón que dispara la animación */}
              <button 
                onClick={() => handleProfileClick(member.id)} 
                className="btn-perfil"
              >
                Ver Perfil
              </button>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeDashboard;