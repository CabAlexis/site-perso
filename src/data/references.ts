import { z } from 'astro/zod';

/*
 * Références d'avant mon indépendance : du travail fait comme salarié, pour le
 * client de mon employeur. Même lecture que les projets (pour qui, le besoin,
 * ce que j'ai fait, ce que ça change, puis les détails techniques repliés),
 * mais sans page à part : un lien vers le site du client.
 *
 * Rien ici ne doit être inventé, et aucun chiffre de résultat n'est donné.
 * Les chiffres du client sont les siens, cités comme tels (« selon … »).
 * Pas de logo : aucune autorisation pour les logos du client ni de
 * l'employeur.
 */

const resume = z.object({
  pourQui: z.string().min(10).max(180),
  besoin: z.string().min(10).max(180),
  fait: z.string().min(10).max(180),
  change: z.string().min(10).max(180),
});

const reference = z.object({
  titre: z.string().min(1),
  site: z.object({ libelle: z.string().min(1), url: z.url() }),
  // Employeur et période, en une ligne.
  cadre: z.string().min(10),
  // Le parallèle avec l'offre d'aujourd'hui, en une phrase.
  parallele: z.string().min(20),
  contexte: z.string().min(20),
  volets: z.array(z.object({
    titre: z.string().min(1),
    resume,
    technique: z.array(z.string().min(2)).min(1),
  })).min(1).max(2),
});

export type Reference = z.infer<typeof reference>;

export const references: Reference[] = z.array(reference).parse([
  {
    titre: 'PLUSDE',
    site: { libelle: 'plusde.com', url: 'https://www.plusde.com' },
    cadre: 'Développeur web chez Outlined, de novembre 2023 à juin 2026',
    parallele: 'Un interlocuteur unique qui fait évoluer votre outil dans la durée : c’est ce que je propose aujourd’hui, et ce que j’ai fait pour PLUSDE, client de mon employeur, de 2023 à 2026.',
    contexte: 'PLUSDE, client d’Outlined, est une plateforme de loisirs numériques et de culture pour les CSE et leurs salariés : plus de 1 200 CSE clients et plus d’un million d’utilisateurs, selon plusde.com. J’ai repris le projet progressivement, jusqu’à le gérer entièrement, seul, en lien direct avec le client.',
    volets: [
      {
        titre: 'La plateforme',
        resume: {
          pourQui: 'Les équipes de PLUSDE et les CSE qui utilisent la plateforme.',
          besoin: 'Simplifier le travail quotidien des administrateurs et l’usage de l’espace CSE.',
          fait: 'La refonte complète de l’espace de gestion, des imports de données facilités et un espace CSE plus simple à utiliser.',
          change: 'Du temps gagné pour les équipes du client, et leur confiance dans l’outil.',
        },
        technique: ['Laravel', 'back-office migré de Backpack vers Filament'],
      },
      {
        titre: 'Les applications mobiles',
        resume: {
          pourQui: 'Le même client, pour deux applications : celle de PLUSDE et une autre de ses applications.',
          besoin: 'Mettre à jour ses deux applications sans y passer trop de temps.',
          fait: 'L’automatisation des mises à jour et des publications sur l’App Store et Google Play.',
          change: 'Des mises à jour plus fréquentes, moins de temps passé, et un client plus serein sur la gestion de ses applications.',
        },
        technique: ['applications en Dart (Flutter)', 'publication automatisée avec Fastlane et GitHub Actions'],
      },
    ],
  },
]);
