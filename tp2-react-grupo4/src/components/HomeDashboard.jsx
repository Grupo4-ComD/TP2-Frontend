<<<<<<< Updated upstream

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
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeDashboard.css'; // Importamos los estilos y animaciones

// Arreglo con los datos del equipo (Aquí pondrán las rutas de sus avatares/IA)
const teamMembers = [
  {
    id: 'veronica',
    name: 'Verónica Greco',
    role: 'Desarrolladora Web',
    bio: 'Bioquímica y desarrolladora. Enfoque en laboratorio e industria.',
    avatar: '/img/avatar-vero.jpeg'
  },
  {
    id: 'mailen',
    name: 'Mailén Juárez',
    role: 'Desarrolladora Web',
    bio: 'Administración en salud y tecnología. Foco en procesos y UX.',
    avatar: '/img/avatar-mailen.png'
  },
  {
    id: 'braian',
    name: 'Braian Perera',
    role: 'Desarrollador Web',
    bio: 'Datos, gaming y programación. Tableros claros y dinámicos.',
    avatar: '/img/avatar-braian.png'
  },
  {
    id: 'guillermo',
    name: 'Guillermo',
    role: 'Desarrollador Web',
    bio: 'Full Stack. Automatización, calidad y experiencias fluidas.',
    avatar: '/img/avatar-guille.jpg'
  }
];

function HomeDashboard() {
  const [loadedAvatars, setLoadedAvatars] = useState({});

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Dashboard</h1>
        <p className="home-subtitle">
          Acceso rápido a perfiles y módulos obligatorios del proyecto (JSON, API, galería, bitácora).
        </p>
      </header>

      <section className="home-panel">
        <div className="home-panel-title">Integrantes</div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className="member-card fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="avatar-frame" aria-hidden="true">
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className={loadedAvatars[member.id] ? 'avatar-img is-loaded' : 'avatar-img'}
                  loading="lazy"
                  onLoad={() => setLoadedAvatars((prev) => ({ ...prev, [member.id]: true }))}
                />
              </div>
              <div className="member-body">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
                <Link to={`/perfil/${member.id}`} className="btn btn-primary btn-perfil">
                  Ver Perfil
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
>>>>>>> Stashed changes
  );
}

export default HomeDashboard;
