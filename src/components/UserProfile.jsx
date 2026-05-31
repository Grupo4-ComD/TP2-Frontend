import { useEffect, useRef, useState } from 'react';
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
        { id: 1, title: 'Sistema de Gestión para Laboratorio', img: '/img/sist-gestion.jpg' },
        { id: 2, title: 'Protocolos de Laboratorio Digitales', img: '/img/check-list.jpg' },
        { id: 3, title: 'Gestión de Inventario en Taller Militar', img: '/img/taller.png' }
      ]
    },
    mailen: {
      name: 'Mailén',
      role: 'Administración en Salud y Tech',
      avatar: '/img/avatar-mailen.png',
      bio: 'Soy Mailén, trabajo hace varios años en el sector administrativo de salud y decidí dar un giro hacia la tecnología. Busco soluciones digitales inteligentes que optimicen los procesos del día a día. Cuando me alejo de las pantallas me dedico a pintar, mirar alguna serie y pasar tiempo con mi perrito Nilo.',
      skills: [
        { name: 'HTML, CSS, Bootstrap', level: '90%' },
        { name: 'Java Básico & Angular', level: '75%' },
        { name: 'MySQL', level: '80%' }
      ],
      techStack: ['🅰️ Angular', '☕ Java', '🎨 Bootstrap', '🗄️ MySQL', '🌐 Web'],
      learning: ['React', 'Java Avanzado', 'MongoDB'],
      hobbies: ['🎨 Pintar', '📺 Mirar series', '🐶 Jugar con Nilo', '💻 Codear'],
      projects: [
        { id: 1, title: 'Web para Local', img: '/img/proyect-1.jpg' },
        { id: 2, title: 'Portfolio SPA', img: '/img/proyect-2.jpg' },
        { id: 3, title: 'App Agencia Vuelos', img: '/img/proyect-3.png' }
      ]
    },
    braian: {
      name: 'Braian Perea',
      role: 'Dev & Data',
      avatar: '/img/avatar-braian.png',
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
        { id: 1, title: 'Dashboard Gaming', img: '/img/Dashboard%20Gaming.png' },
        { id: 2, title: 'ETL Image', img: '/img/ETL%20Image.png' },
        { id: 3, title: 'App Responsive Develop', img: '/img/App%20Responsive%20Develop.png' }
      ]
    }
};

