// Garde-fou de production : aucun trou signalé ne doit partir en ligne.
// Chaque information manquante est marquée <!-- TODO(cabalex): ... --> dans le
// source ; ce script échoue tant qu'il en reste une dans le site généré.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const racine = new URL('../dist/', import.meta.url).pathname;
const motif = /TODO\(cabalex\):\s*(.*?)\s*(?:-->|$)/gm;

async function* fichiers(dossier) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) yield* fichiers(chemin);
    else if (/\.(html|xml|txt|json)$/.test(entree.name)) yield chemin;
  }
}

async function* fichiersSources(dossier) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) yield* fichiersSources(chemin);
    else if (entree.name.endsWith('.astro')) yield chemin;
  }
}

const trous = [];
for await (const chemin of fichiers(racine)) {
  for (const [, note] of (await readFile(chemin, 'utf8')).matchAll(motif)) {
    trous.push(`  ${relative(racine, chemin)} : ${note}`);
  }
}

// Prépublication : les Todo ne sont pas rendus. On les liste depuis les
// sources, en avertissement, pour qu'ils restent visibles à chaque build.
const reglage = JSON.parse(await readFile(new URL('../src/data/publication.json', import.meta.url), 'utf8'));
if (reglage.prepublication) {
  const masques = [];
  const sources = new URL('../src/', import.meta.url).pathname;
  for await (const chemin of fichiersSources(sources)) {
    for (const [, note] of (await readFile(chemin, 'utf8')).matchAll(/<Todo\s+note="([^"]*)"/g)) {
      masques.push(`  ${relative(sources, chemin)} : ${note}`);
    }
  }
  console.warn(`\nPRÉPUBLICATION (src/data/publication.json) : ${masques.length} TODO masqué(s) dans le site en ligne :\n${masques.join('\n')}\n`);
}

if (trous.length > 0) {
  console.error(`\n${trous.length} TODO(cabalex) restant(s), build refusé :\n${trous.join('\n')}\n`);
  console.error('Pour relire le site malgré tout : npm run build:brouillon\n');
  process.exit(1);
}
console.log('Aucun TODO(cabalex) dans dist/.');
