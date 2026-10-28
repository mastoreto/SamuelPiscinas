---
name: Samuel Piscinas
description: Mantenimiento de piscinas con trato directo: azul profundo, cian luminoso y formas muy redondeadas.
colors:
  navy: "#0b2347"
  deep: "#0f3870"
  blue: "#125494"
  cyan: "#0ea5e9"
  light-cyan: "#38bdf8"
  sky: "#e0f2fe"
  link: "#0369a1"
  mist: "#f5fafe"
  ink: "#1e293b"
  slate-text: "#475569"
  whatsapp: "#047857"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.4
  body:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  headline-sm:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.25
  label:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  field: "1rem"
  card: "1.75rem"
  panel: "2rem"
  hero: "2.5rem"
  pill: "9999px"
spacing:
  section: "6.5rem"
  gutter: "2rem"
  card: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.deep}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.blue}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card-service:
    backgroundColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "28px"
  card-featured:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "{rounded.panel}"
    padding: "36px"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.navy}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
---

# Design System: Samuel Piscinas

## Overview

**Creative North Star: "El vecino de confianza"**

La web habla como una persona, no como una empresa: Samuel conoce tu piscina y contesta él. Todo el sistema traduce esa cercanía en formas blandas y generosas (esquinas muy redondeadas, botones tipo píldora, sombras suaves teñidas de azul) sobre una base limpia de azul profundo y cian luminoso que recuerda al agua cuidada.

La densidad es holgada y la jerarquía, clara: titulares en peso extra-negrita, texto de apoyo en gris pizarra y una sola acción dominante por bloque (pedir presupuesto). La confianza se gana con honestidad, así que los datos técnicos (lecturas de pH, informe de visita) se muestran como lo que son, ejemplos, y las fotos deben ser reales.

**Key Characteristics:**

- Paleta navy y cian, fija: es la identidad de la marca.
- Una sola familia tipográfica, Plus Jakarta Sans, con contraste por peso y tamaño.
- Esquinas muy redondeadas y sombras suaves, nunca duras.
- Una tarjeta oscura (navy) por sección como punto focal.
- Contacto siempre a un gesto: WhatsApp, llamada o presupuesto.

## Colors

Azules profundos para estructura y texto, cian para acento y estados, un verde solo para WhatsApp.

### Primary

