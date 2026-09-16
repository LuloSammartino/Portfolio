export const portfolio = {
  name: 'Luciano Sammartino',
  role: 'Junior Web Developer',
  introduction: 'Transformo necesidades reales en aplicaciones web. Desarrollo interfaces con React y las conecto con APIs y bases de datos para construir soluciones completas. Busco sumarme a un equipo donde aportar, aprender y seguir creciendo como desarrollador.',
  about: 'Soy Luciano, tengo 21 años y me formo en desarrollo web desde 2024. Me interesa entender el problema detrás de cada proyecto y convertirlo en una herramienta útil y fácil de usar. Me atrae especialmente el frontend, pero tambien trabajo con backend. Quiero aportar esa mirada práctica a un equipo que valore la iniciativa, el aprendizaje y el cuidado por los detalles.',
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Sass', 'Tailwind CSS', 'SQL', 'Node.js', 'Supabase', 'OracleDB'],
  linkedin: 'https://www.linkedin.com/in/luciano-sammartino-26343b268/', 
  github: 'https://github.com/LuloSammartino', 
  email: 'lucianosammar@gmail.com', 
  projects: [
    {
      title: 'CRM a medida',
      category: 'Sistema de gestión comercial',
      description: 'El cliente tenia un local de productos de limpieza y necesitaba centralizar los números de su negocio y la información de productos, clientes y proveedores. Desarrollé un CRM a medida para registrar ventas, controlar ingresos y gastos y seguir todo el flujo de caja desde un mismo lugar. Incluye funciones personalizadas para consultar el precio de un producto sin IVA, actualizar precios de forma masiva por proveedor o rubro y exportar datos en formato Excel. Lo mas dificil del proyecto fue mudar toda la base de datos, ya que el cliente tenia esos datos en un programa de escritorio viejo que guardaba muchos datos de forma desordenada y no tenia un respaldo. Tuve que hacer un script para limpiar y normalizar los datos y luego importarlos al nuevo sistema, cumpliendo con los requisitos del cliente.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
      images: [
        { src: '/projects/crm-a-medida/metricas.png', alt: 'Panel de métricas con ventas, gastos, balance y distribución de ventas' },
        { src: '/projects/crm-a-medida/caja-diaria.png', alt: 'Caja diaria con ventas, gastos y movimientos del negocio' },
        { src: '/projects/crm-a-medida/clientes.png', alt: 'Gestión de clientes con buscadores y filtros' },
        { src: '/projects/crm-a-medida/precio-sin-iva.png', alt: 'Consulta del precio de un producto sin IVA' },
      ],
      github: 'https://github.com/LuloSammartino/CRM',
      url: '',
    },
    {
      title: 'WORDLE',
      category: 'Juego web',
      description: 'Desarrollé un juego inspirado en Wordle para llevar a la práctica la conexión entre una interfaz web, una API y una base de datos. Utilicé React y JavaScript para la interfaz, Python con FastAPI para el backend y OracleDB como base de datos. El proyecto me permitió profundizar en la comunicación entre frontend y backend y en la organización del flujo de datos de una aplicación completa. Uno de los desafíos fue mantener el tablero sincronizado con las respuestas del servidor: al enviar varios intentos seguidos, las respuestas podían llegar en distinto orden. Lo resolví bloqueando el envío mientras se procesaba cada intento y actualizando el tablero al recibir la respuesta, con un manejo de errores que permitía reintentar sin perder el progreso.',
      technologies: ['Python', 'JavaScript', 'React', 'FastAPI', 'OracleDB'],
      images: [
        { src: '/projects/wordle/partida.png', alt: 'Partida de WORDLE con tablero de palabras y teclado en pantalla' },
      ],
      github: 'https://github.com/LuloSammartino/Wordle',
      url: 'https://wordle-front-y7gp.onrender.com/',
    },
  ],
}
