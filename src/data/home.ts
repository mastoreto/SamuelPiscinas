// Contenido de la home, separado del marcado para poder editarlo sin tocar componentes.
// TODO(cliente): todo lo que va entre [corchetes] es un dato pendiente de confirmar.


// Lecturas de ejemplo del informe de visita. La posición de cada marca se calcula
// sobre la escala [min, max]; el tramo [okMin, okMax] es el rango correcto.
export type Reading = {
  label: string;
  value: number;
  from: number;
  min: number;
  max: number;
  okMin: number;
  okMax: number;
};

export const sampleReadings: Reading[] = [
  { label: 'pH', value: 7.4, from: 8.0, min: 6.8, max: 8.2, okMin: 7.2, okMax: 7.6 },
  { label: 'Cloro', value: 1.2, from: 0.2, min: 0, max: 3, okMin: 0.5, okMax: 2 },
  { label: 'Sal g/l', value: 4.3, from: 2.8, min: 2, max: 6, okMin: 4, okMax: 5 },
];

export const pillars = {
  preventive: {
    title: 'Mantenimiento a medida',
    description:
      'Un plan de visitas ajustado a tu piscina, con los trabajos que realmente necesita.',
    bullets: [
      'Limpieza de filtros y skimmers',
      'Cepillado de paredes y control de algas',
      'Control y cuidado de todo el circuito',
    ],
  },
  water: {
    title: 'Tratamiento del agua según cada caso',
    description:
      'Tomamos una muestra, medimos y corregimos con el producto justo hasta que cada valor vuelve a su rango.',
  },
  attention: {
    title: 'Seguimiento personal de Samuel',
    description:
      'Hablás directamente con Samuel, que conoce tu piscina y hace el seguimiento de cada visita.',
  },
} as const;

export type Service = {
  title: string;
  description: string;
  badge?: string;
};

export const services: Service[] = [
  {
    title: 'Mantenimiento periódico',
    description:
      'Limpieza de fondo, skimmers, nivel de agua, bomba y filtros. Revisión del sistema hidráulico en general.',
  },
  {
    title: 'Tratamiento de agua',
    description: 'Tratamiento de choque, filtrado y aspirado hasta dejarla cristalina.',
  },
  {
    title: 'Instalaciones',
    description:
      'Instalación y mantenimiento de sistemas hidráulicos, cloradores, bombas de calor u otros equipamientos.',
  },
  {
    title: 'Averías y equipos',
    description: 'Bombas con fugas o ruido, cambio de arena o vidrio, focos LED y cuadros.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  place: string;
  avatar: 'deep' | 'sky' | 'slate';
};

// TODO(cliente): sólo opiniones reales y con permiso para publicarlas.
// La línea de valoración se oculta mientras url sea '#': poner aquí el enlace real a Google.
export const googleRating = { score: '[4,9]', count: '[N]', url: '#' };

export const testimonials: Testimonial[] = [
  {
    quote: '[Opinión real de un cliente particular, tres líneas como máximo.]',
    name: '[Nombre]',
    place: 'Casa en [localidad]',
    avatar: 'deep',
  },
  {
    quote: '[Opinión real del responsable de un club deportivo.]',
    name: '[Nombre]',
    place: 'Club en [localidad]',
    avatar: 'sky',
  },
  {
    quote: '[Opinión real sobre un rescate de agua verde o una avería.]',
    name: '[Nombre]',
    place: 'Chalet en [localidad]',
    avatar: 'slate',
  },
];

export const poolTypes = [
  { value: 'particular', label: 'Particular' },
  { value: 'club', label: 'Club deportivo' },
  { value: 'comunidad', label: 'Comunidad' },
] as const;

export const serviceOptions = [
  'Agua verde o turbia',
  'Mantenimiento periódico',
  'Puesta a punto o invernaje',
  'Instalaciones',
  'Una avería',
  'Otra cosa',
];

export const footerColumns = [
  {
    title: 'Servicios',
    links: [
      { href: '#servicios', label: 'Mantenimiento' },
      { href: '#servicios', label: 'Tratamiento de agua' },
      { href: '#servicios', label: 'Instalaciones' },
      { href: '#servicios', label: 'Averías' },
      { href: '#servicios', label: 'Clubes y comunidades' },
    ],
  },
  {
    title: 'Samuel Piscinas',
    links: [
      { href: '#como-trabajamos', label: 'Cómo trabajamos' },
      { href: '#trabajos', label: 'Nuestros trabajos' },
      { href: '#contacto', label: 'Presupuesto' },
    ],
  },
];

export const legalLinks = [{ href: '/privacidad', label: 'Privacidad' }];

// TODO(cliente): borrador de preguntas frecuentes; que Samuel confirme cada respuesta.
export const faqs = [
  {
    q: '¿Cada cuánto vienen a mi piscina?',
    a: 'Hacemos visitas semanales o quincenales, según el tamaño de la piscina y cuánto se use.',
  },
  {
    q: '¿Tiene costo el presupuesto?',
    a: 'No. El presupuesto es sin cargo y te damos un precio cerrado antes de empezar.',
  },
  {
    q: '¿Cuánto tardan en recuperar una piscina con agua verde?',
    a: 'Normalmente en 48 horas, con tratamiento de choque, filtrado y aspirado hasta dejarla cristalina.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'En Montevideo, Canelones y San José. Podés verificar tu dirección en el buscador de zonas.',
  },
  {
    q: '¿Atienden clubes y piscinas colectivas?',
    a: 'Sí. Armamos planes con libro de registro al día, controles del agua y analíticas de laboratorio.',
  },
  {
    q: '¿Instalan y mantienen bombas de calor para piscina?',
    a: 'Sí. Instalamos y mantenemos bombas de calor, sistemas hidráulicos, cloradores y otros equipamientos de la piscina.',
  },
  {
    q: '¿Cada cuánto hay que cambiar la arena del filtro?',
    a: 'Depende del uso y de la calidad del agua. Recomendamos arena de cuarzo por su mayor durabilidad: así se cambia menos seguido y el filtrado se mantiene bueno.',
  },
  {
    q: '¿Trabajan con cloradores salinos?',
    a: 'Sí. Instalamos y mantenemos cloradores salinos y sondas de pH, y medimos y ajustamos el tratamiento del agua en cada visita.',
  },
  {
    q: '¿Cómo hago una consulta?',
    a: 'Por WhatsApp o con el formulario de presupuesto. Atendemos de lunes a viernes, de 8 a 18 h.',
  },
] as const;
