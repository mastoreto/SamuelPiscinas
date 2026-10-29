import type { APIRoute } from 'astro';
import { contact, site } from '../data/site';
import { faqs, services } from '../data/home';

// Resumen para asistentes de IA (convención llms.txt): quién es, qué hace, dónde, cómo trabaja y cómo contactar.
// Sale de los mismos datos que el sitio (site.ts y home.ts), así que no hay que mantenerlo a mano.
export const GET: APIRoute = ({ site: origin }) => {
  const url = (path = '') => new URL(path, origin).href;
  const departments = contact.zone.replace(' y ', ', ').split(', ');

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} es un servicio local de mantenimiento, tratamiento del agua y reparación de piscinas en Uruguay. Atiende casas particulares, clubes deportivos y comunidades en ${contact.zone}. Se habla siempre directamente con Samuel, que conoce el historial de cada piscina y hace el seguimiento de cada visita.`,
    '',
    '## Datos clave',
    '- Rubro: mantenimiento de piscinas, tratamiento del agua, instalación y reparación de equipos.',
    '- País y zona: Uruguay. Departamentos: ' + departments.join(', ') + '.',
    '- Presupuesto sin cargo y precio cerrado antes de empezar. No se publican precios: todo se presupuesta a medida según la piscina.',
    '- Clientes: dueños de casas con piscina, clubes deportivos y piscinas colectivas.',
    `- Horario de atención: ${contact.hours}.`,
    '- Idioma: español de Uruguay.',
    '',
    '## Servicios',
    ...services.map((s) => `- **${s.title}**: ${s.description}`),
    '- **Recuperación de agua verde**: tratamiento de choque, filtrado y aspirado hasta dejar el agua cristalina, normalmente en 48 horas.',
    '- **Cambio de arena del filtro**: se recomienda arena de cuarzo por su mayor durabilidad.',
    '- **Planes para clubes y piscinas colectivas**: libro de registro al día, controles del agua y analíticas de laboratorio.',
    '',
    '## Temas en los que trabaja',
    '- Mantenimiento de piscinas (visitas semanales o quincenales)',
    '- Tratamiento y equilibrio del agua (pH, cloro, sal), medición y ajuste en cada visita',
    '- Limpieza de filtros, skimmers y control de algas',
    '- Cloradores salinos y sondas de pH',
    '- Bombas de calor para piscina y sistemas hidráulicos',
    '- Bombas de piscina, arena y vidrio del filtro, focos LED y cuadros eléctricos',
    '',
    '## Cómo trabaja',
    '1. Se pide un presupuesto sin cargo por WhatsApp o con el formulario del sitio.',
    '2. Samuel revisa la piscina y pasa un precio cerrado antes de empezar.',
    '3. Visitas periódicas: limpieza, control del circuito, medición del agua y ajuste con el producto justo.',
    '4. Seguimiento personal: se registran los valores de cada visita y las consultas se resuelven directo con Samuel.',
    '',
    '## Cómo pedir presupuesto',
    `- Formulario en ${url('#contacto')}: arma un mensaje de WhatsApp con nombre, teléfono, tipo de piscina, departamento, localidad y lo que se necesita.`,
    `- WhatsApp: ${contact.whatsappDisplay} (https://wa.me/${contact.whatsappNumber})`,
    `- Correo: ${contact.email}`,
    `- Instagram: https://instagram.com/${contact.instagramHandle}`,
    '',
    '## Páginas del sitio',
    `- [Inicio](${url()}): presentación, servicios, trabajos, zonas, preguntas frecuentes y contacto.`,
    `- [Cómo trabajamos](${url('#por-que-samuel')})`,
    `- [Servicios](${url('#servicios')})`,
    `- [Nuestros trabajos](${url('#trabajos')}): mantenimientos, instalaciones, cambios de arena y reparaciones.`,
    `- [Zonas](${url('#zonas')}): verificador de si se llega a una dirección.`,
    `- [Preguntas frecuentes](${url('#preguntas')})`,
    `- [Política de privacidad](${url('privacidad')})`,
    `- [Sitemap](${url('sitemap.xml')})`,
    '',
    '## Preguntas frecuentes',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
