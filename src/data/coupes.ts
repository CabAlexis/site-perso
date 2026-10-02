import type { Noeud, Lien } from '../components/Coupe.astro';

/*
 * Données des coupes, partagées par chaque page projet (coupe complète) et par
 * l'accueil (vignettes). Coordonnées dans un repère de 360 unités de large.
 */

export interface DonneesCoupe {
  titre: string;
  resume: string;
  hauteur: number;
  cartouche: [string, string];
  noeuds: Noeud[];
  liens: Lien[];
}

/* Coupe de la façon de travailler, pour l'accueil (section « Comment je travaille »). */
export const boucle: DonneesCoupe = {
  titre: 'Coupe de la boucle de travail avec un client',
  resume: "Chaque semaine, un point avec le client permet de noter ses idées et ses besoins. Ils sont traités en adaptant ou en combinant ce qui existe déjà, dans des limites posées avant d'écrire le code. La livraison montre l'état réel, et quand quelque chose casse, la cause est cherchée. Puis la boucle revient au client.",
  hauteur: 420,
  cartouche: ['Boucle · Comment je travaille', 'Hebdomadaire'],
  noeuds: [
    { x: 20, y: 14, l: 150, h: 56, titre: 'Client', lignes: ['idées, besoins'], ton: 'externe', etape: 1 },
    { x: 190, y: 14, l: 150, h: 56, titre: 'Point hebdomadaire', lignes: ['besoins notés'], etape: 1 },
    { x: 20, y: 110, l: 320, h: 72, titre: "Adapter ou combiner l'existant", lignes: ['connaissance du produit', 'et du code'], etape: 2 },
    { x: 20, y: 222, l: 150, h: 72, titre: 'Limites', lignes: ['posées avant', "d'écrire le code"], ton: 'contrainte', etape: 4 },
    { x: 190, y: 222, l: 150, h: 72, titre: 'Livraison', lignes: ['état réel,', 'dit tel quel'], etape: 3 },
    { x: 190, y: 334, l: 150, h: 72, titre: 'Quand ça casse', lignes: ['cause cherchée,', 'pas contournée'], etape: 5 },
  ],
  liens: [
    { points: [[170, 42], [190, 42]], etape: 1 },
    { points: [[265, 70], [265, 110]], etape: 2 },
    { points: [[95, 182], [95, 222]], etape: 4 },
    { points: [[170, 258], [190, 258]], etape: 3 },
    { points: [[265, 294], [265, 334]], etape: 5, tirets: true },
    { points: [[215, 294], [215, 314], [8, 314], [8, 42], [20, 42]], etape: 1, flux: true, etiquette: { x: 18, y: 334, texte: 'chaque semaine' } },
  ],
};

