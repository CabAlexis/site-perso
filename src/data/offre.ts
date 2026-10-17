import { z } from 'astro/zod';

/*
 * L'offre commerciale : formules, prestations à part, conditions et contact.
 * Seule source des prix pour l'accueil et /offre, vérifiée au build comme les
 * fiches projets. Tous les prix sont hors taxes ; les montants payés d'avance
 * ne sont pas saisis, ils se calculent (un mois offert sur 12 mois seulement).
 *
 * Rien ici ne doit être inventé : une condition qui n'a pas été donnée reste
 * absente, et un trou se signale dans la page avec le composant Todo.
 */

// Durées d'engagement proposées, de la plus longue (par défaut) à la plus
// courte. Toutes les formules n'ont pas toutes les durées.
export const durees = [12, 6, 3] as const;
export type Duree = (typeof durees)[number];

export const paiements = ['mensuel', 'avance'] as const;
export type Paiement = (typeof paiements)[number];

const tarif = z.object({
  mois: z.union([z.literal(12), z.literal(6), z.literal(3)]),
  prixMensuel: z.number().int().positive(),
});

export type Tarif = z.infer<typeof tarif>;

const formule = z.object({
  id: z.string().regex(/^[a-z-]+$/),
  nom: z.string().min(1),
  tarifs: z.array(tarif).min(1)
    .refine((ts) => ts.some((t) => t.mois === 12), 'Chaque formule existe en 12 mois')
    .refine((ts) => new Set(ts.map((t) => t.mois)).size === ts.length, 'Une durée en double'),
  pourQui: z.string().min(10),
  // En une ligne, ce que la formule apporte.
  accroche: z.string().min(1),
  // Temps de travail mensuel derrière les évolutions. JAMAIS affiché sur le
  // site : il sert de référence pour les CGV.
  dureeEvolutionInterne: z.string().min(1),
  // Ce que paie le client, en puces courtes, après le socle (`socleCourt`) :
  // une puce = une chose concrète. Affiché dans les cartes (accueil et /offre).
  comprend: z.array(z.string().min(1).max(100)).min(1),
  // La formule mise en avant ; les autres servent de repères. Une seule.
  recommandee: z.boolean().optional(),
  // Pour qui, en une phrase complète (affichée près des cartes sur /offre).
  pourQuiDetail: z.string().min(10).optional(),
}).transform((f) => ({
  ...f,
  // Le prix de référence (accueil, descriptions) : celui des 12 mois.
  prixMensuel: f.tarifs.find((t) => t.mois === 12)!.prixMensuel,
}));

export type Formule = z.output<typeof formule>;

export const formules: Formule[] = z.array(formule).length(3)
  .refine((fs) => fs.filter((f) => f.recommandee).length === 1, 'Une seule formule recommandée')
  .parse([
  {
    id: 'essentiel',
    nom: 'Essentiel',
    tarifs: [{ mois: 12, prixMensuel: 59 }],
    pourQui: 'Artisans, indépendants',
    accroche: 'Le site, sans souci',
    dureeEvolutionInterne: '30\u00a0min par mois',
    comprend: ['Corrections et mises à jour de contenu'],
  },
  {
    id: 'suivi',
    nom: 'Suivi',
    tarifs: [
      { mois: 12, prixMensuel: 150 },
      { mois: 6, prixMensuel: 175 },
      { mois: 3, prixMensuel: 199 },
    ],
    pourQui: 'Petites entreprises avec rendez-vous, interventions ou stock',
    accroche: 'Le site et vos outils, qui grandissent avec vous',
    dureeEvolutionInterne: '1\u00a0h\u00a030 par mois, ne se cumulent pas d’un mois sur l’autre',
    comprend: [
      'Une évolution par mois (page, champ de formulaire, export, fonction dans l’outil ou le bot)',
      'Un point mensuel',
      'Votre outil métier qui s’améliore chaque mois',
    ],
    recommandee: true,
    pourQuiDetail: 'Les petites entreprises qui gèrent chaque semaine des rendez-vous, des interventions ou du stock\u00a0: salons, garages, artisans du dépannage, commerces.',
  },
  {
    id: 'partenaire',
    nom: 'Partenaire',
    tarifs: [
      { mois: 12, prixMensuel: 500 },
      { mois: 6, prixMensuel: 575 },
      { mois: 3, prixMensuel: 650 },
    ],
    pourQui: 'PME avec des besoins numériques continus',
    accroche: 'L’accompagnement rapproché',
    dureeEvolutionInterne: 'une journée par mois, ne se cumulent pas d’un mois sur l’autre',
    comprend: [
      'Des évolutions chaque semaine',
      'Un point hebdomadaire',
      'Un outil plus complet, amélioré chaque semaine',
    ],
  },
]);

