import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserProfile.css';

const TEAM_DATA = {
    guillermo: {
      name: 'Guillermo Sciulli',
      role: 'Desarrollador Full Stack & IA',
      avatar: '/img/avatar-guille.jpg',
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
        { id: 1, title: 'Gestión de Consorcios', img: '/img/consorcios.jpg' },
        { id: 2, title: 'Inventario Visual', img: '/img/inventario.jpg' },
        { id: 3, title: 'Extracción con Tesseract', img: '/img/extraccion.jpg' }
      ]
    },
    veronica: {
      name: 'Verónica',
      role: 'Bioquímica y Desarrolladora',
      avatar: '/img/avatar-vero.jpeg',
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
        { id: 1, title: 'Sistema de Gesión para Laboratorio', img: '/img/sist-gestion.jpg' },
        { id: 2, title: 'Protocolos de Laboratorio Digitales', img: '/img/check-list.jpg' },
        { id: 3, title: 'Gestión de Inventario en Taller Militar', img: '/img/taller.png' }
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

function ProfileView({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState(() => [`> npm run profile -- --id=${id}`]);

  const data = TEAM_DATA[id] || {
    name: 'Usuario no encontrado',
    role: '',
    bio: '',
    skills: [],
    techStack: [],
    learning: [],
    hobbies: [],
    projects: []
  };

  const profileData = {
    ...data,
    skills: data.skills || [],
    techStack: data.techStack || [],
    learning: data.learning || [],
    hobbies: data.hobbies || [],
    projects: (data.projects || []).map((project) => {
      const img =
        project.img ||
        `https://via.placeholder.com/600x300/0b1020/e7eaf2?text=${encodeURIComponent(project.title)}`;
      return { ...project, img };
    })
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let step = 0;
    let hideTimeoutId;
    const thresholds = [10, 26, 44, 62, 78, 92];
    const steps = [
      '> vite v8  building profile...',
      '> resolving modules...',
      '> fetching data...',
      '> optimizing assets...',
      '> done. rendering UI...'
    ];

    const startTime = Date.now();
    const durationMs = 5000;

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(97, Math.floor((elapsed / durationMs) * 97));
      setProgress(p);

      while (step < thresholds.length && p >= thresholds[step]) {
        const nextLine = steps[step];
        if (nextLine) {
          setTerminalLines((prev) => (prev[prev.length - 1] === nextLine ? prev : [...prev, nextLine]));
        }
        step += 1;
      }
    }, 60);

    const finishTimeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setProgress(100);
      setTerminalLines((prev) => {
        const last = prev[prev.length - 1];
        const finalLine = '> ✓ profile ready';
        return last === finalLine ? prev : [...prev, finalLine];
      });

      hideTimeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 260);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(finishTimeoutId);
      if (hideTimeoutId) clearTimeout(hideTimeoutId);
    };
  }, []);

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

  if (isLoading) {
    return (
      <div className="profile-container">
        <Link to="/" className="btn-back">
          ⬅ Volver al Dashboard
        </Link>

        <section className="profile-loader fade-in-up" aria-live="polite">
          <div className="loader-top">
            <div className="loader-title">Cargando perfil</div>
            <div className="loader-meta">
              <span className="loader-badge">/perfil/{id}</span>
              <span className="loader-percent">{progress}%</span>
            </div>
          </div>

          <div className="loader-terminal" role="status" aria-label="Salida de consola">
            {terminalLines.map((line, index) => (
              <div key={`${index}-${line}`} className="terminal-line">
                {line}
              </div>
            ))}
            <span className="terminal-cursor" aria-hidden="true">
              ▋
            </span>
          </div>

          <div className="loader-bar" aria-hidden="true">
            <div className="loader-bar-fill" style={{ '--p': `${progress}%` }} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`profile-container theme-${id} fade-in-up`}>
      <Link to="/" className="btn-back">⬅ Volver al Dashboard</Link>
      
  <header className="profile-header">
        
        <div className="perfil-img">
          <img src={profileData.avatar} alt={`Foto de ${profileData.name}`} />
        </div>
        
        <h2>{profileData.name}</h2>
        <h4 className="role">{profileData.role}</h4>
        <p className="bio">{profileData.bio}</p>
      </header>

      <div className="profile-grid">
        <section className="profile-card">
          <h3>Habilidades Técnicas</h3>
          <div className="skills-list">
            {profileData.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
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
            {profileData.techStack.map((tech) => (
              <span key={tech} className="tech-icon">{tech}</span>
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

      <section className="social-section">
        <a href="#" className="social-btn">GitHub</a>
        <a href="#" className="social-btn">LinkedIn</a>
        <a href="#" className="social-btn">Email</a>
      </section>
    </div>
  );
}

function UserProfile() {
  const { id } = useParams(); 
  return <ProfileView key={id} id={id} />;
}

export default UserProfile;
