// ============================================================
//  PORTFOLIO CONFIGURATION FILE
//  → Edit only this file to customize everything!
// ============================================================

export const USER = {
  name: "Mariem Jlassi",
  title: "Full-Stack Developer | Engineering Student",
  location: "Borj El Amri, Tunisia",
  status: "OPEN TO WORK",
  email: "mariemjlassi515@gmail.com",
  phone: "+216 94 381 426",
  github: "github.com/Mariemjlassi",
  linkedin: "https://www.linkedin.com/in/mariem-jlassi-674103287/",

  bio: `Passionate about Full Stack Development
and application security.

I build reliable, scalable and secure
solutions: Spring Boot, Angular, React.

1st year Engineering student at iTeam,
Bachelor's in Information Technology.
Securinets member & IEEE HR Manager.`,
};

export const EXPERIENCE = [
  {
    period: "Feb 2025 — May 2025",
    role: "Final Year Project (Rated Excellent)",
    company: "ASSAD Batterie — Bou Argoub",
    desc: `Design & development of OrgaRH,
a full-stack HR career management platform.
Secure reCAPTCHA auth, predictive TensorFlow
dashboard, RASA chatbot, role management,
internal messaging system.
Stack: Spring Boot, Angular, PrimeNG, PostgreSQL,
TensorFlow, RASA, Swagger, Cypress, Git.`,
  },
  {
    period: "Jan 2024 — Feb 2024",
    role: "Full Stack Developer Intern",
    company: "CNI — National Computer Center, Tunis",
    desc: `Development of a web application for
calculating rental taxes on undeveloped land.
Modular architecture, Spring Security hardening.
Stack: Spring Boot, Angular, PostgreSQL.`,
  },
  {
    period: "2026",
    role: "Academic Project — Smart Intersection",
    company: "iTeam University — Tunis",
    desc: `Real-time simulation of a 4-way smart
intersection with adaptive traffic lights,
ambulance priority, pedestrian management,
weather module and collision detection.
Stack: Python, Pygame, NumPy, SQLite3.`,
  },
];

export const EDUCATION = [
  {
    year: "2025 — 2028",
    degree: "Bachelor of Engineering in Computer Science",
    school: "iTeam University, Tunisia (1st year — Common Core)",
  },
  {
    year: "2022 — 2025",
    degree: "Bachelor's in Information Technology",
    school: "ISET Radès — Information Systems Development",
  },
  {
    year: "2020 — 2021",
    degree: "Baccalaureate in Experimental Sciences",
    school: "Ibn Mandhour High School, Borj El Amri",
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
    { name: "Cypress (E2E tests)",  level: 78 },
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
    category: "C:/ROOT/ORGARH.exe",
    description: "Full-stack HR career management platform. Final Year Project rated Excellent. reCAPTCHA auth, TensorFlow dashboard, RASA chatbot.",
    longDescription: `Full-stack HR management platform
built for ASSAD Batterie. Rated EXCELLENT.

>> AUTH & SECURITY
reCAPTCHA + brute-force protection
Role-based access control (RBAC)

>> CORE MODULES
Employee lifecycle management
Training & certification tracking
Career path & promotion system

>> AI & MONITORING
Predictive dashboard — TensorFlow
Real-time system monitoring
Automated reporting & analytics

>> COMMUNICATION
RASA chatbot for HR assistance
Internal messaging system
Email notifications & alerts

>> QUALITY
E2E testing — Cypress
Agile/Scrum — Jira
API docs — Swagger`,
    tech: ["Spring Boot", "Angular", "PrimeNG", "PostgreSQL", "TensorFlow", "RASA", "Cypress", "Git"],
    demo: null,
    stars: 0,
    year: 2025,
  },
  {
    id: "smart-intersection",
    name: "SMART-INTERSECTION.exe",
    icon: "TRAFFIC",
    category: "C:/SIM/PYGAME",
    description: "Real-time simulation of a 4-way smart intersection with adaptive traffic lights, ambulance priority and collision detection.",
    longDescription: `Real-time simulation of a 4-way
smart intersection.

>> TRAFFIC CONTROL
Adaptive lights (10s–35s dynamic)
Ambulance automatic priority
Pedestrian management system

>> MONITORING
Weather module integration
Collision detection engine
Control dashboard

>> ARCHITECTURE
Full MVC modular design
SQLite data persistence
Clean separation of concerns`,
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
    category: "C:/GOV/FULLSTACK",
    description: "Web application for rental tax calculation on undeveloped land. CNI Tunis internship. Modular secured architecture.",
    longDescription: `Web application built at CNI
(National Computer Center, Tunisia).

>> CORE FEATURE
Rental tax calculator for
undeveloped land in Tunisia

>> SECURITY
Spring Security hardening
Role-based access control
Vulnerability protection

>> ARCHITECTURE
Modular layered design
RESTful API with Swagger docs
PostgreSQL data management

>> CONTEXT
Government internship project
Production-grade codebase`,
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
    category: "C:/WIN95/YOU_ARE_HERE",
    description: "This portfolio! Retro Windows 95 + MS-DOS OS interface. React + Vite. Deployed on Netlify.",
    longDescription: `Interactive portfolio simulating
Windows 95 and MS-DOS.

>> UI / UX
Draggable & resizable windows
Retro CRT scanlines effect
Pixel-art icons (2px grid)

>> FEATURES
Functional MS-DOS terminal
15+ working commands
Boot sequence animation
Start Menu & Taskbar
Shut Down animation

>> TECH
Pure React + Vite, zero UI framework
Custom Win95 CSS components
EmailJS contact form
Deployed on Netlify

>> YOU ARE HERE`,
    tech: ["React", "Vite", "CSS3", "Netlify", "VT323 Font"],
    github: "https://github.com/Mariemjlassi/mariem-os-portfolio",
    demo: "https://mariem-os.netlify.app",
    stars: 0,
    year: 2026,
  },
];