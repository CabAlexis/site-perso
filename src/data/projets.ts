import { z } from 'astro/zod';

/*
 * Fiches des quatre projets. Le schéma est vérifié au chargement du module,
 * donc au build : une fiche sans arbitrage, ou qui ne respecte pas la règle
 * des éléments vérifiables, fait échouer la génération du site.
 *
 * Tous les dépôts sont privés. Un élément est donc de deux natures :
 *   - consultable : il porte une URL publique (site en production) ;
 *   - déclaré : un chiffre sans URL, affiché comme tel, avec sa date.
 * Règle : deux ou trois éléments par projet, dont au moins un consultable.
 *
 * Exception : un projet dont rien n'est consultable de l'extérieur. Il le
 * déclare (`sansPreuve`) et le dit sur sa page ; il ne garde que des éléments
 * déclarés. L'exception est limitée aux slugs de EXCEPTIONS_PREUVES : l'étendre
 * est une décision, pas un oubli.
 *
 * Une valeur inconnue s'écrit `null` avec un `todo` : la page affiche le trou
 * et émet le marqueur TODO(cabalex), que le build de production refuse.
 */

const element = z.object({
  libelle: z.string().min(1),
  valeur: z.string().nullable(),
  url: z.url().optional(),
  note: z.string().optional(),
  todo: z.string().optional(),
}).refine((e) => e.valeur !== null || e.todo, {
  message: 'Un élément sans valeur doit porter un todo.',
}).refine((e) => e.url || e.todo || /\d{4}/.test(e.note ?? ''), {
  message: 'Un élément déclaré (sans URL) doit porter sa date dans sa note.',
});

export const EXCEPTIONS_PREUVES = ['dofus-switcher', 'bot-legendes'] as const;

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
  elements: z.array(element).min(1).max(3),
  sansPreuve: z.object({ motif: z.string().min(20) }).optional(),
}).superRefine((p, ctx) => {
  const consultables = p.elements.filter((e) => e.url).length;
  if (!p.sansPreuve) {
    if (p.elements.length < 2) {
      ctx.addIssue({ code: 'custom', message: `${p.slug} : deux à trois éléments requis.` });
    }
    if (consultables === 0) {
      ctx.addIssue({ code: 'custom', message: `${p.slug} : au moins un élément consultable (URL) requis.` });
    }
    return;
  }
  if (!(EXCEPTIONS_PREUVES as readonly string[]).includes(p.slug)) {
    ctx.addIssue({
      code: 'custom',
      message: `${p.slug} : l'exception aux éléments consultables est réservée à ${EXCEPTIONS_PREUVES.join(', ')}.`,
    });
  }
  if (consultables > 0) {
    ctx.addIssue({ code: 'custom', message: `${p.slug} : un projet sans preuve ne liste rien de consultable.` });
  }
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
    elements: [
      { libelle: 'En production', valeur: 'plumes-jumelles.fr', url: 'https://plumes-jumelles.fr' },
      { libelle: 'Tests', valeur: '109 tests PHPUnit', note: 'suite Feature, au 28 septembre 2026' },
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
    elements: [
      { libelle: 'Tests', valeur: '184 Pest · 44 Vitest · 70 Dusk', note: 'au 2 octobre 2026' },
      { libelle: 'Site', valeur: 'nutrifollow.fr', url: 'https://nutrifollow.fr' },
    ],
  },
  {
    slug: 'bot-legendes',
    titre: 'Bot Légendes',
    angle: "Un bot Discord pensé pour qu'une panne ne fasse rien perdre et n'ouvre rien.",
    statut: { code: 'service', libelle: 'En service · démon supervisord' },
    description:
      "Bot Discord d'une alliance Dofus, conçu pour la panne : état en base, giveaways repris "
      + 'au redémarrage, tirage lu en REST, porte fermée si le bot tombe.',
    arbitrages: [
      'Les participants des giveaways ne sont pas suivis en direct : la liste est lue en REST au tirage.',
      "La porte d'entrée n'est pas gardée par le bot mais par les permissions du serveur.",
      'Migrations par lecture du schéma réel plutôt que par numéro de version.',
    ],
    elements: [
      { libelle: 'Surface', valeur: '71 commandes slash', note: 'comptées le 2 octobre 2026 ; trois dépendances : discord.js, better-sqlite3, dotenv' },
    ],
    sansPreuve: {
      motif: "Le dépôt est privé et le serveur Discord de l'alliance est réservé à ses membres : rien n'est consultable de l'extérieur.",
    },
  },
  {
    slug: 'dofus-switcher',
    titre: 'Dofus Switcher',
    angle: 'Un outil de bureau KDE Plasma 6 / Wayland qui intercepte la souris au niveau evdev, sans jamais toucher au jeu.',
    statut: { code: 'arret', libelle: "À l'arrêt · dernière version le 27 juin 2026" },
    description:
      'Gestion multi-comptes Dofus Retro sous KDE Plasma 6 / Wayland : grab evdev, réinjection '
      + 'uinput, aucune entrée envoyée au jeu. Python, projet à l’arrêt.',
    arbitrages: [
      "Contrainte des CGU d'Ankama : aucune entrée synthétique vers une fenêtre Dofus, aucun broadcast, aucune macro.",
      'Raccourcis actifs seulement fenêtre ouverte : ni démon, ni démarrage automatique, ni icône de zone de notification.',
      'Lot souris conditionné à une mesure de latence avant écriture (p99 < 3 ms, sinon abandon).',
    ],
    elements: [
      { libelle: 'Tests', valeur: '278 tests pytest', note: 'tous passants, exécutés le 2 octobre 2026' },
      { libelle: 'Couverture', valeur: '90 % sur core/', note: "mesurée le 2 octobre 2026 ; l'interface Qt n'est pas mesurée" },
    ],
    sansPreuve: {
      motif: "Le dépôt est privé et l'outil n'a jamais été distribué : rien n'est consultable de l'extérieur.",
    },
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
