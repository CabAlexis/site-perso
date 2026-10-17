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
  // Nom de cette durée, s'il en a un (« Sprint » pour 3 mois).
  nom: z.string().min(1).optional(),
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
  // Ce que le client obtient chaque mois, sans durée en heures.
  evolutions: z.string().min(1),
  // Temps de travail mensuel derrière les évolutions. JAMAIS affiché sur le
  // site : il sert de référence pour les CGV.
  dureeEvolutionInterne: z.string().min(1),
  // Outil métier (planning, rendez-vous…) : ce que la formule permet.
  outil: z.string().min(1),
  point: z.string().min(1),
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
    evolutions: 'Corrections et petites mises à jour de contenu',
    dureeEvolutionInterne: '30\u00a0min par mois',
    outil: 'Sur devis, comptant ou étalé',
    point: 'Pas de point programmé',
  },
  {
    id: 'suivi',
    nom: 'Suivi',
    tarifs: [
      { mois: 12, prixMensuel: 150 },
      { mois: 6, prixMensuel: 175 },
    ],
    pourQui: 'Petites entreprises avec rendez-vous, interventions ou stock',
    accroche: 'Le site et vos outils, qui grandissent avec vous',
    evolutions: 'Une évolution par mois\u00a0: une page ou une section, un champ dans un formulaire, un export, une fonction simple dans l’outil ou le bot',
    dureeEvolutionInterne: '1\u00a0h\u00a030 par mois, ne se cumulent pas d’un mois sur l’autre',
    outil: 'Planning, prise de rendez-vous, suivi de clients, petit back-office\u00a0: une première version à la mise en service, puis des améliorations chaque mois',
    point: 'Un point par mois',
    recommandee: true,
    pourQuiDetail: 'Les petites entreprises qui gèrent chaque semaine des rendez-vous, des interventions ou du stock\u00a0: salons, garages, artisans du dépannage, commerces.',
  },
  {
    id: 'partenaire',
    nom: 'Partenaire',
    tarifs: [
      { mois: 12, prixMensuel: 500 },
      { mois: 6, prixMensuel: 575 },
      { mois: 3, prixMensuel: 650, nom: 'Sprint' },
    ],
    pourQui: 'PME avec des besoins numériques continus',
    accroche: 'L’accompagnement rapproché',
    evolutions: 'Des évolutions chaque semaine',
    dureeEvolutionInterne: 'une journée par mois, ne se cumulent pas d’un mois sur l’autre',
    outil: 'Un outil plus complet, amélioré chaque semaine',
    point: 'Un point par semaine',
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
const dureesCourtes = durees.filter((d) => d < 12 && formules.some((f) => tarifPour(f, d))).reverse();
const renouvelables = formules.filter((f) => f.tarifs.length > 1);

// Engagement au total, à afficher sous les cartes.
export const engagementTotal = `Engagement de ${conditions.engagementMois}\u00a0mois au total\u00a0: après une formule de ${ou(dureesCourtes)}\u00a0mois, votre site passe en ${essentiel.nom} jusqu’à la fin de la première année.`;

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