// Ce que les trois formules comprennent toutes (le socle de l'Essentiel), pour
// un site comme pour un bot, sauf mention « pour un site ».
// En minuscules : la liste se lit comme une phrase.
export const socle = [
  'hébergement',
  'nom de domaine (pour un site)',
  'jusqu’à 3\u00a0adresses mail (pour un site)',
  'maintenance et sécurité',
  'sauvegardes',
  'réponse sous 48\u00a0h ouvrées',
];

// « Compris dans toutes les formules » sur /offre : le socle, hébergement et
// sauvegardes réunis en une ligne qui dit où ils sont. La ligne « Compris »
// des cartes de l'accueil garde le socle tel quel.
const reunis = ['hébergement', 'sauvegardes'];
export const comprisOffre = [
  'hébergement et sauvegardes en Europe',
  ...socle.filter((e) => !reunis.includes(e)),
];
if (comprisOffre.length !== socle.length - reunis.length + 1) {
  throw new Error('comprisOffre : « hébergement » ou « sauvegardes » introuvable dans le socle');
}

// Options payées à l'unité, réservées à une formule (l'Essentiel). L'évolution
// a la même définition que celle de la Suivi. Le point se fait en visio ou par
// téléphone ; sa durée est affichée (seule durée du site, à la demande) et
// sert aussi de référence pour les CGV.
export const optionsUnite = {
  formule: 'essentiel',
  point: { prix: 79, duree: '45\u00a0min' },
  evolution: { prix: 119 },
};

// Le socle en une puce, en tête de « Ce que comprend votre abonnement ».
export const socleCourt = 'Hébergement, domaine, mails, sécurité, sauvegardes';

export const conditions = {
  // Engagement minimum, au total, toutes formules confondues : après une
  // formule de 3 ou 6 mois, le client passe en Essentiel jusqu'à 12 mois.
  // C'est aussi au bout de 12 mois cumulés qu'il reçoit la copie de son site.
  engagementMois: 12,
  // Seul montant facturé à la création, une fois, hors taxes, quelles que
  // soient la formule et la durée.
  miseEnService: 490,
  // Offerts sur 12 mois payés d'avance ; 6 et 3 mois d'avance : sans remise.
  moisOfferts: 1,
  preavisMois: 1,
};

// Un bot Discord suit le même modèle qu'un site : mise en service, puis l'une
// des trois formules. Ce qu'il comprend au départ, configuré pour le serveur :
export const socleBot = [
  'accueil des nouveaux membres',
  'rôles',
  'modération',
  'logs',
  'tableau de bord web',
];

export const prestations = {
  surMesure: { aPartirDe: 5000 },
};

const montant = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });

/** « 1 500 € » : espace insécable, le « HT » est ajouté par la page. */
export function euros(n: number): string {
  return `${montant.format(n)} €`;
}

export function tarifPour(f: Formule, mois: Duree): Tarif | undefined {
  return f.tarifs.find((t) => t.mois === mois);
}

/** Mois facturés quand la durée est payée d'avance. */
export function moisPayes(mois: Duree): number {
  return mois === 12 ? mois - conditions.moisOfferts : mois;
}

export function montantAvance(t: Tarif): number {
  return t.prixMensuel * moisPayes(t.mois);
}

export function prixAnnuel(f: Formule): number {
  return montantAvance(tarifPour(f, 12)!);
}

const parId = (id: string) => formules.find((f) => f.id === id)!;
const essentiel = parId('essentiel');
const partenaire = parId('partenaire');

export const formuleRecommandee = formules.find((f) => f.recommandee)!;

