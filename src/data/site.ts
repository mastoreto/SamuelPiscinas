// Datos de marca y contacto: se usan en header, hero, contacto y footer.
// Cambiar aquí el teléfono/email actualiza toda la web.
// TODO(cliente): todo lo que va entre [corchetes] es un dato pendiente de confirmar.

import logo from '../assets/logo.png';
import isotipo from '../assets/isotipo.png';
import logoNegativo from '../assets/logo-negativo.png';
import aguaVerdeAntes from '../assets/ejemplo/agua-verde-antes.jpg';
import aguaVerdeDespues from '../assets/ejemplo/agua-verde-despues.jpg';
import piscinaComunidad from '../assets/ejemplo/piscina-comunidad.jpg';
import piscinaHero from '../assets/ejemplo/piscina-hero.jpg';

export const site = {
  name: 'Samuel Piscinas',
  // Título ≤ 60 caracteres y descripción ≈ 155: lo que se ve en Google. Palabra clave principal al comienzo.
  title: 'Mantenimiento de piscinas en Montevideo | Samuel Piscinas',
  description:
    'Mantenimiento de piscinas, tratamiento del agua, filtros, cloradores y bombas de calor en Montevideo, Canelones y San José. Presupuesto sin cargo.',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Samuel Piscinas: mantenimiento de piscinas en Montevideo, Canelones y San José',
  locale: 'es_UY',
} as const;

export const contact = {
  phoneDisplay: '096 037 235',
  phoneHref: 'tel:+59896037235',
  whatsappDisplay: '096 037 235',
  // Sólo dígitos con prefijo de país: lo usa el formulario para abrir WhatsApp.
  whatsappNumber: '59896037235',
  instagramHandle: 'samuel_piscinas44',
  email: 'contacto@samuelpiscinas.com.uy',
  hours: 'lunes a viernes, de 8 a 18 h',
  zone: 'Montevideo, Canelones y San José',
} as const;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Nuestros trabajos' },
  { href: '#zonas', label: 'Zonas' },
  { href: '#preguntas', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
] as const;

// ponytail: fotos de EJEMPLO (Wikimedia Commons, CC BY-SA) para ver el diseño.
// Sustituir por fotos reales de Samuel antes de publicar; los créditos están en README.
export const images = {
  logo,
  logoNegativo,
  isotipo,
  pool: piscinaHero,
  community: piscinaComunidad,
  greenBefore: aguaVerdeAntes,
  greenAfter: aguaVerdeDespues,
} as const;
