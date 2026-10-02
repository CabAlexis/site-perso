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

const trous = [];
for await (const chemin of fichiers(racine)) {
  for (const [, note] of (await readFile(chemin, 'utf8')).matchAll(motif)) {
    trous.push(`  ${relative(racine, chemin)} : ${note}`);
  }
}

if (trous.length > 0) {
  console.error(`\n${trous.length} TODO(cabalex) restant(s), build refusé :\n${trous.join('\n')}\n`);
  console.error('Pour relire le site malgré tout : npm run build:brouillon\n');
  process.exit(1);
}
console.log('Aucun TODO(cabalex) dans dist/.');
