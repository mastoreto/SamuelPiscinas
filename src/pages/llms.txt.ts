import type { APIRoute } from 'astro';
import { contact, site } from '../data/site';
import { faqs, services } from '../data/home';

// Resumen legible para asistentes de IA (convención llms.txt): quién es, qué hace, dónde y cómo contactar.
export const GET: APIRoute = ({ site: origin }) => {
  const url = new URL('/', origin).href;
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Sitio: ${url}`,
    '',
    '## Servicios',
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    '',
    '## Zona de servicio',
    `${contact.zone}, Uruguay.`,
    '',
    '## Contacto',
    `- WhatsApp: ${contact.whatsappDisplay} (${url}#contacto)`,
    `- Correo: ${contact.email}`,
    `- Instagram: https://instagram.com/${contact.instagramHandle}`,
    `- Horario: ${contact.hours}`,
    '',
    '## Preguntas frecuentes',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
