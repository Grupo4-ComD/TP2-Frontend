import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  // Obtenemos el 'id' de la URL (por ejemplo, 'guillermo' o 'mailen')
  const { id } = useParams(); 

  // Simulamos una base de datos local para el ejemplo
  const profileData = {
    name: id.toUpperCase(),
    role: 'Desarrollador Web / Estudiante IFTS',
    bio: 'Apasionado por la tecnología, la automatización y la creación de experiencias web fluidas y eficientes.',
    skills: [
      { name: 'HTML & CSS', level: '90%' },
      { name: 'JavaScript Vanilla', level: '85%' },
      { name: 'React & React Router', level: '60%' }
    ],
    techStack: ['⚛️ React', '🟨 JavaScript', '🌐 HTML5', '🎨 CSS3', '🗄️ SQL'],
    projects: [
      { id: 1, title: 'Proyecto 1: Landing Page', img: 'https://via.placeholder.com/600x300/2c3e50/ffffff?text=Proyecto+1' },
      { id: 2, title: 'Proyecto 2: Portfolio Grupal', img: 'https://via.placeholder.com/600x300/34495e/ffffff?text=Proyecto+2' },
      { id: 3, title: 'Proyecto 3: Dashboard React', img: 'https://via.placeholder.com/600x300/3498db/ffffff?text=Proyecto+3' }
    ]
  };

  // Estado para el carrusel manual
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === profileData.projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? profileData.projects.length - 1 : prev - 1));
  };

  return (
    <div className="profile-container fade-in-up">
      <Link to="/" className="btn-back">⬅ Volver al Dashboard</Link>
      
      {/* Cabecera del Perfil */}
      <header className="profile-header">
        <div className="avatar-placeholder">👤</div>
        <h2>{profileData.name}</h2>
        <h4 className="role">{profileData.role}</h4>
        <p className="bio">{profileData.bio}</p>
      </header>

      <div className="profile-grid">
        {/* Barras de Progreso Animadas */}
        <section className="profile-card">
          <h3>Habilidades Técnicas</h3>
          <div className="skills-list">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="progress-bar-bg">
                  {/* La animación de ancho se hace mediante CSS */}
                  <div className="progress-bar-fill" style={{ '--target-width': skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Tecnológico e Iconografía */}
        <section className="profile-card">
          <h3>Tech Stack</h3>
          <div className="tech-stack">
            {profileData.techStack.map((tech, index) => (
              <span key={index} className="tech-icon">{tech}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Carrusel Interactivo de Proyectos */}
      <section className="profile-card carousel-section">
        <h3>Mis Proyectos</h3>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-btn">❮</button>
          <div className="carousel-content">
            <img 
              src={profileData.projects[currentSlide].img} 
              alt={profileData.projects[currentSlide].title} 
              className="carousel-img"
            />
            <p className="carousel-caption">{profileData.projects[currentSlide].title}</p>
          </div>
          <button onClick={nextSlide} className="carousel-btn">❯</button>
        </div>
      </section>

      {/* Botones Sociales con Hover Avanzado */}
      <section className="social-section">
        <a href="#" className="social-btn">GitHub</a>
        <a href="#" className="social-btn">LinkedIn</a>
        <a href="#" className="social-btn">Email</a>
      </section>
    </div>
  );
}

export default UserProfile;