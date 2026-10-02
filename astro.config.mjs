// @ts-check
import { defineConfig } from 'astro/config';

// Site entièrement statique : Nginx sert le dossier dist/, rien ne tourne côté serveur.
export default defineConfig({
  site: 'https://cabalex.dev',
  devToolbar: { enabled: false },
});
