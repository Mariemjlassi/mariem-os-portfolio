// ============================================================
//  📝 FICHIER DE CONFIGURATION DU PORTFOLIO
//  → Modifie uniquement ce fichier pour personnaliser tout !
// ============================================================

export const USER = {
  name: "Mariem Jlassi",
  title: "Full-Stack Developer | Junior Frontend Developer",
  location: "Borj El Amri, Tunisia 🇹🇳",
  status: "OPEN TO WORK",
  email: "mariemjlassi515@gmail.com",
  phone: "+216 94 381 426",
  github: "github.com/Mariemjlassi",
  linkedin: "https://www.linkedin.com/in/mariem-jlassi-674103287/",
  
  bio: `Passionnée par le développement Full Stack
et la sécurité des applications.

Je conçois des solutions fiables, évolutives
et sécurisées : Spring Boot, Angular, React.

Étudiante ingénieure 1ère année à iTeam,
Licence en Technologies de l'Informatique.
Membre Securinets & HR Manager IEEE. ☕`,
};

export const EXPERIENCE = [
  {
    period: "Fév 2025 — Mai 2025",
    role: "Projet de Fin d'Études (noté Excellent)",
    company: "ASSAD Batterie — Bou Argoub",
    desc: `Conception & développement d'OrgaRH,
application web complète de gestion des carrières.
Auth sécurisée reCAPTCHA, dashboard prédictif
TensorFlow, chatbot RASA, gestion des rôles.
Stack: Spring Boot, Angular, PrimeNG, PostgreSQL,
TensorFlow, RASA, Swagger, Cypress, Git.`,
  },
  {
    period: "Jan 2024 — Fév 2024",
    role: "Stagiaire Full Stack Developer",
    company: "CNI — Centre National de l'Informatique, Tunis",
    desc: `Développement d'un site web pour le calcul
des taxes locatives des terrains non bâtis.
Architecture modulaire, sécurisation Spring Security.
Stack: Spring Boot, Angular, PostgreSQL.`,
  },
  {
    period: "2026",
    role: "Projet Académique — Smart Intersection",
    company: "iTeam University — Tunis",
    desc: `Simulation d'intersection intelligente 4 voies
avec feux adaptatifs en temps réel, priorité ambulance,
gestion piétons, module météo, détection de collision.
Stack: Python, Pygame, NumPy, SQLite3.`,
  },
];

export const EDUCATION = [
  {
    year: "2025 — 2028",
    degree: "Bachelor of Engineering in Computer Science",
    school: "iTeam University, Tunisia (1ère année — Tronc commun)",
  },
  {
    year: "2022 — 2025",
    degree: "Licence en Technologies de l'Informatique",
    school: "ISET Radès — Développement des Systèmes d'Information",
  },
  {
    year: "2020 — 2021",
    degree: "Baccalauréat en Sciences Expérimentales",
    school: "Lycée Ibn Mandhour, Borj El Amri",
  },
];

export const SKILLS = {
  Frontend: [
    { name: "Angular",              level: 90 },
    { name: "JavaScript / ES6+",    level: 88 },
    { name: "HTML5 / CSS3",         level: 92 },
    { name: "React",                level: 72 },
    { name: "PrimeNG",              level: 82 },
    { name: "Responsive Design",    level: 88 },
  ],
  Backend: [
    { name: "Spring Boot",          level: 88 },
    { name: "Spring Security",      level: 85 },
    { name: "Java / JavaEE",        level: 82 },
    { name: "PHP / Symfony",        level: 70 },
    { name: "Python",               level: 78 },
    { name: "REST API",             level: 90 },
  ],
  Databases: [
    { name: "PostgreSQL",           level: 85 },
    { name: "MySQL",                level: 82 },
    { name: "MongoDB",              level: 72 },
    { name: "SQLite",               level: 75 },
  ],
  Tools: [
    { name: "Git",                  level: 88 },
    { name: "Cypress (tests E2E)",  level: 78 },
    { name: "JUnit",                level: 72 },
    { name: "Postman / Swagger",    level: 85 },
    { name: "Jira / Scrum",         level: 80 },
    { name: "TensorFlow",           level: 60 },
  ],
  "AI / Other": [
    { name: "RASA (Chatbot)",       level: 65 },
    { name: "TensorFlow / ML",      level: 60 },
    { name: "Pygame / NumPy",       level: 70 },
    { name: "JavaFX",               level: 68 },
  ],
};

