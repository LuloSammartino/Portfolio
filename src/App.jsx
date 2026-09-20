import { useEffect, useState } from 'react'
import ProjectCarousel from './components/ProjectCarousel'
import styles from './App.module.css'
import { portfolio } from './content'

const technologyIcons = {
  HTML: { file: 'html5', color: '#e34f26' },
  CSS: { file: 'css3', color: '#1572b6' },
  Sass: { file: 'sass', color: '#cc6699' },
  'Tailwind CSS': { file: 'tailwindcss', color: '#06b6d4' },
  SQL: { file: 'database', color: '#b5b7ba' },
  Python: { file: 'python', color: '#3776ab' },
  JavaScript: { file: 'javascript', color: '#f7df1e' },
  FastAPI: { file: 'fastapi', color: '#009688' },
  OracleDB: { file: 'oracle', color: '#f80000' },
  TypeScript: { file: 'typescript', color: '#3178c6' },
  React: { file: 'react', color: '#61dafb' },
  'Node.js': { file: 'nodedotjs', color: '#5fa04e' },
  Supabase: { file: 'supabase', color: '#3fcf8e' },
  Git: { file: 'git', color: '#f05032' },
}

export default function App() {
  const [expanded, setExpanded] = useState({})
  const [language, setLanguage] = useState('es')
  const p = { ...portfolio, ...portfolio[language] }
  const t = language === 'es' ? {
    downloadCV: 'Descargar CV', skip: 'Saltar al contenido', nav: 'Navegación principal', projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto',
    hello: 'Hola, soy', technologies: 'Tecnologías usadas', skills: 'Habilidades', more: 'Más', less: 'Menos', viewProject: 'Ver proyecto',
    viewRepository: 'Ver repositorio', contactText: '¿Tenés un proyecto en mente? Hablemos.', visit: 'Visitar mi', write: 'Escribir a', gmail: 'en Gmail',
    language: 'Cambiar el idioma a inglés', carousel: { region: 'Capturas de', enlarge: 'Ampliar imagen', previous: 'Imagen anterior', next: 'Imagen siguiente', lightbox: 'Imágenes ampliadas de', close: 'Cerrar imagen ampliada' },
  } : {
    downloadCV: 'Download CV', skip: 'Skip to content', nav: 'Main navigation', projects: 'Projects', about: 'About me', contact: 'Contact',
    hello: "Hi, I'm", technologies: 'Technologies used', skills: 'Skills', more: 'More', less: 'Less', viewProject: 'View project',
    viewRepository: 'View repository', contactText: 'Have a project in mind? Let’s talk.', visit: 'Visit my', write: 'Email', gmail: 'in Gmail',
    language: 'Cambiar el idioma a español', carousel: { region: 'Screenshots of', enlarge: 'Enlarge image', previous: 'Previous image', next: 'Next image', lightbox: 'Enlarged images of', close: 'Close enlarged image' },
  }
  useEffect(() => { document.documentElement.lang = language }, [language])
  return <>
    <a className={styles.skip} href="#contenido">{t.skip}</a>

    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.brand} href="#inicio">{p.name}<span> /</span></a>
        <div className={styles.headerActions}><nav className={styles.nav} aria-label={t.nav}>
          <a href="#proyectos">{t.projects}</a>
          <a href="#sobre-mi">{t.about}</a>
          <a href="#contacto">{t.contact}</a>
        </nav>
        <button className={`${styles.languageSwitch} ${language === 'en' ? styles.english : ''}`} type="button" onClick={() => { setLanguage(current => current === 'es' ? 'en' : 'es'); setExpanded({}) }} aria-label={t.language} title={t.language}><span>ES</span><span>EN</span></button></div>
      </div>
    </header>
    <main className={styles.container} id="contenido">
      <div className={styles.intro} id="inicio"><div className={styles.eyebrow}>{p.role}</div><h1>{t.hello}<br /><span>{p.name}.</span></h1><p>{p.introduction}</p>
        <a className={styles.downloadButton} href={`${import.meta.env.BASE_URL}LucianoSammartinoCV.pdf`} download="LucianoSammartinoCV.pdf">{t.downloadCV} <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 13v8m-4-4 4 4 4-4M5 17H4a3 3 0 0 1-.6-5.94A5 5 0 0 1 13 9.5a4 4 0 0 1 6.9 3.7A3 3 0 0 1 19 19h-1" /></svg></a>
      </div>

      
      <section className={styles.section} id="proyectos" aria-labelledby="titulo-proyectos">
        <div className={styles.sectionTitle}><span>01 /</span><h2 id="titulo-proyectos">{t.projects}</h2></div>
        <div className={styles.grid}>{p.projects.map((project, index) => 
            <article className={styles.card} key={index}>
            <div>
            {project.images?.length ? <ProjectCarousel images={project.images} title={project.title} labels={t.carousel} /> : <div className={styles.cover}>{project.image ? <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" /> : <><strong aria-hidden="true">0{index + 1}</strong></>}</div>}
            {project.technologies.length > 0 && <ul className={`${styles.tags} ${styles.technologyTags}`} aria-label={t.technologies}>{project.technologies.map(item => <li key={item}>
              {technologyIcons[item] && <span className={styles.technologyIcon} aria-hidden="true" style={{ '--technology-icon': `url('/icons/technologies/${technologyIcons[item].file}.svg')`, color: technologyIcons[item].color }} />}
              {item}
            </li>)}</ul>}
            </div>
            <div className={styles.projectDetails}><small>{project.category}</small><h3>{project.title}</h3>
            <p id={`description-${index}`}>{project.description.length > 180 && !expanded[index] ? `${project.description.slice(0, 180).replace(/\s+\S*$/, '')}…` : project.description}</p>
            {project.description.length > 180 && <button type="button" className={styles.moreButton} aria-expanded={!!expanded[index]} aria-controls={`description-${index}`} onClick={() => setExpanded(previous => ({ ...previous, [index]: !previous[index] }))}>{expanded[index] ? t.less : t.more}</button>}
          {project.url && <a className={styles.repositoryButton} href={project.url} target="_blank" rel="noopener noreferrer">{t.viewProject} <span aria-hidden="true">↗</span></a>}
          {project.github && <a className={styles.repositoryButton} href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${t.viewRepository}: ${project.title} (GitHub)`}>
            <span className={`${styles.contactIcon} ${styles.githubIcon}`} aria-hidden="true" />{t.viewRepository}
          </a>}
            </div>
        </article>)}</div>
      </section>

      <section className={styles.section} id="sobre-mi" aria-labelledby="titulo-sobre-mi"><div className={styles.about}>
        <div className={styles.sectionTitle}><span>02 /</span><h2 id="titulo-sobre-mi">{t.about}</h2></div>
        <div><p>{p.about}</p><ul className={`${styles.tags} ${styles.technologyTags}`} aria-label={t.skills}>{p.skills.map(skill => <li key={skill}>
          {technologyIcons[skill] && <span className={styles.technologyIcon} aria-hidden="true" style={{ '--technology-icon': `url('/icons/technologies/${technologyIcons[skill].file}.svg')`, color: technologyIcons[skill].color }} />}
          {skill}
        </li>)}</ul></div>
      </div>
      </section>
      
      <section className={styles.section} id="contacto" aria-labelledby="titulo-contacto">
        <div className={styles.sectionTitle}><span>03 /</span><h2 id="titulo-contacto">{t.contact}</h2></div>
        <p>{t.contactText}</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <a href={p.linkedin || undefined} aria-disabled={!p.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${t.visit} LinkedIn`} title="LinkedIn"><span className={`${styles.contactIcon} ${styles.linkedinIcon}`} aria-hidden="true" /></a>
          </div>
          <div className={styles.contactCard}>
            <a href={p.github || undefined} aria-disabled={!p.github} target="_blank" rel="noopener noreferrer" aria-label={`${t.visit} GitHub`} title="GitHub"><span className={`${styles.contactIcon} ${styles.githubIcon}`} aria-hidden="true" /></a>
          </div>
          <div className={styles.contactCard}>
            <a href={p.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}` : undefined} aria-disabled={!p.email} target="_blank" rel="noopener noreferrer" aria-label={`${t.write} ${p.email} ${t.gmail}`} title={`${t.write} ${p.email} ${t.gmail}`}><span className={`${styles.contactIcon} ${styles.mailIcon}`} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>

    <footer className={styles.footer}><div className={styles.container}>© {new Date().getFullYear()} {p.name}</div></footer>
  </>
}