// [3, 6] → « 3 ou 6 ».
export const ou = (ns: number[]) => ns.join(', ').replace(/, (?=[^,]*$)/, ' ou ');
// Les durées courtes proposées, toutes formules confondues.
export const dureesCourtes = durees.filter((d) => d < 12 && formules.some((f) => tarifPour(f, d))).reverse();
const renouvelables = formules.filter((f) => f.tarifs.length > 1);
const dureeCourte = Math.min(...durees);

// Engagement au total, à afficher sous les cartes.
export const engagementTotal = `Engagement de ${conditions.engagementMois}\u00a0mois au total\u00a0: après une formule de ${ou(dureesCourtes)}\u00a0mois, votre site passe en ${essentiel.nom} jusqu’à la fin de la première année.`;

// Sous les cartes : pour qui prend souvent des options à l'unité.
export const besoinRegulier = `Besoin régulier de points ou d’évolutions\u00a0? La formule ${formuleRecommandee.nom} les inclut chaque mois.`;

// Sous les sélecteurs : la formule recommandée sur la durée la plus courte.
export const besoinPonctuel = `Un besoin ponctuel, comme un module\u00a0? Prenez ${dureeCourte}\u00a0mois de ${formuleRecommandee.nom}\u00a0: votre site reste ensuite en ${essentiel.nom}.`;

// À la fin d'un engagement de Suivi ou de Partenaire.
export const finEngagement = `Sans renouvellement, passage en ${essentiel.nom}, à ${euros(essentiel.prixMensuel)}\u00a0HT par mois\u00a0: votre site et votre outil restent en ligne et maintenus. Vous pouvez renouveler la ${renouvelables.map((f) => f.nom).join(' ou la ')} pour ${ou(durees.filter((d) => renouvelables.every((f) => tarifPour(f, d))).reverse())}\u00a0mois à tout moment.`;

// Ce qui dépasse le volume mensuel de la formule recommandée.
export const auDelaRecommandee = `Au-delà d’une évolution par mois, le travail fait l’objet d’un devis, comptant ou étalé, ou d’un passage à la formule ${partenaire.nom}.`;

export const contact = {
  email: 'alexis@cabalex.dev',
  // Objet pré-rempli du mail ouvert par l'appel à l'action.
  mailto: `mailto:alexis@cabalex.dev?subject=${encodeURIComponent('Mon projet')}`,
  mailtoDevis: `mailto:alexis@cabalex.dev?subject=${encodeURIComponent('Demande de devis')}`,
  zone: 'Pau et alentours. À distance : toute la France.',
};

/*
 * Modules sur mesure : des EXEMPLES de ce que je peux développer, pas des
 * réalisations. Aucun client, aucun chiffre ici.
 */
export const modules = z.array(z.object({
  titre: z.string().min(1),
  texte: z.string().min(20),
  // Assez simple pour se construire avec la formule recommandée : première
  // version à la mise en service, puis améliorations chaque mois.
  avecFormuleRecommandee: z.boolean().optional(),
  // Ancre (#module-…) pour y renvoyer depuis la page.
  ancre: z.string().regex(/^[a-z-]+$/).optional(),
})).min(1).max(3).parse([
  {
    titre: 'Planning pour les métiers à domicile',
    ancre: 'planning',
    texte: 'Les temps de trajet sont pris en compte et les rendez-vous regroupés par secteur, pour moins rouler et faire plus d’interventions dans la journée.',
    avecFormuleRecommandee: true,
  },
  {
    titre: 'Prise de rendez-vous en ligne',
    texte: 'Vos clients réservent un créneau libre, vous recevez la demande, et des rappels partent automatiquement par e-mail.',
    avecFormuleRecommandee: true,
  },
  {
    titre: 'Demande de devis guidée',
    texte: 'Le client décrit son besoin étape par étape, photos comprises, et vous recevez une demande complète.',
  },
]);

// Paiement d'un module, sur devis : comptant à la livraison, ou étalé avec
// l'abonnement (acompte à la commande, puis le reste sur quelques mois).
export const paiementModule = {
  acomptePourcent: 30,
  etalementMoisMax: 12,
};
