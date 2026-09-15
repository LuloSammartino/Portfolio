// Reemplazá estos ejemplos con tu información. Usá URLs completas (https://...).
export const portfolio = {
  name: 'Luciano Sammartino',
  role: 'Junior Web Developer',
  introduction: 'Me apasiona crear soluciones digitales a traves de la programación y el diseño web. Busco oportunidades para crecer profesionalmente y contribuir a proyectos innovadores.',
  about: 'Tengo 21 años  y estudio programacion web desde 2024',
  skills: ['Habilidad 01', 'Habilidad 02', 'Habilidad 03'],
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
    { title: 'Otro proyecto', category: 'Categoría / Año', description: 'Explicá qué construiste, para quién y qué aprendiste en el proceso.', technologies: ['Tecnología', 'Herramienta'], image: '', imageAlt: '', url: '' },
    { title: 'Una idea hecha realidad', category: 'Categoría / Año', description: 'Sumá un trabajo que represente tus intereses y tu manera de resolver problemas.', technologies: ['Tecnología', 'Herramienta'], image: '', imageAlt: '', url: '' },
  ],
}
