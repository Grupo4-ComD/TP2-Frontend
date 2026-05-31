import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeDashboard.css'; 

function HomeDashboard() {
  const [loadedAvatars, setLoadedAvatars] = useState({});

  const teamMembers = [
    {
      id: 'veronica',
      name: 'Verónica Greco',
      role: 'Desarrolladora Web',
      bio: 'Bioquímica y desarrolladora. Enfoque en laboratorio e industria.',
      avatar: '/img/avatar-vero.jpeg',
      cardClass: 'card--vero' 
    },
    {
      id: 'mailen',
      name: 'Mailén Juárez',
      role: 'Desarrolladora Web',
      bio: 'Administración en salud y tecnología. Foco en procesos y UX.',
      avatar: '/img/avatar-mailen.png',
      cardClass: 'card--mailen' 
    },
    {
      id: 'braian',
      name: 'Braian Perea',
      role: 'Desarrollador Web',
      bio: 'Datos, gaming y programación. Tableros claros y dinámicos.',
      avatar: '/img/avatar-braian.png',
      cardClass: 'card--braian' 
    },
    {
      id: 'guillermo',
      name: 'Guillermo Sciulli',
      role: 'Desarrollador Web',
      bio: 'Full Stack. Automatización, calidad y experiencias fluidas.',
      avatar: '/img/avatar-guille.jpg',
      cardClass: 'card--guillermo' 
    }
  ];

  return (
    <div className="home fade-in-up">
      <header className="home-header">
        <h1 className="home-title">Dashboard</h1>
        <p className="home-subtitle">
          
        </p>
      </header>

      <section className="home-panel">
        <div className="home-panel-title">Integrantes</div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              // ¡Aquí estaba el error! Faltaba la clase fade-in-up
              className={`member-card ${member.cardClass} fade-in-up`}
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
