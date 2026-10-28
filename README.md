# Samuel Piscinas

Web de una sola página (más la política de privacidad) para Samuel Piscinas, servicio de mantenimiento de piscinas en Uruguay. Astro 7 + Tailwind 4.

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
- `PRODUCT.md` y `DESIGN.md`: contexto de producto y sistema visual.

## Formulario

Abre WhatsApp con el mensaje ya redactado y, si existe `PUBLIC_FORMSPREE_URL`, envía además una copia por email con [Formspree](https://formspree.io). Copia `.env.example` a `.env` y pon la URL; en Vercel, añádela en Settings → Environment Variables.

## Despliegue

Sitio estático: importar el repositorio en Vercel (detecta Astro). Antes de publicar:

1. Rellenar los `[corchetes]` (`grep -rn "\[" src/data`).
2. Sustituir las fotos de `src/assets/ejemplo/` por fotos reales.
3. Configurar `PUBLIC_FORMSPREE_URL` y el dominio `samuelpiscinas.com.uy`.

## Créditos de las fotos de ejemplo

Las imágenes de `src/assets/ejemplo/` son de Wikimedia Commons (CC BY-SA) y solo sirven para ver el diseño; hay que sustituirlas antes de publicar.
