import { useRef, useState } from 'react'
import styles from './ProjectCarousel.module.css'

export default function ProjectCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const dialog = useRef(null)
  const image = images[current]
  const previous = () => setCurrent(index => (index + images.length - 1) % images.length)
  const next = () => setCurrent(index => (index + 1) % images.length)

  return <div className={styles.gallery} role="region" aria-roledescription="carrusel" aria-label={`Capturas de ${title}`}>
    <button className={styles.imagePreview} type="button" onClick={() => dialog.current.showModal()} aria-label={`${image.alt}. Ampliar imagen`}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </button>
    <div className={styles.carouselControls}>
      <button type="button" onClick={previous} className={styles.arrowButton} aria-label="Imagen anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="14 6 8 12 14 18" /></svg></button>
      <span aria-live="polite" aria-atomic="true">{current + 1} / {images.length}</span>
      <button type="button" onClick={next} className={styles.arrowButton} aria-label="Imagen siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="10 6 16 12 10 18" /></svg></button>
    </div>
    <dialog ref={dialog} className={styles.lightbox} aria-label={`Imágenes ampliadas de ${title}`} onKeyDown={event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); previous() }
      if (event.key === 'ArrowRight') { event.preventDefault(); next() }
    }}>
      <div className={styles.lightboxHeader}>
        <span>{title}</span>
        <button type="button" autoFocus onClick={() => dialog.current.close()} aria-label="Cerrar imagen ampliada">✕</button>
      </div>
      <div className={styles.lightboxStage}>
        <button type="button" onClick={previous} className={styles.arrowButton} aria-label="Imagen anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="14 6 8 12 14 18" /></svg></button>
        <img src={image.src} alt={image.alt} />
        <button type="button" onClick={next} className={styles.arrowButton} aria-label="Imagen siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="10 6 16 12 10 18" /></svg></button>
      </div>
      <p className={styles.lightboxCaption} aria-live="polite" aria-atomic="true">{current + 1} / {images.length} · {image.alt}</p>
    </dialog>
  </div>
}
