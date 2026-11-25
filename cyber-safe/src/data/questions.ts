export type Question = {
  question: string;
  reponses: string[];
  bonneReponse: number;
  explication: string;
};

export const questions = [
  {
    question: "C'est quoi la cybersécurité ?",
    reponses: [
      "Protéger les appareils, les réseaux et les données contre les cybermenaces",
      "Créer des sites web et des applications",
      "Utiliser Internet sans publicité",
      "Réparer les ordinateurs en panne",
    ],
    bonneReponse: 0,
    explication:
      "La cybersécurité regroupe toutes les pratiques et les technologies qui permettent de protéger les systèmes informatiques, les réseaux et les données contre les attaques.",
  },
  {
    question: "Tu reçois un SMS indiquant : « Votre colis est bloqué. Cliquez ici pour payer 1,99 € ». Que fais-tu ?",
    reponses: [
      "Je clique rapidement pour récupérer mon colis",
      "Je réponds au SMS pour demander des explications",
      "Je vérifie directement sur le site officiel du transporteur",
      "Je transfère le SMS à tous mes amis",
    ],
    bonneReponse: 2,
    explication:
      "Il peut s'agir d'une tentative de phishing. Les cybercriminels utilisent de faux messages pour voler tes informations personnelles ou bancaires. Ne clique jamais sur un lien suspect.",
  },
  {
    question: "Quelles sont les bonnes pratiques pour créer un mot de passe sécurisé ?",
    reponses: [
      "Utiliser un mot de passe long et difficile à deviner",
      "Utiliser le même mot de passe partout",
      "Activer la double authentification",
      "Utiliser sa date de naissance",
    ],
    bonneReponse: [0, 2],
    explication:
      "Un mot de passe doit être long, unique et difficile à deviner. La double authentification ajoute une protection supplémentaire à tes comptes.",
  },
  {
    question: "Un compte Instagram privé est-il totalement protégé contre le piratage ?",
    reponses: [
      "Vrai",
      "Faux",
    ],
    bonneReponse: 1,
    explication:
      "Un compte privé limite les personnes qui peuvent voir tes publications, mais il ne protège pas contre le vol de mot de passe ou le piratage du compte.",
  },
  {
    question: "Qu'est-ce que le phishing ?",
    reponses: [
      "Une technique pour améliorer la vitesse d'Internet",
      "Une méthode pour tromper quelqu'un afin de voler ses informations",
      "Un logiciel pour protéger les ordinateurs",
      "Une méthode pour sauvegarder ses photos",
    ],
    bonneReponse: 1,
    explication:
      "Le phishing consiste à se faire passer pour une personne ou un organisme de confiance afin de récupérer des informations personnelles, des mots de passe ou des coordonnées bancaires.",
  },
  {
    question: "Tu trouves une clé USB dans la cour de ton lycée. Quel est le meilleur réflexe ?",
    reponses: [
      "La brancher sur ton ordinateur pour découvrir son contenu",
      "La donner à un camarade pour qu'il la teste",
      "La remettre à un responsable du lycée sans la brancher",
      "La garder pour toi",
    ],
    bonneReponse: 2,
    explication:
      "Une clé USB inconnue peut contenir un programme malveillant. Ne la branche jamais sur ton ordinateur : remets-la à un responsable.",
  },
  {
    question: "Un antivirus suffit-il à protéger complètement un ordinateur contre toutes les cyberattaques ?",
    reponses: [
      "Vrai",
      "Faux",
    ],
    bonneReponse: 1,
    explication:
      "Un antivirus est utile, mais il ne suffit pas. Il faut aussi installer les mises à jour, utiliser des mots de passe sécurisés, effectuer des sauvegardes et rester vigilant.",
  },
  {
    question: "Pourquoi faut-il installer les mises à jour de son téléphone et de son ordinateur ?",
    reponses: [
      "Uniquement pour changer l'apparence",
      "Pour corriger des failles de sécurité et améliorer le fonctionnement",
      "Pour supprimer automatiquement tous les virus",
      "Pour rendre les mots de passe inutiles",
    ],
    bonneReponse: 1,
    explication:
      "Les mises à jour corrigent notamment des failles de sécurité que les pirates pourraient exploiter pour accéder à tes appareils ou à tes données.",
  },
  {
    question: "Quelles informations dois-tu éviter de partager publiquement sur les réseaux sociaux ?",
    reponses: [
      "Ton adresse personnelle",
      "Tes identifiants et mots de passe",
      "Tes coordonnées bancaires",
      "Une photo de paysage sans information personnelle",
    ],
    bonneReponse: [0, 1, 2],
    explication:
      "Ton adresse, tes identifiants et tes coordonnées bancaires sont des informations sensibles. Leur divulgation peut faciliter les arnaques, l'usurpation d'identité ou le vol de comptes.",
  },
  {
    question: "Ton ami utilise le même mot de passe pour Instagram, sa messagerie et son compte bancaire. Quel conseil lui donner ?",
    reponses: [
      "Garder ce mot de passe, mais le changer une fois par an",
      "Utiliser un mot de passe différent pour chaque compte et activer la double authentification",
      "Partager ses mots de passe avec ses amis de confiance",
      "Supprimer uniquement son compte Instagram",
    ],
    bonneReponse: 1,
    explication:
      "Il faut utiliser un mot de passe unique pour chaque compte. Si un pirate récupère un mot de passe, il ne pourra pas automatiquement accéder aux autres comptes. La double authentification renforce encore la sécurité.",
  },
];