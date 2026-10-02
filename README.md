# cabalex.dev

Site personnel d'Alexis Cabillic : une page d'accueil et une page par projet. Chaque page projet dit
ce qui a été choisi, ce qui a été refusé, et ce que ça a coûté.

## Stack

- [Astro](https://astro.build), seule dépendance. Le site généré ne contient aucun JavaScript.
- CSS écrit à la main (`@layer`, custom properties, timelines de défilement), sans framework.
- Polices auto-hébergées : Archivo variable (graisse et largeur) et IBM Plex Mono, licence OFL.

## Commandes

Node n'est pas installé sur la machine : le Makefile lance tout dans un conteneur `node:24` jetable
(podman).

```bash
make install    # npm ci
make dev        # http://localhost:4321
make brouillon  # build sans garde-fou, pour relire les pages avec leurs trous
make build      # build de production dans dist/
make preview    # construit puis sert dist/ (relançable, remplace le précédent)
make stop       # arrête dev ou preview
```

## Garde-fou des TODO

Toute information manquante est marquée `<!-- TODO(cabalex): ... -->` (composant `Todo`), et
affichée dans la page pour être visible en relecture. **`make build` échoue tant qu'il en reste un
dans `dist/`** (`scripts/verifier-todos.mjs`) : aucun trou ne part en production par mégarde.

Les fiches projets (`src/data/projets.ts`) sont validées par un schéma au build. Tous les dépôts
étant privés, un élément est soit **consultable** (il porte une URL publique), soit **déclaré** (un
chiffre sans URL, obligatoirement daté, affiché à part sous « Chiffres déclarés »). Chaque projet
doit avoir au moins un arbitrage et deux à trois éléments, dont au moins un consultable.

Seule exception : un projet dont rien n'est consultable de l'extérieur (Dofus Switcher, Bot
Légendes). Il le déclare (`sansPreuve`), le dit sur sa page, et ne garde que des éléments déclarés.
L'exception est limitée aux slugs de `EXCEPTIONS_PREUVES` : tout autre projet sans élément
consultable fait échouer le build.

## La coupe

Chaque page projet porte un schéma SVG du mécanisme réel (`src/components/Coupe.astro`), dessiné
comme une coupe technique : trait tireté pour un système externe, hachures pour une contrainte. Les
étapes numérotées renvoient à des passages du texte (`src/components/Etape.astro`).

Sur grand écran, la coupe reste fixe dans la marge et chaque étape s'allume pendant que son passage
traverse la zone de lecture. C'est fait en CSS seul, avec des animations pilotées par le défilement :
chaque passage expose une `view-timeline` nommée, et `timeline-scope` la rend visible à la coupe
voisine. Seules une couleur et une épaisseur de trait changent : aucun texte ne bouge ni
n'apparaît.

Sans support du navigateur, sur mobile ou avec `prefers-reduced-motion`, la coupe reste un schéma
statique complet, et les numéros suffisent à faire le lien avec le texte.

## L'accueil

L'en-tête pose l'accroche en typographie cinétique : chaque ligne a sa propre largeur de police et
s'étire jusqu'à sa place au chargement. Dessous, une table à dessin inclinée en perspective porte
les quatre coupes en vignettes (`Vignette.astro`), avec leurs paquets de signal ; elle se redresse
au défilement, sans jamais passer derrière le texte.

Viennent ensuite les projets en cartes : la vignette se dessine à l'entrée dans l'écran, s'allume
au survol, et au clic devient la coupe de la page projet (transition de vue entre documents, CSS
seul). Puis « Comment je travaille », avec sa propre coupe.

## Pièges rencontrés

- **Palette** : définie en clair puis redéfinie sous `@media (prefers-color-scheme: dark)`, et non
  avec `light-dark()`. Dans des `@keyframes`, Chromium résout `light-dark()` sans le mode de la
  page et retombe sur la valeur claire.
- **Minifieur** : il fusionne les propriétés d'animation dans le raccourci `animation`. Une
  `animation-timeline` y devient invalide, et un raccourci sans nom devient `none`. Les timelines
  sont donc posées dans des règles à part (`:root .selecteur { animation-timeline: … }`), et chaque
  raccourci porte son nom.
- **SVG** : pas de variable personnalisée animée injectée dans `color-mix()` pour une couleur SVG
  (rendu noir sous Brave). On anime directement `color`, `fill`, `stroke-width`.

## Structure

```
src/data/projets.ts             Fiches projets (statut, arbitrages, éléments), validées au build
src/data/coupes.ts              Données des coupes (nœuds, liens), y compris la boucle de l'accueil
src/layouts/Base.astro          Squelette HTML, métadonnées Open Graph, bandeau et pied de page
src/layouts/Projet.astro        Gabarit d'une page projet
src/components/Coupe.astro      Schéma du mécanisme (l'élément signature)
src/components/Vignette.astro   Silhouette d'une coupe, pour l'accueil
src/components/Etape.astro      Passage du texte lié à une étape de la coupe
src/components/SuiteAccueil.astro  Projets en cartes, « Comment je travaille », contact
src/components/Todo.astro       Trou signalé
src/lib/pointe.ts               Pointe de flèche orientée, partagée par Coupe et Vignette
src/pages/                      Accueil, quatre projets, mentions légales, 404, sitemap.xml
src/styles/global.css           Système typographique, palettes, grille, coupe, accueil
scripts/verifier-todos.mjs      Garde-fou de production
scripts/og/                     Source et génération de l'image Open Graph
```

## Image Open Graph

Une seule image pour tout le site, `public/og.png` (1200 × 630), statique. Sa source est
`scripts/og/og.html` ; `scripts/og/generer.sh` la régénère avec le Chromium de l'image Playwright,
sans dépendance ajoutée au projet.

## Déploiement

Site statique : `make build` produit `dist/`, à servir par Nginx. Sur Forge, il suffit d'un site
« Static HTML » dont le dossier web pointe sur `dist/`, avec `npm ci && npm run build` comme script
de déploiement (Node est disponible sur les serveurs Forge). Rien n'est déployé automatiquement.
