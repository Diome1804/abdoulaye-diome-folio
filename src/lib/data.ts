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
  cvUrl: "/cv_abdoulaye_diome_FR.pdf",
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
    { name: "Java", level: 90 },
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
    title: "Développeur Fullstack - Plateforme E-commerce",
    company: "Sonatel Académie, Dakar",
    period: "2025 (1 semaine)",
    description: "Développement d'une plateforme e-commerce avec gestion des stocks. Intégration frontend avec Vue.js et backend Laravel. Gestion des commandes et relation clients. Technologies : Laravel, Vue.js, PostgreSQL, JavaScript.",
  },
  {
    title: "Développeur Fullstack - Réseau Social JOTAAY",
    company: "Sonatel Académie, Dakar",
    period: "2025 (4 semaines)",
    description: "Création d'une application web de réseau social pédagogique. Développement complet frontend et backend. Implémentation de l'authentification et des interactions utilisateurs. Technologies : HTML, CSS, JavaScript, PHP, MySQL.",
  },
  {
    title: "Développeur Frontend - Clone WhatsApp",
    company: "Orange Digital Center - Sonatel Académie, Dakar",
    period: "2025 (2 semaines)",
    description: "Développement d'une interface de messagerie temps réel. Conception UI/UX inspirée de WhatsApp. Simulation backend avec JSON Server. Technologies : JavaScript, TailwindCSS, Vite, JSON Server.",
  },
  {
    title: "Développeur Fullstack - Application Educative",
    company: "Sonatel Académie, Dakar",
    period: "2025 (2 semaines)",
    description: "Création d'une application de gestion des apprenants. Implémentation des fonctionnalités CRUD complètes. Interface utilisateur simple et intuitive. Technologies : PHP, HTML, CSS, MySQL.",
  },
  {
    title: "Bank Manager API",
    company: "Sonatel Académie, Dakar",
    period: "2025 (20 jours)",
    description: "API RESTful pour gestion bancaire avec Spring Boot et PostgreSQL. Sécurité JWT, documentation Swagger, déploiement Docker/CI-CD. Tests unitaires avec JUnit, gestion des erreurs HTTP. Technologies : Java Spring Boot, PostgreSQL, Swagger, Docker, REST API.",
  },
  {
    title: "Système Gestion Salaires & Présences QR",
    company: "Sonatel Académie, Dakar",
    period: "2025 (15 jours)",
    description: "Application full-stack avec authentification multi-rôles. Génération et scan de codes QR pour présence des employés. Angular + Spring Boot + MongoDB, notifications email. Technologies : Angular, Java Spring Boot, MongoDB, Tailwind CSS, TypeScript.",
  },
];

export const education = [
  {
    degree: "Développement Full Stack",
    school: "Orange Digital Center - Sonatel Académie, Dakar",
    period: "2025",
  },
  {
    degree: "Licence 2 Informatique",
    school: "ISEP Amadou Traore de Diamniadio, Diamniadio",
    period: "2024",
  },
  {
    degree: "Licence 1 Informatique",
    school: "ISEP Amadou Traore de Diamniadio, Diamniadio",
    period: "2023",
  },
  {
    degree: "Baccalauréat",
    school: "Lycée Seydina Issa Rohu Lahi",
    period: "2022",
  },
];

export const projects = [
  {
    id: 5,
    title: "Application Educative",
    category: "Web App",
    description: "Création d'une application de gestion des apprenants. Implémentation des fonctionnalités CRUD complètes. Interface utilisateur simple et intuitive.",
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    image: "/projects/educative.jpg",
    github: "https://github.com/Diome1804/MaxitSa",
    demo: "https://maxitsa-3ab3.onrender.com",
  },
  {
    id: 6,
    title: "Bank Manager API",
    category: "API",
    description: "API RESTful pour gestion bancaire avec Spring Boot et PostgreSQL. Sécurité JWT, documentation Swagger, déploiement Docker/CI-CD. Tests unitaires avec JUnit, gestion des erreurs HTTP.",
    technologies: ["Java Spring Boot", "PostgreSQL", "Swagger", "Docker", "REST API"],
    image: "/projects/bank-api.jpg",
    github: "https://github.com/Diome1804/BankT",
    demo: "#",
  },
  {
    id: 7,
    title: "Système Gestion Salaires & Présences QR",
    category: "Web App",
    description: "Application full-stack avec authentification multi-rôles. Génération et scan de codes QR pour présence des employés. Angular + Spring Boot + MongoDB, notifications email.",
    technologies: ["Angular", "Java Spring Boot", "MongoDB", "Tailwind CSS", "TypeScript"],
    image: "/projects/salary-qr.jpg",
    github: "https://github.com/Diome1804/Gestion_Salaire",
    demo: "#",
  },
];
