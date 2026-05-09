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
  );
}

export default HomeDashboard;
