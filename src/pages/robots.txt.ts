import type { APIRoute } from 'astro';

// Se permite todo, incluidos los rastreadores de asistentes de IA, para que el sitio pueda citarse en sus respuestas.
const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      ...aiBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
      `Sitemap: ${new URL('sitemap.xml', site)}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
