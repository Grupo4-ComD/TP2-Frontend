import { Link } from 'react-router-dom';
import './HomeDashboard.css'; // Importamos los estilos y animaciones

// Arreglo con los datos del equipo (Aquí pondrán las rutas de sus avatares/IA)
const teamMembers = [
  { id: 'guillermo', name: 'Guillermo Sciulli', role: 'Desarrollador Web', avatar: '/img/avatar-guille.jpg' },
  { id: 'braian', name: 'Braian', role: 'Desarrollador Web', avatar: '/img/avatar-braian.jpg' },
  { id: 'mailen', name: 'Mailén', role: 'Desarrolladora Web', avatar: '/img/avatar-mailen.jpg' },
  { id: 'veronica', name: 'Verónica', role: 'Desarrolladora Web', avatar: '/img/avatar-vero.jpg' }
];

function HomeDashboard() {
  return (
    <div className="home-container">
      <h1 className="title-animate">Bienvenido al Dashboard del Grupo 4</h1>
      <p className="subtitle-animate">Selecciona un integrante para ver su perfil profesional.</p>

      {/* Grilla dinámica de tarjetas */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="member-card fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }} /* Retraso escalonado */
          >
            <img src={member.avatar} alt={`Avatar de ${member.name}`} className="avatar-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {/* Navegación por React Router hacia el perfil individual */}
            <Link to={`/perfil/${member.id}`} className="btn-perfil">Ver Perfil</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDashboard;