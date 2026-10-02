// @ts-check
import { defineConfig } from 'astro/config';

// Site entièrement statique : Nginx sert le dossier dist/, rien ne tourne côté serveur.
export default defineConfig({
  site: 'https://cabalex.dev',
  // La compression supprime l'espace entre un mot et une balise en début de
  // ligne (« crash.<code>SIGINT</code> ») : le gain ne vaut pas le risque.
  compressHTML: false,
  devToolbar: { enabled: false },
});