function ProfileView({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState(null); 
  const [terminalLines, setTerminalLines] = useState(() => [`> npm run profile -- --id=${id}`]);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [skillCounters, setSkillCounters] = useState({});
  const skillsRef = useRef(null);
  const rafIdRef = useRef(null);
  const [projectClickFxActive, setProjectClickFxActive] = useState(false);
  const projectClickFxTimeoutRef = useRef(null);

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
        `https://placehold.co/600x300/0b1020/e7eaf2?text=${encodeURIComponent(project.title)}`;
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

  useEffect(() => {
    if (isLoading) return;
    if (skillsAnimated) return;

    const el = skillsRef.current;
    if (!el) {
      setSkillsAnimated(true);
      return;
    }

    const activate = () => setSkillsAnimated(true);

    const isInView = () => {
      if (typeof window === 'undefined') return true;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
      const topBound = viewportH * 0.85;
      const bottomBound = viewportH * 0.15;
      return rect.top <= topBound && rect.bottom >= bottomBound;
    };

    if (isInView()) {
      activate();
      return;
    }

    if (typeof IntersectionObserver !== 'function') {
      activate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          activate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isLoading, skillsAnimated]);

  useEffect(() => {
    if (!skillsAnimated) return;
    if (rafIdRef.current) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionScale = prefersReducedMotion ? 0.4 : 1;

    const skills = (profileData.skills || []).map((skill) => {
      const parsedPct = Number.parseFloat(String(skill.level).replace('%', ''));
      const pct = Number.isFinite(parsedPct) ? Math.max(0, Math.min(100, parsedPct)) : 0;
      const durationMs = Math.max(700, Math.min(2800, (600 + pct * 18) * motionScale));
      return { key: skill.name, pct, durationMs };
    });

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    let startTs;
    setSkillCounters(Object.fromEntries(skills.map((s) => [s.key, 0])));

    const tick = (now) => {
      if (startTs === undefined) {
        startTs = now;
        rafIdRef.current = requestAnimationFrame(tick);
        return;
      }

      let allDone = true;
      const nextCounters = {};

      for (const s of skills) {
        const raw = (now - startTs) / s.durationMs;
        const t = raw >= 1 ? 1 : raw <= 0 ? 0 : raw;
        if (t < 1) allDone = false;
        nextCounters[s.key] = Math.round(s.pct * easeOutCubic(t));
      }

      setSkillCounters(nextCounters);

      if (!allDone) {
        rafIdRef.current = requestAnimationFrame(tick);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, [skillsAnimated, profileData.skills]);

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

  const triggerProjectClickFx = () => {
    if (id !== 'braian') return;

    if (projectClickFxTimeoutRef.current) {
      clearTimeout(projectClickFxTimeoutRef.current);
      projectClickFxTimeoutRef.current = null;
    }

    setProjectClickFxActive(false);

    const activate = () => setProjectClickFxActive(true);
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(activate);
    } else {
      activate();
    }

    projectClickFxTimeoutRef.current = setTimeout(() => {
      setProjectClickFxActive(false);
      projectClickFxTimeoutRef.current = null;
    }, 680);
  };

  useEffect(() => {
    return () => {
      if (projectClickFxTimeoutRef.current) clearTimeout(projectClickFxTimeoutRef.current);
    };
  }, []);

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
        <section
          className="profile-card"
          ref={skillsRef}
          onMouseEnter={() => {
            setSkillsAnimated(true);
            setSkillsHover(true);
          }}
          onMouseLeave={() => setSkillsHover(false)}
          onFocusCapture={() => {
            setSkillsAnimated(true);
            setSkillsHover(true);
          }}
          onBlurCapture={() => setSkillsHover(false)}
        >
          <h3>Habilidades Técnicas</h3>
          <div className="skills-list">
            {profileData.skills.map((skill) => {
              const parsedPct = Number.parseFloat(String(skill.level).replace('%', ''));
              const pct = Number.isFinite(parsedPct) ? Math.max(0, Math.min(100, parsedPct)) : 0;
              const counter = typeof skillCounters[skill.name] === 'number' ? skillCounters[skill.name] : 0;

              return (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skillsAnimated ? `${counter}%` : skill.level}</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className={`progress-bar-fill${skillsAnimated ? ' is-filled' : ''}${skillsHover ? ' is-active' : ''}`}
                      style={{ '--target-width': skill.level, '--skill-pct': pct }}
                    ></div>
                  </div>
                </div>
              );
            })}
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
            <div
              className={id === 'braian' && projectClickFxActive ? 'carousel-content is-clickfx' : 'carousel-content'}
              onClick={id === 'braian' ? triggerProjectClickFx : undefined}
              role={id === 'braian' ? 'button' : undefined}
              tabIndex={id === 'braian' ? 0 : undefined}
              onKeyDown={
                id === 'braian'
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') triggerProjectClickFx();
                    }
                  : undefined
              }
            >
        <img 
          className="carousel-img"
          src={profileData.projects[currentSlide].img} 
          alt={profileData.projects[currentSlide].title} 
          style={{ cursor: 'pointer', position: 'relative', zIndex: 50 }}
          onClick={() => {
            console.log("¡Clic exitoso en el proyecto!", profileData.projects[currentSlide].img);
            setImagenAmpliada(profileData.projects[currentSlide].img);
          }}
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



{imagenAmpliada && (
        <div 
          className="modal-lightbox" 
          style={{ display: 'flex' }} 
          onClick={() => setImagenAmpliada(null)}
        >
          <span className="cerrar-modal" onClick={() => setImagenAmpliada(null)}>&times;</span>
          <img className="modal-contenido" src={imagenAmpliada} alt="Proyecto ampliado" />
        </div>
      )}


    </div>
  );
}

function UserProfile() {
  const { id } = useParams(); 
  return <ProfileView key={id} id={id} />;
}

export default UserProfile;
