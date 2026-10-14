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
  // Temps de modifications ou d'évolutions compris chaque mois.
  evolutions: z.string().min(1),
  point: z.string().min(1),
});

export type Formule = z.infer<typeof formule>;

export const formules: Formule[] = z.array(formule).length(3).parse([
  {
    id: 'essentiel',
    nom: 'Essentiel',
    prixMensuel: 39,
    pourQui: 'Artisans, indépendants',
    evolutions: 'Petites modifications, environ 30\u00a0min par mois',
    point: 'Pas de point programmé',
  },
  {
    id: 'suivi',
    nom: 'Suivi',
    prixMensuel: 150,
    pourQui: 'Commerces, TPE dont les besoins évoluent',
    evolutions: 'Environ 1\u00a0h\u00a030 d’évolutions par mois',
    point: 'Un point par mois',
  },
  {
    id: 'partenaire',
    nom: 'Partenaire',
    prixMensuel: 500,
    pourQui: 'PME avec des besoins numériques continus',
    evolutions: 'Environ une journée d’évolutions par mois',
    point: 'Un point par semaine',
  },
]);

// Ce que les trois formules comprennent toutes (le socle de l'Essentiel).
// En minuscules : la liste se lit comme une phrase.
export const socle = [
  'hébergement',
  'nom de domaine',
  'jusqu’à 3\u00a0adresses mail',
  'maintenance et sécurité',
  'sauvegardes',
  'réponse sous 48\u00a0h ouvrées',
];

export const conditions = {
  engagementMois: 12,
  // Seul montant facturé à la création, une fois, hors taxes.
  miseEnService: 300,
  moisOfferts: 1,
};

export const prestations = {
  bot: { aPartirDe: 1500, mensuel: 49 },
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

export const contact = {
  email: 'alexis@cabalex.dev',
  // Objet pré-rempli du mail ouvert par l'appel à l'action.
  mailto: `mailto:alexis@cabalex.dev?subject=${encodeURIComponent('Mon projet')}`,
  zone: 'Pau et alentours, et à distance partout en France',
};