export const CERTIFICATIONS = [
  "Xtreme 17 — IEEE Competition",
  "Python Essentials — Cisco NetAcad",
  "Linux Essentials — Cisco NetAcad",
];

export const PROJECTS = [
  {
    id: "orgarh",
    name: "ORGARH.exe",
    icon: "ORGARH",
    category: "Full Stack",
    description: "Application web complète de gestion des carrières RH. PFE noté Excellent. Auth reCAPTCHA, dashboard TensorFlow, chatbot RASA.",
    longDescription: `Application web full-stack de gestion
des carrières pour ASSAD Batterie.

Authentification sécurisée reCAPTCHA
avec blocage après tentatives échouées.
Gestion employés, formations, diplômes,
postes, compétences et disciplines.
Dashboard prédictif TensorFlow.
Chatbot RASA pour assistance RH.
Tests E2E Cypress, Agile/Scrum Jira.

Résultat : Noté EXCELLENT`,
    tech: ["Spring Boot", "Angular", "PrimeNG", "PostgreSQL", "TensorFlow", "RASA", "Cypress", "Git"],
    
    demo: null,
    stars: 0,
    year: 2025,
  },
  {
    id: "smart-intersection",
    name: "SMART-INTERSECTION.exe",
    icon: "TRAFFIC",
    category: "Simulation / AI",
    description: "Simulation d'intersection intelligente 4 voies avec feux adaptatifs, priorité ambulance, détection collision.",
    longDescription: `Simulation temps-réel d'une intersection
intelligente à 4 voies.

Feux adaptatifs (10s–35s dynamique),
priorité ambulance automatique,
gestion des piétons, module météo
et détection de collision.

Architecture MVC modulaire complète
avec dashboard de contrôle.`,
    tech: ["Python", "Pygame", "NumPy", "SQLite3", "MVC"],
    gitlab: "https://gitlab.com/MariemJlassi20/adaptive-traffic-simulation",
    demo: null,
    stars: 0,
    year: 2026,
  },
  {
    id: "tax-calculator",
    name: "TAX-CALCULATOR.exe",
    icon: "CALC",
    category: "Web App",
    description: "Application web de calcul des taxes locatives pour terrains non bâtis. Stage CNI Tunis. Architecture modulaire sécurisée.",
    longDescription: `Application web développée au CNI
(Centre National de l'Informatique).

Calcul des taxes locatives pour
les terrains non bâtis en Tunisie.
Architecture modulaire, sécurisation
via Spring Security, contrôle d'accès,
protection contre les vulnérabilités.`,
    tech: ["Spring Boot", "Angular", "Spring Security", "PostgreSQL", "REST API"],
    github: "https://github.com/Mariemjlassi/ProjetStagePerfectionnement",
    demo: null,
    stars: 0,
    year: 2024,
  },
  {
    id: "portfolio-os",
    name: "PORTFOLIO-OS.exe",
    icon: "PORTFOLIO",
    category: "Creative",
    description: "Ce portfolio ! Interface OS rétro Windows 95 + MS-DOS. React + Vite. Déployé sur Netlify.",
    longDescription: `Portfolio interactif simulant Windows 95
et MS-DOS. Fenêtres draggables, terminal
fonctionnel, boot sequence animée.
Pur React + Vite, zéro framework UI.

Effets CRT scanlines, Start Menu,
Taskbar, Shut Down animation,
15+ commandes MS-DOS.`,
    tech: ["React", "Vite", "CSS3", "Netlify", "VT323 Font"],
    github: "https://github.com/mariem-jlassi/portfolio",
    demo: "https://mariem-jlassi.netlify.app",
    stars: 0,
    year: 2025,
  },
];