import { z } from 'astro/zod';

/*
 * L'offre commerciale : formules, prestations à part, conditions et contact.
 * Seule source des prix pour l'accueil et /offre, vérifiée au build comme les
 * fiches projets. Tous les prix sont hors taxes ; le prix annuel n'est pas
 * saisi, il se calcule (un mois offert).
 *
 * Rien ici ne doit être inventé : une condition qui n'a pas été donnée reste
 * absente, et un trou se signale dans la page avec le composant Todo.
 */

const formule = z.object({
  id: z.string().regex(/^[a-z-]+$/),
  nom: z.string().min(1),
  prixMensuel: z.number().int().positive(),
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
});

export type Formule = z.infer<typeof formule>;

export const formules: Formule[] = z.array(formule).length(3)
  .refine((fs) => fs.filter((f) => f.recommandee).length === 1, 'Une seule formule recommandée')
  .parse([
  {
    id: 'essentiel',
    nom: 'Essentiel',
    prixMensuel: 59,
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
    prixMensuel: 150,
    pourQui: 'Commerces, TPE dont les besoins évoluent',
    accroche: 'Le site et vos outils, qui grandissent avec vous',
    evolutions: 'Une évolution par mois\u00a0: une page ou une section, un champ dans un formulaire, un export, une fonction simple dans l’outil ou le bot',
    dureeEvolutionInterne: '1\u00a0h\u00a030 par mois, non reportable',
    outil: 'Planning, prise de rendez-vous, suivi de clients, petit back-office\u00a0: une première version à la mise en service, puis des améliorations chaque mois',
    point: 'Un point par mois',
    recommandee: true,
  },
  {
    id: 'partenaire',
    nom: 'Partenaire',
    prixMensuel: 500,
    pourQui: 'PME avec des besoins numériques continus',
    accroche: 'L’accompagnement rapproché',
    evolutions: 'Des évolutions chaque semaine',
    dureeEvolutionInterne: 'une journée par mois, non reportable',
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
  engagementMois: 12,
  // Seul montant facturé à la création, une fois, hors taxes.
  miseEnService: 490,
  moisOfferts: 1,
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

export function prixAnnuel(f: Formule): number {
  return f.prixMensuel * (12 - conditions.moisOfferts);
}

const parId = (id: string) => formules.find((f) => f.id === id)!;
const essentiel = parId('essentiel');
const partenaire = parId('partenaire');

export const formuleRecommandee = formules.find((f) => f.recommandee)!;

// Après les 12 mois d'engagement de la formule recommandée.
export const deuxiemeAnnee = `Après la première année de ${formuleRecommandee.nom}, vous choisissez\u00a0: rester à ${euros(formuleRecommandee.prixMensuel)}\u00a0HT par mois avec les évolutions, ou passer à l’${essentiel.nom}, ${euros(essentiel.prixMensuel)}\u00a0HT par mois, pour le suivi seul.`;

// Ce qui dépasse le volume mensuel de la formule recommandée.
export const auDelaRecommandee = `Au-delà d’une évolution par mois, le travail fait l’objet d’un devis, comptant ou étalé, ou d’un passage à la formule ${partenaire.nom}.`;

export const contact = {
  email: 'alexis@cabalex.dev',
  // Objet pré-rempli du mail ouvert par l'appel à l'action.
  mailto: `mailto:alexis@cabalex.dev?subject=${encodeURIComponent('Mon projet')}`,
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
})).min(1).parse([
  {
    titre: 'Planning pour les métiers à domicile',
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
  {
    titre: 'Espace client',
    texte: 'Devis, factures et documents au même endroit, accessibles par vos clients.',
  },
  {
    titre: 'Catalogue ou réservation',
    texte: 'Produits, prestations ou matériel, avec leurs disponibilités.',
  },
  {
    titre: 'Un outil propre à votre activité',
    texte: 'Un besoin qui n’entre dans aucune case : on en parle, et je développe l’outil qui y répond.',
  },
]);

// Paiement d'un module, sur devis : comptant à la livraison, ou étalé avec
// l'abonnement (acompte à la commande, puis le reste sur quelques mois).
export const paiementModule = {
  acomptePourcent: 30,
  etalementMoisMax: 12,
};
