import ProjectCarousel from './components/ProjectCarousel'
import styles from './App.module.css'
import { portfolio as p } from './content'

const technologyIcons = {
  TypeScript: { file: 'typescript', color: '#3178c6' },
  React: { file: 'react', color: '#61dafb' },
  'Node.js': { file: 'nodedotjs', color: '#5fa04e' },
  Supabase: { file: 'supabase', color: '#3fcf8e' },
}

export default function App() {
  return <>
    <a className={styles.skip} href="#contenido">Saltar al contenido</a>

    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.brand} href="#inicio">{p.name}<span> /</span></a>
        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
    <main className={styles.container} id="contenido">
      <div className={styles.intro} id="inicio"><div className={styles.eyebrow}>{p.role}</div><h1>Hola, soy<br /><span>{p.name}.</span></h1><p>{p.introduction}</p>
      </div>

      
      <section className={styles.section} id="proyectos" aria-labelledby="titulo-proyectos">
        <div className={styles.sectionTitle}><span>01 /</span><h2 id="titulo-proyectos">Proyectos</h2></div>
        <div className={styles.grid}>{p.projects.map((project, index) => 
            <article className={styles.card} key={index}>
            <div>
            {project.images?.length ? <ProjectCarousel images={project.images} title={project.title} /> : <div className={styles.cover}>{project.image ? <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" /> : <><strong aria-hidden="true">0{index + 1}</strong><span>Imagen del proyecto</span></>}</div>}
            {project.technologies.length > 0 && <ul className={`${styles.tags} ${styles.technologyTags}`} aria-label="Tecnologías usadas">{project.technologies.map(item => <li key={item}>
              {technologyIcons[item] && <span className={styles.technologyIcon} aria-hidden="true" style={{ '--technology-icon': `url('/icons/technologies/${technologyIcons[item].file}.svg')`, color: technologyIcons[item].color }} />}
              {item}
            </li>)}</ul>}
            </div>
            <div className={styles.projectDetails}><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p>
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto <span aria-hidden="true">↗</span></a>}
          {project.github && <a className={styles.repositoryButton} href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio de ${project.title} en GitHub`}>
            <span className={`${styles.contactIcon} ${styles.githubIcon}`} aria-hidden="true" />Ver en GitHub
          </a>}
            </div>
        </article>)}</div>
      </section>

      <section className={styles.section} id="sobre-mi" aria-labelledby="titulo-sobre-mi"><div className={styles.about}>
        <div className={styles.sectionTitle}><span>02 /</span><h2 id="titulo-sobre-mi">Sobre mí</h2></div>
        <div><p>{p.about}</p><ul className={styles.tags} aria-label="Habilidades">{p.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
      </div>
      </section>
      
      <section className={styles.section} id="contacto" aria-labelledby="titulo-contacto">
        <div className={styles.sectionTitle}><span>03 /</span><h2 id="titulo-contacto">Contacto</h2></div>
        <p>¿Tenés un proyecto en mente? Hablemos.</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <a href={p.linkedin || undefined} aria-disabled={!p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visitar mi LinkedIn" title="LinkedIn"><span className={`${styles.contactIcon} ${styles.linkedinIcon}`} aria-hidden="true" /></a>
          </div>
          <div className={styles.contactCard}>
            <a href={p.github || undefined} aria-disabled={!p.github} target="_blank" rel="noopener noreferrer" aria-label="Visitar mi GitHub" title="GitHub"><span className={`${styles.contactIcon} ${styles.githubIcon}`} aria-hidden="true" /></a>
          </div>
          <div className={styles.contactCard}>
            <a href={p.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(p.email)}` : undefined} aria-disabled={!p.email} target="_blank" rel="noopener noreferrer" aria-label={`Escribir a ${p.email} en Gmail`} title={`Escribir a ${p.email} en Gmail`}><span className={`${styles.contactIcon} ${styles.mailIcon}`} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>

    <footer className={styles.footer}><div className={styles.container}>© {new Date().getFullYear()} {p.name}</div></footer>
  </>
}
