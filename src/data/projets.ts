import { z } from 'astro/zod';

/*
 * Fiches des quatre projets. Le schéma est vérifié au chargement du module,
 * donc au build : une fiche sans arbitrage, ou avec moins de deux éléments
 * vérifiables, fait échouer la génération du site.
 *
 * Une valeur inconnue s'écrit `null` avec un `todo` : la page affiche le trou
 * et émet le marqueur TODO(cabalex), que le build de production refuse.
 */

const preuve = z.object({
  libelle: z.string().min(1),
  valeur: z.string().nullable(),
  url: z.url().optional(),
  note: z.string().optional(),
  todo: z.string().optional(),
}).refine((p) => p.valeur !== null || p.todo, {
  message: 'Une preuve sans valeur doit porter un todo.',
});

const projet = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  titre: z.string().min(1),
  // Ce que la page montre, en une ligne, pour l'accueil.
  angle: z.string().min(1),
  statut: z.object({
    code: z.enum(['production', 'service', 'fonctionnel', 'arret']),
    libelle: z.string().min(1),
  }),
  description: z.string().min(50).max(200),
  // Au moins un arbitrage par page : ce qui a été refusé, reporté ou fait
  // autrement, et pourquoi. Résumé ici, développé dans la page.
  arbitrages: z.array(z.string().min(20)).min(1),
  preuves: z.array(preuve).min(2).max(3),
});

export type Projet = z.infer<typeof projet>;

const fiches = [
  {
    slug: 'plumes-jumelles',
    titre: 'Plumes Jumelles',
    angle: "Un site d'abonnement et une boutique, livrés à deux créatrices qui n'avaient qu'une page Instagram.",
    statut: { code: 'production', libelle: 'En production depuis le 4 septembre 2026' },
    description:
      "Abonnement postal et boutique en Laravel pour deux créatrices venues d'Instagram : "
      + 'Stripe, back-office maison, mails authentifiés DKIM. En production.',
    arbitrages: [
      "Première version AdonisJS + Nuxt réécrite en Laravel le 28 mai 2026.",
      'SSR abandonné : il imposait un démon Node sur Forge.',
      'Rétractation acceptée 30 jours au lieu de 14, faute de suivi de la date de réception.',
      'Livraison limitée à la France métropolitaine.',
    ],
    preuves: [
      { libelle: 'En production', valeur: 'plumes-jumelles.fr', url: 'https://plumes-jumelles.fr' },
      { libelle: 'Tests', valeur: '109 tests PHPUnit', note: 'suite Feature, au 28 septembre 2026' },
      {
        libelle: 'Capture',
        valeur: null,
        todo: "capture du site à ajouter ici, une fois l'autorisation des clientes obtenue",
      },
    ],
  },
  {
    slug: 'nutrifollow',
    titre: 'NutriFollow',
    angle: 'Un SaaS pour diététiciens, conçu, construit et sécurisé seul, de la base de données au serveur.',
    statut: { code: 'fonctionnel', libelle: 'Fonctionnel · migration HDS requise avant mise en service' },
    description:
      'SaaS de suivi diététique construit seul en Laravel : deux interfaces, temps réel, IA '
      + 'asynchrone, audit interne. Fonctionnel, migration HDS requise.',
    arbitrages: [
      "Le rattachement d'un compte existant par son e-mail, pratique, était une prise de contrôle de compte.",
      "Pas d'API REST ni d'application native : une seule application Inertia, l'interface patient en PWA.",
      "Le service worker ne met plus aucune donnée médicale en cache : pas de hors-ligne pour ces pages.",
    ],
    preuves: [
      { libelle: 'Tests', valeur: '184 Pest · 44 Vitest · 70 Dusk', note: 'au 2 octobre 2026' },
      { libelle: 'Site', valeur: 'nutrifollow.fr', url: 'https://nutrifollow.fr' },
    ],
  },
  {
    slug: 'bot-legendes',
    titre: 'Bot Légendes',
    angle: "Un bot Discord pensé pour qu'une panne ne fasse rien perdre et n'ouvre rien.",
    statut: { code: 'service', libelle: 'En service · conteneur podman' },
    description:
      "Bot Discord d'une alliance Dofus, conçu pour la panne : état en base, giveaways repris "
      + 'au redémarrage, tirage lu en REST, porte fermée si le bot tombe.',
    arbitrages: [
      'Les participants des giveaways ne sont pas suivis en direct : la liste est lue en REST au tirage.',
      "La porte d'entrée n'est pas gardée par le bot mais par les permissions du serveur.",
      'Migrations par lecture du schéma réel plutôt que par numéro de version.',
    ],
    preuves: [
      { libelle: 'Surface', valeur: '71 commandes slash', note: 'discord.js, better-sqlite3, dotenv : trois dépendances' },
      {
        libelle: 'Dépôt',
        valeur: null,
        todo: 'le dépôt CabAlexis/bot-legendes est-il public ? Si oui, lien à ajouter',
      },
    ],
  },
  {
    slug: 'dofus-switcher',
    titre: 'Dofus Switcher',
    angle: 'Un outil de bureau KDE Plasma 6 / Wayland qui intercepte la souris au niveau evdev, sans jamais toucher au jeu.',
    statut: { code: 'arret', libelle: "À l'arrêt · dernière version le 27 juin 2026" },
    description:
      'Gestion multi-comptes Dofus Retro sous KDE Plasma 6 / Wayland : grab evdev, réinjection '
      + 'uinput, aucune entrée envoyée au jeu. Python, 278 tests. À l’arrêt.',
    arbitrages: [
      "Contrainte des CGU d'Ankama : aucune entrée synthétique vers une fenêtre Dofus, aucun broadcast, aucune macro.",
      'Raccourcis actifs seulement fenêtre ouverte : ni démon, ni démarrage automatique, ni icône de zone de notification.',
      'Lot souris conditionné à une mesure de latence avant écriture (p99 < 3 ms, sinon abandon).',
    ],
    preuves: [
      {
        libelle: 'Code',
        valeur: 'github.com/CabAlexis/dofus-switcher',
        url: 'https://github.com/CabAlexis/dofus-switcher',
        note: 'v0.7.2, 12 versions taguées',
        todo: 'confirmer que le dépôt est public et que la licence MIT y est ajoutée',
      },
      { libelle: 'Tests', valeur: '278 tests pytest', note: 'exécutés en 1,1 s le 2 octobre 2026' },
      { libelle: 'Couverture', valeur: '90 % sur core/', note: "mesurée le 2 octobre 2026 ; l'interface Qt n'est pas mesurée" },
    ],
  },
] satisfies Projet[];

export const projets: Projet[] = fiches.map((fiche) => projet.parse(fiche));

export function projetParSlug(slug: string): { projet: Projet; numero: number; precedent?: Projet; suivant?: Projet } {
  const index = projets.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Projet inconnu : ${slug}`);
  return {
    projet: projets[index],
    numero: index + 1,
    precedent: projets[index - 1],
    suivant: projets[index + 1],
  };
}
