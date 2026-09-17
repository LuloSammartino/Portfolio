export const portfolio = {
  name: 'Luciano Sammartino',
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Sass', 'Tailwind CSS', 'SQL', 'Node.js', 'Supabase', 'OracleDB'],
  linkedin: 'https://www.linkedin.com/in/luciano-sammartino-26343b268/', 
  github: 'https://github.com/LuloSammartino', 
  email: 'lucianosammar@gmail.com', 
  es: {
    role: 'Junior Web Developer',
    introduction: 'Transformo necesidades reales en aplicaciones web. Desarrollo interfaces con React y las conecto con APIs y bases de datos para construir soluciones completas. Busco sumarme a un equipo donde aportar, aprender y seguir creciendo como desarrollador.',
    about: 'Soy Luciano, tengo 21 años y me formo en desarrollo web desde 2024. Me interesa entender el problema detrás de cada proyecto y convertirlo en una herramienta útil y fácil de usar. Me atrae especialmente el frontend, pero también trabajo con backend. Quiero aportar esa mirada práctica a un equipo que valore la iniciativa, el aprendizaje y el cuidado por los detalles.',
    projects: [
      {
        title: 'CRM a medida', category: 'Sistema de gestión comercial',
        description: 'El cliente tenía un local de productos de limpieza y necesitaba centralizar los números de su negocio y la información de productos, clientes y proveedores. Desarrollé un CRM a medida para registrar ventas, controlar ingresos y gastos y seguir todo el flujo de caja desde un mismo lugar. Incluye funciones personalizadas para consultar el precio de un producto sin IVA, actualizar precios de forma masiva por proveedor o rubro y exportar datos en formato Excel. Lo más difícil del proyecto fue mudar toda la base de datos, ya que el cliente tenía esos datos en un programa de escritorio viejo que guardaba muchos datos de forma desordenada y no tenía un respaldo. Tuve que hacer un script para limpiar y normalizar los datos y luego importarlos al nuevo sistema, cumpliendo con los requisitos del cliente.',
        technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
        images: [
          { src: '/projects/crm-a-medida/metricas.png', alt: 'Panel de métricas con ventas, gastos, balance y distribución de ventas' },
          { src: '/projects/crm-a-medida/caja-diaria.png', alt: 'Caja diaria con ventas, gastos y movimientos del negocio' },
          { src: '/projects/crm-a-medida/clientes.png', alt: 'Gestión de clientes con buscadores y filtros' },
          { src: '/projects/crm-a-medida/precio-sin-iva.png', alt: 'Consulta del precio de un producto sin IVA' },
        ], github: 'https://github.com/LuloSammartino/CRM', url: '',
      },
      {
        title: 'WORDLE', category: 'Juego web',
        description: 'Desarrollé un juego inspirado en Wordle para llevar a la práctica la conexión entre una interfaz web, una API y una base de datos. Utilicé React y JavaScript para la interfaz, Python con FastAPI para el backend y OracleDB como base de datos. El proyecto me permitió profundizar en la comunicación entre frontend y backend y en la organización del flujo de datos de una aplicación completa. Uno de los desafíos fue mantener el tablero sincronizado con las respuestas del servidor: al enviar varios intentos seguidos, las respuestas podían llegar en distinto orden. Lo resolví bloqueando el envío mientras se procesaba cada intento y actualizando el tablero al recibir la respuesta, con un manejo de errores que permitía reintentar sin perder el progreso.',
        technologies: ['Python', 'JavaScript', 'React', 'FastAPI', 'OracleDB'],
        images: [{ src: '/projects/wordle/partida.png', alt: 'Partida de WORDLE con tablero de palabras y teclado en pantalla' }],
        github: 'https://github.com/LuloSammartino/Wordle', url: 'https://wordle-front-y7gp.onrender.com/',
      },
    ],
  },
  en: {
    role: 'Junior Web Developer',
    introduction: 'I turn real needs into web applications. I build interfaces with React and connect them to APIs and databases to create complete solutions. I am looking to join a team where I can contribute, learn, and keep growing as a developer.',
    about: 'I am Luciano, I am 21 years old, and I have been studying web development since 2024. I enjoy understanding the problem behind each project and turning it into a useful, easy-to-use tool. I am especially drawn to frontend development, but I also work with backend technologies. I want to bring this practical mindset to a team that values initiative, learning, and attention to detail.',
    projects: [
      {
        title: 'Custom CRM', category: 'Business management system',
        description: 'The client owned a cleaning supplies store and needed to centralize the business numbers and information about products, customers, and suppliers. I developed a custom CRM to record sales, track income and expenses, and follow the entire cash flow in one place. It includes tailored features to check a product price without VAT, update prices in bulk by supplier or category, and export data to Excel. The hardest part was migrating the entire database: the client kept the data in an old desktop program where it was stored inconsistently and had no backup. I wrote a script to clean and normalize the data, then imported it into the new system while meeting the client’s requirements.',
        technologies: ['TypeScript', 'React', 'Node.js', 'Supabase'],
        images: [
          { src: '/projects/crm-a-medida/metricas.png', alt: 'Metrics dashboard with sales, expenses, balance, and sales distribution' },
          { src: '/projects/crm-a-medida/caja-diaria.png', alt: 'Daily register with sales, expenses, and business transactions' },
          { src: '/projects/crm-a-medida/clientes.png', alt: 'Customer management with search and filters' },
          { src: '/projects/crm-a-medida/precio-sin-iva.png', alt: 'Product price lookup without VAT' },
        ], github: 'https://github.com/LuloSammartino/CRM', url: '',
      },
      {
        title: 'WORDLE', category: 'Web game',
        description: 'I developed a Wordle-inspired game to practice connecting a web interface, an API, and a database. I used React and JavaScript for the interface, Python with FastAPI for the backend, and OracleDB as the database. The project helped me deepen my understanding of frontend-backend communication and the data flow of a complete application. One challenge was keeping the board synchronized with server responses: when several guesses were submitted in a row, responses could arrive out of order. I solved this by disabling submissions while each guess was processed and updating the board when the response arrived, with error handling that allowed retries without losing progress.',
        technologies: ['Python', 'JavaScript', 'React', 'FastAPI', 'OracleDB'],
        images: [{ src: '/projects/wordle/partida.png', alt: 'WORDLE game with word board and on-screen keyboard' }],
        github: 'https://github.com/LuloSammartino/Wordle', url: 'https://wordle-front-y7gp.onrender.com/',
      },
    ],
  },
}
