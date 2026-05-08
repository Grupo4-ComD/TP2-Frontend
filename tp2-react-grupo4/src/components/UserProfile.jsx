import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { id } = useParams(); 

  const teamData = {
    guillermo: {
      name: 'Guillermo Sciulli',
      role: 'Desarrollador Full Stack & IA',
      bio: 'Soy Guillermo, un Desarrollador Full Stack y Especialista en Automatización e IA enfocado en crear herramientas que resuelvan problemas reales. Me apasiona optimizar procesos a través del código, integrando sistemas de gestión, inventarios y motores de extracción de datos.',
      skills: [
        { name: 'PHP & SQL Server/MySQL', level: '90%' },
        { name: 'Python (Análisis) & IA', level: '85%' },
        { name: 'Power BI & Power Automate', level: '80%' },
        { name: 'Android & Visual Studio', level: '75%' }
      ],
      techStack: ['🐘 PHP', '🗄️ SQL', '🐍 Python', '🤖 IA', '📊 Power BI'],
      learning: ['Perfeccionar nuevas tecnologías y APIs REST'],
      hobbies: ['🐢 Reproducción de tortugas', '🐠 Acuariofilia (Discus, Kois)', '🌱 Cuidado de plantas y huertas', '🛠️ Mejoras del hogar'],
      projects: [
        { id: 1, title: 'Gestión de Consorcios', img: '' },
        { id: 2, title: 'Inventario Visual', img: '' },
        { id: 3, title: 'Extracción con Tesseract', img: '' }
      ]
    },
    veronica: {
      name: 'Verónica Greco',
      role: 'Bioquímica y Desarrolladora',
      bio: 'Mi nombre es Verónica, soy bioquímica y me desempeñé siempre en el área industrial. Desde hace tres años me estoy formando en el mundo de la programación. Mi objetivo es fusionar conocimientos científicos y programación para crear soluciones innovadoras.',
      skills: [
        { name: 'Java & Python', level: '85%' },
        { name: 'C# & Kotlin', level: '80%' },
        { name: 'HTML, CSS & MySQL', level: '90%' }
      ],
      techStack: ['☕ Java', '🐍 Python', '🌐 HTML/CSS', '🗄️ MySQL', '💻 C#'],
      learning: ['Node.js', 'React', 'Bases de datos NoSQL'],
      hobbies: ['🔬 Ciencia', '🧬 Biología', '💻 Programación'],
      projects: [
        { id: 1, title: 'Gestión para Laboratorio', img: '' },
        { id: 2, title: 'Protocolos Digitales', img: '' },
        { id: 3, title: 'Control de Stock', img: '' }
      ]
    },
    mailen: {
      name: 'Mailén',
      role: 'Administración en Salud y Tech',
      bio: 'Trabajo hace varios años en el sector administrativo de salud y decidí dar un giro hacia la tecnología. Busco soluciones digitales inteligentes que optimicen los procesos del día a día. Cuando me alejo de las pantallas me dedico a pintar, mirar alguna serie y pasar tiempo con mi perrito Nilo.',
      skills: [
        { name: 'HTML, CSS, Bootstrap', level: '90%' },
        { name: 'Java Básico & Angular', level: '75%' },
        { name: 'MySQL', level: '80%' }
      ],
      techStack: ['🅰️ Angular', '☕ Java', '🎨 Bootstrap', '🗄️ MySQL', '🌐 Web'],
      learning: ['React', 'Java Avanzado', 'MongoDB'],
      hobbies: ['🎨 Pintar', '📺 Mirar series', '🐶 Jugar con Nilo', '💻 Codear'],
      projects: [
        { id: 1, title: 'Web para Local', img: '' },
        { id: 2, title: 'Portfolio SPA', img: '' },
        { id: 3, title: 'App Agencia Vuelos', img: '' }
      ]
    },
    braian: {
      name: 'Braian Perea',
      role: 'Dev & Data',
      bio: 'Soy Braian Perea, un apasionado de los datos, los videojuegos y la tecnología, con conocimientos en desarrollo web. Me motiva seguir aprendiendo para combinar diseño y tecnología y ofrecer experiencias digitales excepcionales.',
      skills: [
        { name: 'HTML5, CSS3, Bootstrap', level: '90%' },
        { name: 'Diseño Responsivo', level: '85%' },
        { name: 'Git', level: '80%' }
      ],
      techStack: ['⚛️ React', '🟩 Node.js', '🎨 Bootstrap', '📊 Datos', '🎮 Gaming'],
      learning: ['React & Node.js', 'TypeScript', 'APIs REST'],
      hobbies: ['🎮 Gaming y Streaming', '📊 Análisis de datos', '🏑 Hockey sobre césped', '🍳 Cocina'],
      projects: [
        { id: 1, title: 'Dashboard de Métricas', img: '' },
        { id: 2, title: 'App Web/Mobile', img: '' },
        { id: 3, title: 'El diablo viste a la moda', img: '' }
      ]
    }
  };

  const profileData = teamData[id] || { 
    name: 'Usuario no encontrado', 
    role: '', bio: '', skills: [], techStack: [], learning: [], hobbies: [], 
    projects: [{img: '', title: ''}] 
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (profileData.projects.length > 0) {
      setCurrentSlide((prev) => (prev === profileData.projects.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (profileData.projects.length > 0) {
      setCurrentSlide((prev) => (prev === 0 ? profileData.projects.length - 1 : prev - 1));
    }
  };

  return (
    // ¡Aquí está la magia! La clase dinámica theme-{id} inyecta los colores de cada uno
    <div className={`profile-container theme-${id} fade-in-up`}>
      <Link to="/" className="btn-back">⬅ Volver al Dashboard</Link>
      
      <header className="profile-header">
        <div className="avatar-placeholder">👤</div>
        <h2>{profileData.name}</h2>
        <h4 className="role">{profileData.role}</h4>
        <p className="bio">{profileData.bio}</p>
      </header>

      <div className="profile-grid">
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
                  <div className="progress-bar-fill" style={{ '--target-width': skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <h4 style={{marginTop: '20px'}}>Pasatiempos y Gustos:</h4>
          <ul style={{textAlign: 'left', marginTop: '10px'}}>
            {profileData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>

        <section className="profile-card">
          <h3>Tech Stack</h3>
          <div className="tech-stack">
            {profileData.techStack.map((tech, index) => (
              <span key={index} className="tech-icon">{tech}</span>
            ))}
          </div>
          
          <h4 style={{marginTop: '30px'}}>Actualmente aprendiendo:</h4>
          <ul style={{textAlign: 'left', marginTop: '10px'}}>
            {profileData.learning.map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="profile-card carousel-section">
        <h3>Mis Proyectos</h3>
        {profileData.projects.length > 0 && (
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
        )}
      </section>

      <section className="social-section" style={{textAlign: 'center', marginTop: '30px'}}>
        <a href="#" className="social-btn">GitHub</a>
        <a href="#" className="social-btn">LinkedIn</a>
        <a href="#" className="social-btn">Email</a>
      </section>
    </div>
  );
}

export default UserProfile;