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

## 2026-10-31 — Référence PLUSDE et accueil resserré

- **Référence d'avant l'indépendance (validée).** PLUSDE, client d'Outlined, où l'utilisateur était développeur web de novembre 2023 à juin 2026 : données dans `references.ts`, composant `Reference`, même format que les projets (deux volets : plateforme, applications mobiles). Texte seul, sans logo (pas d'autorisation), lien vers plusde.com. Les chiffres (plus de 1 200 CSE, plus d'un million d'utilisateurs) sont attribués à plusde.com (vérifiés sur le site le 2026-10-31), jamais présentés comme un résultat.
- **Phrase de parallèle (validée).** « …ce que j'ai fait pour PLUSDE, client de mon employeur, de 2023 à 2026. » Écarté : « pendant deux ans et demi », inexact vu la reprise progressive du projet.
- **Lignes « Le besoin » de PLUSDE.** Déduites des faits fournis, validées telles quelles par l'utilisateur.
- **Emplacement.** PLUSDE ouvre la section « Réalisations » de l'accueil (étiquette « Avant de me lancer », filet rouge), juste après l'appel à l'action des formules. Écarté : une section séparée avant ou après « Réalisations ».
- **Accueil resserré.** L'accueil montre trois projets : PLUSDE, Plumes Jumelles, Ici Immobilier (champ `accueil` de `projets.ts`). Les bots Discord et le labo ne sont que sur `/tous-les-projets`. Hauteur de l'accueil à 375 px : 15 126 → environ 14 000 px.
- **URL `/tous-les-projets`.** Écarté : `/projets`, à cause du dossier d'images `public/projets/` (risque de conflit côté serveur, configuration Nginx absente du dépôt).
- **Ordre des fiches.** Plumes Jumelles (client réel) passe avant Ici Immobilier (démo) : sa page devient « 01 / 05 ». Les pages projets renvoient vers « Tous les projets » au lieu de l'accueil.
- **Plumes Jumelles (validé).** « ma première référence client livrée depuis que je suis à mon compte ».
- **Menu (2026-10-31).** « Projets » plutôt que « Réalisations » : le libellé reprend le titre de la page d'arrivée (« Tous les projets »), qui contient aussi le labo et la référence d'avant l'indépendance. Ordre Offre · Projets · Contact. L'ancienne entrée « Réalisations » vers /#realisations disparaît. Page courante marquée par aria-current (rouge, soulignée), valable pour toutes les entrées du menu.