export const coupes: Record<string, DonneesCoupe> = {
  'plumes-jumelles': {
    titre: "Coupe du parcours d'une abonnée, d'Instagram à la boîte aux lettres",
    resume: "L'audience vient d'Instagram vers le site Laravel, qui gère comptes, abonnements et boutique. Le paiement passe par Stripe Checkout, dont les webhooks mettent à jour l'état local. Les créatrices pilotent commandes et abonnées dans un back-office dont elles exportent les adresses pour l'envoi postal. Les mails transactionnels partent par le SMTP de Brevo depuis un domaine authentifié DKIM.",
    hauteur: 535,
    cartouche: ['Coupe · Plumes Jumelles', 'Laravel 13'],
    noeuds: [
      { x: 20, y: 14, l: 200, h: 56, titre: 'Instagram', lignes: ['audience non possédée'], ton: 'externe', etape: 1 },
      { x: 20, y: 110, l: 320, h: 72, titre: 'plumes-jumelles.fr · Laravel 13', lignes: ['abonnement, boutique, comptes'], etape: 1 },
      { x: 20, y: 222, l: 150, h: 88, titre: 'Back-office', lignes: ['commandes, stock,', 'univers, abonnées'], etape: 4 },
      { x: 190, y: 222, l: 150, h: 72, titre: 'Stripe Checkout', lignes: ['prix de référence', 'webhooks'], ton: 'externe', etape: 3 },
      { x: 20, y: 350, l: 150, h: 56, titre: 'Export CSV', lignes: ['adresses'], etape: 4 },
      { x: 190, y: 334, l: 150, h: 72, titre: 'SMTP Brevo', lignes: ['domaine signé', 'DKIM'], etape: 2 },
      { x: 20, y: 446, l: 150, h: 56, titre: 'Courrier', lignes: ['goodies + histoire'], ton: 'externe', etape: 4 },
      { x: 190, y: 446, l: 150, h: 72, titre: "Boîte de l'abonnée", lignes: ['confirmation,', 'expédition'], ton: 'externe', etape: 2 },
    ],
    liens: [
      { points: [[95, 70], [95, 110]], etape: 1 },
      { points: [[95, 182], [95, 222]], etape: 4 },
      { points: [[265, 182], [265, 222]], etape: 3 },
      { points: [[340, 258], [352, 258], [352, 150], [340, 150]], etape: 3 },
      { points: [[95, 310], [95, 350]], etape: 4 },
      { points: [[95, 406], [95, 446]], etape: 4 },
      { points: [[170, 266], [180, 266], [180, 370], [190, 370]], etape: 2, etiquette: { x: 188, y: 324, texte: '« Expédiée »' } },
      { points: [[265, 406], [265, 446]], etape: 2 },
    ],
  },
  'nutrifollow': {
    titre: "Coupe de l'application et de ses frontières",
    resume: "Praticien sur ordinateur et patient sur téléphone utilisent la même application Laravel servie par Inertia. Le contrôleur des patients et une portée globale par cabinet isolent les données. Reverb pousse le chat et le journal en temps réel. Les demandes d'IA passent par une file Redis vers Groq. Trois conditions bloquent l'accueil de patients réels : hébergement HDS, pseudonymisation avant l'appel au service d'inférence, chiffrement étendu.",
    hauteur: 550,
    cartouche: ['Coupe · NutriFollow', 'Laravel 13'],
    noeuds: [
      { x: 20, y: 14, l: 150, h: 56, titre: 'Praticien', lignes: ['ordinateur'], ton: 'externe', etape: 3 },
      { x: 190, y: 14, l: 150, h: 56, titre: 'Patient', lignes: ['PWA, téléphone'], ton: 'externe', etape: 3 },
      { x: 20, y: 110, l: 320, h: 72, titre: 'Laravel 13 · Inertia / Vue', lignes: ['une application, deux interfaces', "pas d'API REST séparée"], etape: 3 },
      { x: 20, y: 222, l: 150, h: 88, titre: 'PatientController', lignes: ['e-mail unique,', 'verrouillé après', 'activation'], etape: 1 },
      { x: 190, y: 222, l: 150, h: 72, titre: 'Reverb', lignes: ['chat, journal', 'en direct'], etape: 3 },
      { x: 190, y: 334, l: 150, h: 72, titre: 'File Redis', lignes: ['jobs IA → Groq', 'JSON validé'], etape: 4 },
      { x: 20, y: 350, l: 150, h: 56, titre: 'MySQL', lignes: ['portée par cabinet'], etape: 1 },
      { x: 20, y: 452, l: 320, h: 72, titre: 'Mise en service', lignes: ['HDS, pseudonymisation, chiffrement :', 'trois conditions avant patients réels'], ton: 'contrainte', etape: 2 },
    ],
    liens: [
      { points: [[95, 70], [95, 110]], etape: 3 },
      { points: [[265, 70], [265, 110]], etape: 3 },
      { points: [[95, 182], [95, 222]], etape: 1 },
      { points: [[265, 182], [265, 222]], etape: 3 },
      { points: [[95, 310], [95, 350]], etape: 1 },
      { points: [[340, 160], [352, 160], [352, 370], [340, 370]], etape: 4 },
      { points: [[180, 406], [180, 452]], etape: 2, fleche: false, tirets: true },
    ],
  },
  'bot-legendes': {
    titre: "Coupe de ce qui survit à un arrêt du bot",
    resume: "Le bot tourne comme démon supervisord, lancé au démarrage de la machine et relancé s'il s'arrête. Tout l'état utile est dans une base SQLite. Au démarrage, il replanifie les giveaways et tire ceux dont l'échéance est passée. Au tirage, il lit les réactions via l'API REST de Discord. La porte d'entrée du serveur ne dépend pas de lui : elle est verrouillée par les permissions Discord.",
    hauteur: 450,
    cartouche: ['Coupe · Bot Légendes', 'discord.js · SQLite'],
    noeuds: [
      { x: 20, y: 14, l: 320, h: 56, titre: 'Discord', lignes: ['passerelle (événements) · API REST'], ton: 'externe' },
      { x: 20, y: 118, l: 320, h: 180, titre: 'Démon supervisord (Forge)', lignes: ['autostart · autorestart'], etape: 2 },
      { x: 36, y: 180, l: 138, h: 102, titre: 'Au démarrage', lignes: ['giveaways', 'replanifiés ;', 'échéance passée', 'tirée aussitôt'], etape: 2 },
      { x: 188, y: 180, l: 138, h: 102, titre: 'Au tirage', lignes: ['réactions lues', 'en REST, par', 'pages de 100'], etape: 3 },
      { x: 20, y: 340, l: 160, h: 72, titre: 'SQLite · WAL', lignes: ['état durable', 'aucun état en RAM'], etape: 1 },
      { x: 195, y: 340, l: 150, h: 96, titre: "Porte d'entrée", lignes: ['verrou dans les', 'permissions ;', 'bot en panne :', 'serveur fermé'], ton: 'contrainte', etape: 4 },
    ],
    liens: [
      { points: [[60, 70], [60, 118]], etiquette: { x: 70, y: 99, texte: "événements" } },
      { points: [[257, 180], [257, 70]], etape: 3, etiquette: { x: 247, y: 99, texte: 'GET réactions', ancre: 'end' } },
      { points: [[100, 298], [100, 340]], etape: 1, etiquette: { x: 110, y: 324, texte: 'synchrone' } },
    ],
  },
  'dofus-switcher': {
    titre: "Coupe du chemin d'un clic sur un bouton latéral",
    resume: "La souris physique est capturée en exclusivité via evdev. Une boucle relaie tous ses événements vers un périphérique virtuel uinput que KWin voit comme une souris ordinaire, sauf les boutons associés à une action. Ceux-ci déclenchent le cycle, qui lit la fenêtre active et demande à kdotool d'activer la suivante. Aucune entrée n'est jamais envoyée à une fenêtre Dofus.",
    hauteur: 520,
    cartouche: ['Coupe · Dofus Switcher', 'v0.7.2'],
    noeuds: [
      { x: 20, y: 14, l: 200, h: 56, titre: 'Souris physique', lignes: ['/dev/input/eventN'], ton: 'externe', etape: 2 },
      { x: 20, y: 108, l: 250, h: 72, titre: 'Boucle de relais', lignes: ['select() · timeout 0,1 s', 'boutons bindés retirés'], etape: 2 },
      { x: 20, y: 228, l: 155, h: 72, titre: 'Sink uinput', lignes: ['capacités copiées', 'depuis la souris'], etape: 2 },
      { x: 20, y: 340, l: 155, h: 56, titre: 'KWin', lignes: ['souris ordinaire'], ton: 'externe', etape: 2 },
      { x: 190, y: 228, l: 155, h: 72, titre: 'Cycle sans état', lignes: ['active → voisine', 'relit ×2 · 15 ms'], etape: 3 },
      { x: 190, y: 340, l: 155, h: 56, titre: 'kdotool', lignes: ['windowactivate'], ton: 'externe', etape: 1 },
      { x: 190, y: 436, l: 155, h: 56, titre: 'Fenêtre Dofus', lignes: ['au premier plan'], ton: 'externe', etape: 1 },
      { x: 20, y: 436, l: 155, h: 72, titre: 'CGU Ankama', lignes: ['aucune entrée', 'vers le jeu'], ton: 'contrainte', etape: 1 },
    ],
    liens: [
      { points: [[120, 70], [120, 108]], etape: 2, etiquette: { x: 130, y: 93, texte: 'EVIOCGRAB, exclusif' } },
      { points: [[80, 180], [80, 228]], etape: 2, etiquette: { x: 90, y: 209, texte: 'le reste' } },
      { points: [[97, 300], [97, 340]], etape: 2 },
      { points: [[250, 180], [250, 228]], etape: 3, etiquette: { x: 260, y: 209, texte: 'MB4 / MB5' } },
      { points: [[267, 300], [267, 340]], etape: 1 },
      { points: [[267, 396], [267, 436]], etape: 1 },
      { points: [[175, 472], [190, 472]], etape: 1, fleche: false, tirets: true },
    ],
  },
};
