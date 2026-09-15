# Potfolio

Base mobile first con React, Vite y CSS Modules.

## Empezar

```sh
npm install
npm run dev
```

## Personalizar

- `src/content.js`: nombre, profesión, presentación, biografía, habilidades, LinkedIn, GitHub, correo y proyectos.
- Imágenes: guardalas en `public/` y usá `/nombre-de-imagen.jpg` en `image`. Completá `imageAlt` con una descripción.
- Los enlaces a proyectos aparecen cuando completás `url`. Las tres tarjetas de contacto siempre se muestran; completá `linkedin`, `github` y `email` para activar sus enlaces.
- `src/App.jsx`: estructura de la página.
- `src/App.module.css`: estilos de App, mobile first. Se importan como `styles` y se asignan con `className={styles.nombre}`. Las reglas `:global(...)` contienen los estilos generales del documento.
- Para nuevos componentes, usá un archivo `Nombre.module.css` junto a `Nombre.jsx`.
- `index.html`: título y descripción del sitio.

## Producción

```sh
npm run build
npm run preview
```

La versión compilada queda en `dist/`. El ícono de correo abre la redacción de Gmail con `email` como destinatario; requiere iniciar sesión en Gmail. No envía mensajes automáticamente. Los íconos son de Bootstrap Icons (licencia MIT en `public/icons/LICENSE.txt`).
