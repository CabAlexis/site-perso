# Décisions

Une entrée par décision : date, contexte, choix, alternative écartée.

## 2026-10-31 — Recentrage « outils » et échange humain

- **Accroche de l'accueil.** Contexte : le site parlait trop « site ». Choix : « D'un besoin, / je crée un outil. » sur deux lignes ; le site devient un outil parmi d'autres. Écarté : trois lignes (« je crée » isolé au milieu cassait le rythme).
- **Ordre des puces des cartes.** Choix : pour la Suivi et la Partenaire, l'outil d'abord et le socle (hébergement, domaine…) en dernier ; l'Essentiel garde le socle en tête (champ `socleEnTete`). Écarté : même ordre pour les trois cartes, qui aurait modifié l'Essentiel.
- **Première version de l'outil.** Choix : rattachée à la création offerte (« avec la première version d'un outil simple »), pas aux puces de l'abonnement. Écarté : une puce « dès la mise en service » dans la carte Suivi.
- **Puce téléphone (validée).** « Utilisable sur ordinateur et sur téléphone, comme une application, sans passer par l'App Store ni Google Play. » Le terme « application web installable (PWA) » et le détail iPhone (menu Partager) sont seulement dans la FAQ de /offre.
- **Exemples d'outils.** Choix : cinq exemples (planning, rendez-vous, suivi de clients, application terrain, site vitrine), au format besoin → outil → ce que ça change, partagés par l'accueil et /offre (composant `Exemples`). Cadres : planning, rendez-vous et suivi de clients avec la Suivi ; application terrain sur devis ; site vitrine dans toutes les formules (validé). « Demande de devis guidée » retirée. Suivi de clients sans « devis » dans la fiche (validé).
- **Ancres.** `#module-planning` devient `#exemple-planning` ; `#modules` est gardé sur le bloc « Outils sur mesure » de /offre.
- **Appels à l'action.** « Parlons de votre besoin » partout (au lieu de « Demander un devis » et « Parlons de votre projet ») ; un seul lien mail, objet « Mon besoin ».
- **Qui je suis : pas de photo (décision définitive de l'utilisateur).** Choix : un monogramme « AC » dessiné comme une vignette de la table à dessin (quadrillage, filet d'encre, C en rouge), dans la marge sur grand écran, au-dessus du texte sur mobile. Aucun TODO, aucun blocage du build. Écarté : un emplacement photo avec TODO.
- **Comparaison de l'accueil.** L'étiquette « Site à faire soi-même » devient « Logiciel tout fait ». Écarté : « Logiciel ou site à faire soi-même », trop lourd.

### [À VALIDER] Copie en fin d'engagement, pour un outil

La phrase actuelle (« après 12 mois cumulés, vous recevez une copie complète et utilisable de votre site ») **n'est pas modifiée**. Règle envisagée par l'utilisateur, à valider avec son avocat avant publication :
- pour un site : copie complète, comme aujourd'hui ;
- pour un outil : les données appartiennent au client et sont exportables à tout moment ; le code reste la propriété du prestataire (cession possible, à part).

## 2026-10-31 — Projets de l'accueil sans jargon

- **Format (validé).** Sur l'accueil, chaque projet se lit en quatre lignes : pour qui, le besoin, ce que j'ai fait, ce que ça change (champ `resume` de `projets.ts`, qui remplace `angle`). Aucun terme technique ; « bot », « Discord » et « Linux » gardés (noms de l'offre ou de contexte).
- **Détails techniques.** La stack, vérifiée dans les dépôts frères, va dans un `<details>` replié « Détails techniques » (champ `technique`), placé après le lien de la carte (un élément interactif ne va pas dans un lien). Écarté : le garder dans la carte.
- **Statuts.** Bot Légendes : « démon supervisord » → « relancé automatiquement en cas de panne » ; NutriFollow : « migration HDS requise avant mise en service » → « pas encore ouvert » (le HDS reste dans les détails et sur la page).
- **Longueur des lignes.** Limite du schéma à 180 caractères pour garder mot pour mot les textes validés. Écarté : les raccourcir à 120.
- **« logs ».** Devient « journal du serveur » (registre chronologique ; « historique » écarté). « tableau de bord web » retiré de `socleBot` : la phrase de /offre le cite déjà juste après.
- **Hors périmètre.** Les meta descriptions et le contenu des pages projets restent techniques par endroits.
