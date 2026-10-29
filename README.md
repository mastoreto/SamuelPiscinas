# Samuel Piscinas

Web de una sola página (más la política de privacidad) para Samuel Piscinas, servicio de mantenimiento de piscinas en Uruguay. Astro 7 + Tailwind 4. Todo el toolchain de compilación es Rust: compilador de Astro (`@astrojs/compiler-rs`), Vite 8 con Rolldown/Oxc y Lightning CSS (vía Tailwind 4).

## Comandos

Requiere Node >= 22.12 y [bun](https://bun.sh).

| Comando          | Acción                             |
| :--------------- | :--------------------------------- |
| `bun install`    | Instala dependencias               |
| `bun dev`        | Servidor local en `localhost:4321` |
| `bun run build`  | Comprueba tipos y genera `dist/`   |
| `bun run format` | Formatea con Prettier              |

## Dónde se edita cada cosa

- `src/data/site.ts`: nombre, teléfono, WhatsApp, email, horario, zona e imágenes. Todo lo que va entre `[corchetes]` está pendiente de confirmar.
- `src/data/home.ts`: servicios, textos y enlaces del pie.
- `src/components/`: secciones, tarjetas, formulario y layout.
- `src/pages/privacidad.astro`: política de privacidad (Ley 18.331); revisar antes de publicar.
- `src/pages/404.astro`, `sitemap.xml.ts`, `robots.txt.ts`, `llms.txt.ts`: página 404, sitemap, robots (con rastreadores de IA permitidos) y resumen para asistentes de IA.
- `src/components/layout/Loader.astro`: pantalla de carga que aparece en cada entrada (no a rastreadores). Para saltarla, añadir `?noloader` a la URL.
- `public/og-image.jpg`: imagen para compartir (1200×630). Regenerarla cuando haya fotos reales.
- `PRODUCT.md` y `DESIGN.md`: contexto de producto y sistema visual.

## Formulario

Abre WhatsApp con el mensaje ya redactado y, si existe `PUBLIC_FORMSPREE_URL`, envía además una copia por email con [Formspree](https://formspree.io). Copia `.env.example` a `.env` y pon la URL; en Vercel, añádela en Settings → Environment Variables.

## Despliegue

Sitio estático: importar el repositorio en Vercel (detecta Astro). Antes de publicar:

1. Rellenar los `[corchetes]` (`grep -rn "\[" src/data`).
2. Sustituir las fotos de `src/assets/ejemplo/` por fotos reales.
3. Configurar `PUBLIC_FORMSPREE_URL` y el dominio `samuelpiscinas.com.uy` (también en `astro.config.mjs`: lo usan canónicas, Open Graph y sitemap).
4. Dar de alta el sitio en Search Console, enviar `sitemap.xml` y crear el perfil de Google Business.

## Créditos de las fotos de ejemplo

Las imágenes de `src/assets/ejemplo/` son de Wikimedia Commons (CC BY-SA) y solo sirven para ver el diseño; hay que sustituirlas antes de publicar.
