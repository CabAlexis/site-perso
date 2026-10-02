# cabalex.dev

Site personnel d'Alexis Cabillic : une page d'accueil et une page par projet. Chaque page projet dit
ce qui a été choisi, ce qui a été refusé, et ce que ça a coûté.

## Stack

- [Astro](https://astro.build), seule dépendance. Le site généré ne contient aucun JavaScript.
- CSS écrit à la main (`@layer`, custom properties, `light-dark()`), sans framework.
- Polices auto-hébergées : Archivo variable (graisse et largeur) et IBM Plex Mono, licence OFL.

## Commandes

Node n'est pas installé sur la machine : le Makefile lance tout dans un conteneur `node:24` jetable
(podman).

```bash
make install    # npm ci
make dev        # http://localhost:4321
make brouillon  # build sans garde-fou, pour relire les pages avec leurs trous
make build      # build de production dans dist/
make preview    # sert dist/
```

## Garde-fou des TODO

Toute information manquante est marquée `<!-- TODO(cabalex): ... -->` (composant `Todo`), et
affichée dans la page pour être visible en relecture. **`make build` échoue tant qu'il en reste un
dans `dist/`** (`scripts/verifier-todos.mjs`) : aucun trou ne part en production par mégarde.

Les fiches projets (`src/data/projets.ts`) sont validées par un schéma au build : au moins un
arbitrage et deux à trois éléments vérifiables par projet.

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

## Structure

```
src/data/projets.ts         Fiches projets (statut, arbitrages, preuves), validées au build
src/layouts/Base.astro      Squelette HTML, métadonnées Open Graph, bandeau et pied de page
src/layouts/Projet.astro    Gabarit d'une page projet
src/components/Coupe.astro  Schéma du mécanisme (l'élément signature)
src/components/Etape.astro  Passage du texte lié à une étape de la coupe
src/components/Todo.astro   Trou signalé
src/pages/                  Accueil, quatre projets, mentions légales, 404, sitemap.xml
src/styles/global.css       Système typographique, palettes, grille, coupe
scripts/verifier-todos.mjs  Garde-fou de production
```

## Image Open Graph

Une seule image pour tout le site, `public/og.png` (1200 × 630), statique. Sa source est
`scripts/og/og.html` ; `scripts/og/generer.sh` la régénère avec le Chromium de l'image Playwright,
sans dépendance ajoutée au projet.

## Déploiement

Site statique : `make build` produit `dist/`, à servir par Nginx. Sur Forge, il suffit d'un site
« Static HTML » dont le dossier web pointe sur `dist/`, avec `npm ci && npm run build` comme script
de déploiement (Node est disponible sur les serveurs Forge). Rien n'est déployé automatiquement.
