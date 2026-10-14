import { z } from 'astro/zod';

/*
 * Fiches des projets. Le schéma est vérifié au chargement du module,
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

// L'encadré « En bref », en langage simple, en tête de chaque page projet.
// Une réalisation parle de son client ; un projet du labo n'en a pas ; un
// produit public, sans client unique, parle de ceux qui l'utilisent ; une
// démonstration, de ce qu'elle montre.
const TERMES_EN_BREF = {
  realisations: ['Le client', 'Son besoin', 'Le résultat'],
  labo: ['Le projet', 'Le besoin visé', 'Où il en est'],
  produit: ['Le projet', 'Pour qui', 'Où il en est'],
  demo: ['Le projet', 'Pour qui', "Ce qu'il montre"],
} as const;

export const EXCEPTIONS_PREUVES = ['dofus-switcher', 'bot-legendes', 'patchoumio'] as const;

const projet = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  titre: z.string().min(1),
  // Réalisations : en vitrine sur l'accueil. Labo : projets personnels, sans
  // client, dans un bloc compact en bas de l'accueil.
  rubrique: z.enum(['realisations', 'labo']),
  // Réalisation sans client unique : un produit public, installable par tous,
  // ou un site de démonstration.
  modele: z.enum(['produit', 'demo']).optional(),
  // Réalisations : les sites en grandes cartes sur l'accueil, les bots Discord
  // regroupés dessous.
  nature: z.enum(['site', 'bot']).optional(),
  // Ce que la page montre, en une ligne, pour l'accueil.
  angle: z.string().min(1),
  statut: z.object({
    code: z.enum(['production', 'service', 'fonctionnel', 'arret']),
    libelle: z.string().min(1),
  }),
  description: z.string().min(50).max(200),
  enBref: z.array(z.object({ terme: z.string(), texte: z.string().min(20) })).length(3),
  // Au moins un arbitrage par page : ce qui a été refusé, reporté ou fait
  // autrement, et pourquoi. Résumé ici, développé dans la page.
  arbitrages: z.array(z.string().min(20)).min(1),
  elements: z.array(element).min(1).max(3),
  sansPreuve: z.object({ motif: z.string().min(20) }).optional(),
}).superRefine((p, ctx) => {
  const attendus = TERMES_EN_BREF[p.modele ?? p.rubrique];
  if (p.enBref.some((e, i) => e.terme !== attendus[i])) {
    ctx.addIssue({ code: 'custom', message: `${p.slug} : l'encadré « En bref » attend ${attendus.join(', ')}.` });
  }
  if ((p.rubrique === 'realisations') !== Boolean(p.nature)) {
    ctx.addIssue({ code: 'custom', message: `${p.slug} : une réalisation, et elle seule, déclare sa nature (site ou bot).` });
  }
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
    slug: 'ici-immobilier',
    rubrique: 'realisations',
    modele: 'demo',
    nature: 'site',
    titre: 'Ici Immobilier (démo)',
    angle: "Le site vitrine complet d'une agence immobilière à Pau, que l'agente met à jour elle-même depuis son espace pro.",
    statut: { code: 'production', libelle: 'En ligne · site de démonstration' },
    description:
      "Site vitrine de démonstration pour une agence immobilière à Pau : annonces, filtre par "
      + 'commune, demande d’estimation, avis, et un espace pro pour tout mettre à jour.',
    enBref: [
      { terme: "Le projet", texte: "Le site vitrine complet d'une agence immobilière à Pau, en version de démonstration (agente et annonces fictives)." },
      { terme: "Pour qui", texte: "Un indépendant ou une petite entreprise qui veut un site à son image, qu'il met à jour lui-même." },
      { terme: "Ce qu'il montre", texte: "Les annonces, le filtre par commune, la demande d'estimation, les avis, et un espace pro où l'agente modifie elle-même ses annonces et son profil." },
    ],
    arbitrages: [
      'Biens, avis et coordonnées fictifs : une démonstration, pas une vraie agence.',
      "Site non indexé par les moteurs de recherche : une démonstration n'a pas à y apparaître.",
    ],
    elements: [
      { libelle: 'Site de démonstration', valeur: 'ici-immobilier.cabalex.dev', url: 'https://ici-immobilier.cabalex.dev' },
      { libelle: 'Annonces', valeur: '12 biens fictifs', url: 'https://ici-immobilier.cabalex.dev/biens', note: 'au 15 octobre 2026' },
    ],
  },
  {
    slug: 'plumes-jumelles',
    rubrique: 'realisations',
    nature: 'site',
    titre: 'Plumes Jumelles',
    angle: "Un site d'abonnement et une boutique, livrés à deux créatrices qui n'avaient qu'une page Instagram.",
    statut: { code: 'production', libelle: 'En production depuis le 4 septembre 2026' },
    description:
      "Abonnement postal et boutique en Laravel pour deux créatrices venues d'Instagram : "
      + 'Stripe, back-office maison, mails authentifiés DKIM. En production.',
    enBref: [
      { terme: "Le client", texte: "Deux créatrices qui animent une communauté de lectrices sur Instagram." },
      { terme: "Son besoin", texte: "Lancer un abonnement (une histoire inédite envoyée par courrier chaque mois) et une boutique de papeterie, et tout gérer elles-mêmes, sans être techniciennes." },
      { terme: "Le résultat", texte: "Un site à elles, en ligne depuis le 4 septembre 2026 sur plumes-jumelles.fr. Elles gèrent seules les produits, les abonnées, les commandes et les remboursements. Les mails aux abonnées (confirmation, expédition) partent d'une adresse reconnue, pour ne pas finir en spam." },
    ],
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
    slug: 'dofintendant',
    rubrique: 'realisations',
    modele: 'produit',
    nature: 'bot',
    titre: 'DofIntendant',
    angle: "Un bot Discord gratuit pour les guildes Dofus, module par module, qui ne lit jamais le contenu des messages.",
    statut: { code: 'service', libelle: 'En service · public et gratuit' },
    description:
      'Bot Discord gratuit et modulaire pour les guildes et alliances Dofus : métiers, Almanax, '
      + 'accueil, groupes de donjon, XP. Sans accès au contenu des messages.',
    enBref: [
      { terme: "Le projet", texte: "Un bot Discord gratuit qui aide les guildes Dofus à s'organiser, module par module (métiers, Almanax, accueil des recrues, groupes de donjon, XP)." },
      { terme: "Pour qui", texte: "Les guildes et alliances Dofus, qui activent seulement les modules dont elles ont besoin." },
      { terme: "Où il en est", texte: "En service sur 3 serveurs au 15 octobre 2026, installable par n'importe quel serveur, gratuit." },
    ],
    arbitrages: [
      "Aucun accès au contenu des messages : le module XP compte qui écrit et où, jamais ce qui est écrit.",
      "Accueil des recrues sans intent privilégié : tout part du clic de la recrue.",
      'Données du serveur effacées 30 jours après le retrait du bot, pour pouvoir le réinviter sans perte.',
    ],
    elements: [
      { libelle: 'Site', valeur: 'dofintendant.cabalex.dev', url: 'https://dofintendant.cabalex.dev' },
      { libelle: 'Données', valeur: 'Politique de confidentialité', url: 'https://dofintendant.cabalex.dev/confidentialite' },
    ],
  },
  {
    slug: 'bot-legendes',
    rubrique: 'realisations',
    nature: 'bot',
    titre: 'Bot Légendes',
    angle: "Un bot Discord pensé pour qu'une panne ne fasse rien perdre et n'ouvre rien.",
    statut: { code: 'service', libelle: 'En service · démon supervisord' },
    description:
      "Bot Discord d'une alliance Dofus, conçu pour la panne : état en base, giveaways repris "
      + 'au redémarrage, tirage lu en REST, porte fermée si le bot tombe.',
    enBref: [
      { terme: "Le client", texte: "L'alliance Dofus « Faut Y Songer », quelques dizaines de membres réunis sur un serveur Discord." },
      { terme: "Son besoin", texte: "Un bot qui organise la vie du serveur (collection des Légendes des Songes, giveaways, arrivée des nouveaux membres, inscriptions aux runs), et qui ne perd rien quand il redémarre." },
      { terme: "Le résultat", texte: "En service. Une panne ou un redémarrage ne fait rien perdre : un tirage prévu pendant l'arrêt a bien lieu, les anciens boutons répondent toujours, et personne n'entre sur le serveur pendant une panne." },
    ],
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
    slug: 'patchoumio',
    rubrique: 'realisations',
    nature: 'bot',
    titre: 'Patchoumio',
    angle: "Un bot Discord qui répond aux joueurs avec des fiches rivens (prix du marché, stats à viser) et des liens de builds, géré depuis un panel web d'administration.",
    statut: { code: 'service', libelle: 'En service · serveur Discord de Patchoumio' },
    description:
      'Bot Discord d’un serveur Warframe francophone : fiches rivens au prix de warframe.market, '
      + 'liens de builds, panel Laravel. Base SQLite partagée.',
    enBref: [
      { terme: "Le client", texte: "Le youtubeur Patchoumio et le serveur Discord Warframe francophone de sa communauté." },
      { terme: "Son besoin", texte: "Que les joueurs obtiennent une réponse en tapant simplement le nom d'une arme ou d'une frame (prix du marché, stats à viser, liens de builds), et que l'équipe du serveur tienne ce contenu à jour elle-même." },
      { terme: "Le résultat", texte: "En service. Les membres autorisés modifient fiches et builds depuis un panel web, et le bot prend en compte leurs changements en 30 secondes, sans redémarrage. 420 armes couvertes au 12 octobre 2026." },
    ],
    arbitrages: [
      'Pas de commande : le bot lit le texte des messages, ce qui exige un intent privilégié, borné par salon et par longueur.',
      "Le bot n'écrit jamais : il lit la base du panel en lecture seule et la relit toutes les 30 secondes.",
      "Une seule règle d'héritage, écrite en PHP et en JavaScript, testée sur les mêmes cas.",
      'Prix lus dans l’API v1 de warframe.market, seule à exposer les enchères : une requête par seconde au plus.',
    ],
    elements: [
      { libelle: 'Données', valeur: '420 armes à riven importées', note: 'depuis warframe.market, au 12 octobre 2026' },
    ],
    sansPreuve: {
      motif: "Le dépôt est privé, et le bot ne se voit qu'en rejoignant le serveur Discord de Patchoumio : rien n'est consultable directement.",
    },
  },
  {
    slug: 'nutrifollow',
    rubrique: 'labo',
    titre: 'NutriFollow',
    angle: 'Un SaaS pour diététiciens, conçu, construit et sécurisé seul, de la base de données au serveur.',
    statut: { code: 'fonctionnel', libelle: 'Fonctionnel · migration HDS requise avant mise en service' },
    description:
      'SaaS de suivi diététique construit seul en Laravel : deux interfaces, temps réel, IA '
      + 'asynchrone, audit interne. Fonctionnel, migration HDS requise.',
    enBref: [
      { terme: "Le projet", texte: "Un logiciel en ligne pour les diététiciens indépendants : plans alimentaires, suivi des patients entre les consultations, rendez-vous, messagerie." },
      { terme: "Le besoin visé", texte: "Réunir le praticien et ses patients sur un même outil, entre les consultations." },
      { terme: "Où il en est", texte: "Fonctionnel, pas encore ouvert. Avant d'accueillir de vrais patients, il doit passer sur un hébergement certifié pour les données de santé (HDS) et compléter deux protections supplémentaires." },
    ],
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
    slug: 'dofus-switcher',
    rubrique: 'labo',
    titre: 'Dofus Switcher',
    angle: 'Un outil de bureau KDE Plasma 6 / Wayland qui intercepte la souris au niveau evdev, sans jamais toucher au jeu.',
    statut: { code: 'arret', libelle: "À l'arrêt · dernière version le 27 juin 2026" },
    description:
      'Gestion multi-comptes Dofus Retro sous KDE Plasma 6 / Wayland : grab evdev, réinjection '
      + 'uinput, aucune entrée envoyée au jeu. Python, projet à l’arrêt.',
    enBref: [
      { terme: "Le projet", texte: "Un petit outil pour passer d'une fenêtre de jeu à l'autre avec les boutons de la souris, quand on joue plusieurs comptes Dofus Retro sous Linux." },
      { terme: "Le besoin visé", texte: "Remplacer un script bricolé par une vraie application, sans jamais agir dans le jeu à la place du joueur : les règles d'Ankama l'interdisent." },
      { terme: "Où il en est", texte: "Construit pour mon usage en juin 2026, plus utilisé depuis : le projet est à l'arrêt." },
    ],
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
export const realisations = projets.filter((p) => p.rubrique === 'realisations');
export const labo = projets.filter((p) => p.rubrique === 'labo');
export const sites = realisations.filter((p) => p.nature === 'site');
export const bots = realisations.filter((p) => p.nature === 'bot');

// Numérotation et précédent/suivant restent à l'intérieur de la rubrique.
export function projetParSlug(slug: string): { projet: Projet; numero: number; total: number; precedent?: Projet; suivant?: Projet } {
  const trouve = projets.find((p) => p.slug === slug);
  if (!trouve) throw new Error(`Projet inconnu : ${slug}`);
  const liste = trouve.rubrique === 'labo' ? labo : realisations;
  const index = liste.indexOf(trouve);
  return {
    projet: trouve,
    numero: index + 1,
    total: liste.length,
    precedent: liste[index - 1],
    suivant: liste[index + 1],
  };
}
