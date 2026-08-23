import type { Translations } from "./types";

const fr: Translations = {
  nav: {
    rooms: "Chambres",
    experiences: "Expériences",
    gallery: "Galerie",
    contact: "Contact",
    book: "Réserver votre séjour",
  },

  hero: {
    eyebrow: "Hôtel Boutique · Sétif · Algérie",
    title: "Une autre façon de vivre le luxe.",
    discover: "Découvrir Maison Élysée",
    availability: "Vérifier les disponibilités",
    scroll: "Défiler",
  },

  maison: {
    eyebrow: "La Maison",
    title: "Pensée pour les matins tranquilles.",
    text: "Maison Élysée est un hôtel boutique pensé autour du calme, du caractère et d'une hospitalité attentive. Un refuge privé au cœur de Sétif, où le design contemporain rencontre la chaleur de la culture algérienne.",
    link: "Découvrir notre histoire →",
  },

  rooms: {
    eyebrow: "Séjournez chez nous",
    title: "Chambres & Suites",
    description:
      "Quatre espaces uniques conçus autour de matériaux naturels, de matins paisibles et d'un confort sans effort.",
    explore: "Découvrir",
    deluxe: "Chambre Deluxe",
    executive: "Chambre Executive",
    junior: "Suite Junior",
    presidential: "Suite Présidentielle",
    priceFrom: "À partir de",
    specs: {
      deluxe: "32 m² · 2 personnes · Lit king size",
      executive: "40 m² · 2 personnes · Lit king size",
      junior: "52 m² · 3 personnes · Lit king size",
      presidential: "78 m² · 4 personnes · Lit king size",
    },
  },

  amenities: {
    eyebrow: "À la Maison",
    title: "Tout ce dont vous avez besoin.",
    description:
      "Des détails soignés, des espaces calmes et un service sans effort. Tout est pensé pour que votre séjour soit simple.",
    items: {
      "01": {
        title: "Restaurant",
        description:
          "Une cuisine algérienne de saison, avec une touche contemporaine.",
      },
      "02": {
        title: "Bien-être",
        description:
          "Un espace calme pour les soins, la détente et la récupération.",
      },
      "03": {
        title: "Rooftop",
        description:
          "Vue sur le coucher du soleil sur Sétif depuis notre terrasse privée.",
      },
      "04": {
        title: "Petit-déjeuner",
        description:
          "Viennoiseries fraîches, produits locaux et matins tranquilles.",
      },
      "05": {
        title: "Conciergerie",
        description:
          "Recommandations personnalisées et organisation sans effort.",
      },
      "06": {
        title: "Parking privé",
        description:
          "Parking sécurisé sur place réservé à nos clients.",
      },
      "07": {
        title: "Wi-Fi",
        description: "Connexion rapide et fiable dans tout l'hôtel.",
      },
      "08": {
        title: "Transferts",
        description:
          "Transferts aéroport et ville organisés sur demande.",
      },
    },
  },

  gallery: {
    eyebrow: "Un aperçu de l'intérieur",
    title: "La Maison en images.",
    description:
      "Lumière naturelle, coins tranquilles et détails soigneusement pensés. Découvrez l'atmosphère de Maison Élysée.",
    lobbyLabel: "Le Lobby",
    lobbyCaption: "Une première impression, pensée avec soin.",
    loungeLabel: "Salon",
    interiorsLabel: "Intérieurs",
    terraceLabel: "La Terrasse",
    terraceCaption:
      "Des soirées qui donnent envie de rester un peu plus longtemps.",
  },

  experiences: {
    eyebrow: "Au-delà de la Maison",
    title: "Découvrir Sétif.",
    description:
      "Des sites historiques aux paysages montagneux, la ville et ses environs offrent des expériences qui méritent de prendre son temps.",
    mainTag: "Expérience d'une journée",
    mainTitle: "Montagnes & ciels ouverts.",
    mainText:
      "Évadez-vous dans les paysages autour de Sétif. Air pur, horizons spectaculaires et routes tranquilles font des hauteurs une escapade sans effort.",
    items: {
      "02": {
        title: "Ain El Fouara",
        text: "Visitez l'un des monuments les plus emblématiques de Sétif et explorez le centre-ville à pied.",
        tag: "Ville · 10 min",
      },
      "03": {
        title: "Musée archéologique",
        text: "Découvrez l'histoire romaine et les trésors archéologiques de la région.",
        tag: "Culture · 10 min",
      },
      "04": {
        title: "Vieille ville",
        text: "Flânez dans les rues locales, découvrez de petits cafés et vivez le rythme quotidien de Sétif.",
        tag: "Vie locale · 15 min",
      },
      "05": {
        title: "Montagnes des Babors",
        text: "Une escapade pittoresque pour les clients souhaitant échanger la ville contre forêts, altitude et grands espaces.",
        tag: "Nature · Excursion d'une journée",
      },
    },
  },

  reviews: {
    eyebrow: "Livre d'or",
    title: "Les mots de nos clients.",
    rating: "Note des clients",
    note1: "Basé sur des séjours vérifiés",
    note2: "Maison Élysée · Sétif",
    items: {
      "01": {
        quote:
          "Un hôtel magnifiquement conçu, avec une atmosphère à la fois raffinée et incroyablement accueillante.",
        name: "Sarah M.",
        location: "Paris, France",
      },
      "02": {
        quote:
          "L'endroit parfait pour ralentir. Les chambres, le petit-déjeuner et le service étaient exceptionnels du début à la fin.",
        name: "Karim B.",
        location: "Alger, Algérie",
      },
      "03": {
        quote:
          "Tout était pensé. De l'architecture aux moindres détails, Maison Élysée est vraiment unique.",
        name: "Thomas R.",
        location: "Londres, Royaume-Uni",
      },
    },
  },

  availability: {
    eyebrow: "Planifiez votre séjour",
    title: "Faites-en le vôtre.",
    button: "Demander une disponibilité",
    description:
      "Indiquez-nous quand vous souhaitez séjourner et notre équipe vous recontactera avec les disponibilités et les meilleures options de chambres.",
    checkIn: "Arrivée",
    checkOut: "Départ",
    guestsLabel: "Personnes",
    guestOption1: "1 personne",
    guestOption2: "2 personnes",
    guestOption3: "3 personnes",
    guestOption4: "4 personnes",
    roomTypeLabel: "Type de chambre",
    roomAny: "Peu importe",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    phone: "Téléphone",
    phonePlaceholder: "+213",
    message: "Demandes particulières",
    messagePlaceholder: "Dites-nous tout ce que nous devrions savoir...",
    disclaimer:
      "Cette demande ne garantit pas une réservation. Notre équipe vous contactera pour confirmer la disponibilité.",
  },

  location: {
    eyebrow: "Trouver la Maison",
    title: "Au cœur de Sétif.",
    address: "Adresse",
    airport: "Depuis l'aéroport de Sétif",
    centre: "Centre-ville",
    directions: "Itinéraire →",
    description:
      "Situé au cœur de Sétif, Maison Élysée met à portée de main les monuments, cafés et le rythme quotidien de la ville.",
    addressValue: "Sétif, Algérie",
    airportTime: "Environ 20 minutes",
    centreTime: "À distance de marche",
    markerLabel: "Maison Élysée",
    markerLocation: "Sétif · Algérie",
  },

  contact: {
    eyebrow: "Nous contacter",
    title: "Nous serions ravis de vous accueillir.",
    phone: "Téléphone",
    email: "E-mail",
    address: "Adresse",
    reception: "Réception",
    description:
      "Que vous prépariez une escapade de week-end, un séjour plus long ou que vous ayez simplement une question, notre équipe est là pour vous aider.",
    addressValue: "Sétif, Algérie",
    receptionValue: "Ouvert 24h/24",
  },

  footer: {
    explore: "Explorer",
    contact: "Contact",
    stay: "Demander un séjour",
    location: "Localisation",
    contactUs: "Nous contacter",
    tagline: "Une autre façon de vivre le luxe, au cœur de Sétif.",
    reviewsLink: "Avis",
    hospitality: "Hospitalité Boutique",
  },
};

export default fr;
