export const personalInfo = {
  name: "Abdoulaye Diome",
  title: "Développeur Full-Stack",
  email: "a.diome4@isepdiamniadio.edu.sn",
  phone: "+221 77 823 22 95",
  location: "Dakar, Sénégal",
  whatsapp: "+221778232295",
  github: "https://github.com/Diome1804",
  linkedin: "https://www.linkedin.com/in/abdoulaye-diome-2b595a320/",
  bio: "Développeur full-stack passionné avec plus de 1 an d'expérience dans la création d'applications web et mobile modernes. Spécialisé en React, Node.js et solutions cloud, je transforme des idées en produits digitaux performants et évolutifs.",
  cvUrl: " https://mon-cv-sigma.vercel.app/",
};

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "NestJS", level: 80 },
    { name: "Python", level: 75 },
    { name: "GraphQL", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Redis", level: 75 },
    { name: "Firebase", level: 85 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Vercel", level: 90 },
    { name: "CI/CD", level: 85 },
  ],
};

export const experience = [
  {
    title: "Lead Developer Full-Stack",
    company: "TechCorp Solutions",
    period: "2021 - Présent",
    description: "Direction technique et développement d'applications web complexes pour des clients internationaux. Management d'équipe de 5 développeurs.",
  },
  {
    title: "Développeur Full-Stack",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Développement de sites e-commerce et applications métier avec React, Node.js et MongoDB. Optimisation des performances et SEO.",
  },
  {
    title: "Développeur Frontend",
    company: "StartUp Innov",
    period: "2018 - 2019",
    description: "Création d'interfaces utilisateur modernes et responsive. Intégration d'APIs RESTful et GraphQL.",
  },
];

export const education = [
  {
    degree: "Master en Génie Logiciel",
    school: "Université Cheikh Anta Diop",
    period: "2016 - 2018",
  },
  {
    degree: "Licence en Informatique",
    school: "Université Gaston Berger",
    period: "2013 - 2016",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-commerce",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe, gestion des stocks et tableau de bord admin.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/abdoulayediome/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web App",
    description: "Application de gestion de tâches collaborative avec temps réel, notifications et analytics avancés.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    image: "/projects/taskapp.jpg",
    github: "https://github.com/abdoulayediome/task-manager",
    demo: "https://taskapp-demo.com",
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    category: "Mobile",
    description: "Application mobile de suivi fitness avec plans d'entraînement personnalisés et tracking des performances.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "/projects/fitness.jpg",
    github: "https://github.com/abdoulayediome/fitness-tracker",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web App",
    description: "Portail immobilier avec recherche avancée, cartographie interactive et système de réservation de visites.",
    technologies: ["Vue.js", "Express", "MongoDB", "Mapbox", "Nuxt.js"],
    image: "/projects/realestate.jpg",
    github: "https://github.com/abdoulayediome/real-estate-portal",
    demo: "https://realestate-demo.com",
  },
];