- **Azul Marino Profundo** (#0b2347): titulares, texto principal de marca, fondo del pie y de la tarjeta destacada.
- **Azul Piscina Hondo** (#0f3870): botón principal y acentos de interfaz.
- **Azul Corporativo** (#125494): estado hover del botón principal.

### Secondary

- **Cian Agua** (#0ea5e9): anillos de foco y bordes activos de formulario.
- **Cian Claro** (#38bdf8): borde de la tarjeta de servicio destacada, botón claro sobre fondo oscuro y selección de texto.
- **Cian Texto** (#0369a1): enlaces y texto de acento sobre blanco (el cian de marca no llega a 4,5:1).

### Neutral

- **Cielo Pálido** (#e0f2fe): fondos de iconos, chips y bordes suaves.
- **Bruma** (#f5fafe): fondo alterno de la sección de servicios.
- **Tinta** (#1e293b): texto del cuerpo.
- **Pizarra** (#475569): texto secundario.
- **Verde WhatsApp** (#047857): botones y canal de WhatsApp.

### Named Rules

**The Brand Lock Rule.** La paleta navy y cian no se sustituye ni se extiende con colores nuevos; evolucionan composición y contenido, no el color.
**The Readable Cyan Rule.** El cian de marca se usa en bordes y foco; el texto de acento sobre blanco usa Cian Texto (#0369a1).

## Typography

**Display Font:** Plus Jakarta Sans Variable (con Plus Jakarta Sans, ui-sans-serif, system-ui)
**Body Font:** la misma familia
**Label/Mono Font:** ninguna distinta

**Character:** una sans geométrica amable y legible; la personalidad viene del peso 800 en titulares frente a un cuerpo tranquilo.

### Hierarchy

- **Display** (800, clamp 2.25–3.75rem, 1.06): titular del hero, con balance de líneas.
- **Headline** (800, 1.875–2.25rem, 1.25): títulos de sección.
- **Title** (800, 1.125–1.5rem): títulos de tarjeta.
- **Headline pequeño** (800, 1.75rem, 1.25): titulares de banners y proyectos destacados.
- **Body pequeño** (400, 0.9375rem, 1.625): descripciones de tarjetas, formulario y pie.
- **Body** (400, 1rem–1.125rem, 1.625): párrafos; medida máxima cercana a 65 caracteres.
- **Label** (700, 0.875rem): botones, etiquetas de formulario y chips.

### Named Rules

**The Weight Contrast Rule.** El peso 800 se reserva para titulares y datos clave; el resto va en 400–700.

## Layout

Contenedor centrado de máximo 80rem con gutter de 1.5rem (2rem desde `lg`). Secciones con 5rem de aire vertical, 6,5rem desde `lg`. Rejillas de 1, 2, 3 o 4 columnas según contenido, siempre de una columna en móvil. El header es fijo y las anclas dejan 6rem de margen. En móvil hay una barra fija inferior con "Llamar" y "WhatsApp", y el pie reserva espacio para ella.

## Elevation & Depth

Sistema híbrido: capas tonales (blanco, bruma, cielo pálido) más sombras suaves con desplazamiento y desenfoque amplios, teñidas de azul.

### Shadow Vocabulary

- **Suave** (`box-shadow: 0 30px 60px -30px rgb(11 35 71 / 0.55)`): fotos grandes y tarjeta navy.
- **Fluida** (`0 20px 40px -15px rgb(15 56 112 / 0.45)`): botón principal.
- **Flotante** (`0 25px 50px -12px rgb(14 116 144 / 0.3)`): tarjeta de informe sobre la foto del hero.

### Named Rules

**The Soft Blue Rule.** Las sombras llevan desplazamiento y desenfoque, teñidas de azul; nunca halos de color sin desplazamiento ni sombras duras.

## Shapes

Lenguaje redondeado y amable: campos de 1rem, tarjetas de 1,75rem, paneles de 2rem, hero de 2,5rem y botones en píldora completa. Los iconos viven en cuadrados redondeados de 1rem o círculos. Las fotos grandes llevan un marco blanco de 5px.

## Components

### Buttons

- **Shape:** píldora completa.
- **Primary:** Azul Piscina Hondo con texto blanco y sombra fluida; hover a Azul Corporativo; leve hundimiento al pulsar (1px).
- **Secondary:** blanco con borde pizarra claro; hover con borde cian claro.
- **WhatsApp:** verde esmeralda oscuro con texto blanco.
- **Claro:** cian claro con texto navy, para fondos oscuros.

### Cards / Containers

- **Corner Style:** 1,75rem en servicios y opiniones, 2rem en paneles.
- **Background:** blanco con borde cielo pálido; la destacada usa cian claro de 1,5px con sombra cian suave.
- **Internal Padding:** 1,75rem a 2,25rem.

### Inputs / Fields

- **Style:** esquinas de 1rem, borde pizarra claro, relleno de 14x16px.
- **Focus:** borde y anillo cian.
- **Error:** aviso rojo suave bajo el formulario; el campo recibe `aria-invalid`.

### Navigation

Enlaces en peso 600 y pizarra, con hover a azul profundo; en móvil, botón de menú redondo de 44px y panel desplegable con enlaces de 12px de relleno.

### Informe de visita (componente de marca)

Tarjeta con lecturas de pH, cloro y sal sobre una escala con rango correcto; transmite el rigor técnico de Samuel. Siempre rotulada como "Ejemplo" hasta tener datos reales.

## Do's and Don'ts

### Do:

- **Do** mantener navy (#0b2347) y cian (#0ea5e9) como identidad.
- **Do** usar esquinas de 1rem a 2,5rem y botones en píldora.
- **Do** usar Cian Texto (#0369a1) para enlaces sobre blanco.
- **Do** poner fotos reales de Samuel y sus piscinas.
- **Do** mantener WhatsApp, llamada y presupuesto siempre a un gesto.

### Don't:

- **Don't** cambiar la paleta navy y cian.
- **Don't** usar fotos de stock evidentes; las de ejemplo se sustituyen antes de publicar.
- **Don't** usar sombras duras ni halos de color sin desplazamiento.
- **Don't** mostrar valoraciones, cifras u opiniones que no sean reales.
- **Don't** meter una segunda familia tipográfica.
