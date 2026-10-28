// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: poner el dominio definitivo (lo usan las URLs canónicas y Open Graph)
  site: 'https://samuelpiscinas.com.uy',
  vite: {
    plugins: [tailwindcss()],
  },
});
