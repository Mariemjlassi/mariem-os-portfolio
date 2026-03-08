import { USER } from '../data/portfolioData.js';

// ── Styles boutons Win95 ──────────────────────────────────────
const btnStyle = {
  padding: '2px 10px',
  background: '#c0c0c0',
  borderTop: '2px solid #fff',
  borderLeft: '2px solid #fff',
  borderRight: '2px solid #404040',
  borderBottom: '2px solid #404040',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: 11,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  userSelect: 'none',
};

const PxSave = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" shapeRendering="crispEdges"
    style={{ imageRendering: 'pixelated', display: 'block', flexShrink: 0 }}>
    <rect x="1" y="1" width="12" height="12" fill="#c0c0c0"/>
    <rect x="1" y="1" width="12" height="1" fill="#fff"/>
    <rect x="1" y="1" width="1" height="12" fill="#fff"/>
    <rect x="12" y="2" width="1" height="11" fill="#404040"/>
    <rect x="2" y="12" width="11" height="1" fill="#404040"/>
    <rect x="2" y="2" width="9" height="5" fill="#000080"/>
    <rect x="3" y="3" width="5" height="3" fill="#c0c0c0"/>
    <rect x="7" y="3" width="3" height="1" fill="#808080"/>
    <rect x="2" y="8" width="10" height="4" fill="#808080"/>
    <rect x="3" y="9" width="8" height="2" fill="#c0c0c0"/>
  </svg>
);

export default function CvWindow() {

  const text = `╔═══════════════════════════════════════════╗
║         CURRICULUM VITAE                  ║
║         ${USER.name.padEnd(35)}║
╚═══════════════════════════════════════════╝

CONTACT
───────
[Email]    mariemjlassi515@gmail.com
[LinkedIn] linkedin.com/in/mariem-jlassi
[GitHub]   github.com/Mariemjlassi
[Tel]      +216 94 381 426
[Loc]      Borj El Amri, Tunisia

PROFILE
───────
First-year engineering student holding a Bachelor's
degree in Information Systems Development, with proven
hands-on experience as a Full Stack Developer.

Skilled in building secure, responsive, and scalable
web applications — Angular, JavaScript, HTML5, CSS3
on the client side, and Spring Boot, Spring Security,
Python on the server side.

Experience integrating AI models (TensorFlow),
automated testing (Cypress), and working in
Agile/Scrum environments.

TECHNICAL SKILLS
────────────────
Frontend  : JavaScript, HTML5, CSS3, Angular, React,
            PrimeNG, Responsive Design
Backend   : Java (Spring Boot, Spring Security,
            JavaEE, JavaFX), Python, PHP (Symfony)
Databases : PostgreSQL, MySQL, MongoDB, SQLite
Tools     : Git, Postman, Swagger, Jira, Cypress,
            JUnit, Agile/Scrum

EXPERIENCE & PROJECTS
─────────────────────
2026
  Smart Intersection Simulation
  iTeam University — Academic Project
  → Real-time 4-way smart intersection simulation.
  → Adaptive traffic lights, ambulance priority,
    pedestrian management, weather module,
    collision detection.
  → Stack: Python, Pygame, NumPy, SQLite3.

Feb 2025 — May 2025
  Career Management App (OrgaRH) — Rated EXCELLENT
  ASSAD Batterie — Bou Argoub
  → Full-stack HR career management platform.
  → reCAPTCHA auth, predictive TensorFlow dashboard,
    RBAC, internal messaging system.
  → E2E testing Cypress, Agile/Scrum Jira.
  → Stack: Spring Boot, Angular, PrimeNG, PostgreSQL,
    TensorFlow, Swagger, Cypress, Git.

Jan 2024 — Feb 2024
  Full Stack Developer Intern
  CNI — National Computer Center, Tunis
  → Web app for rental tax calculation on
    undeveloped land.
  → Spring Security hardening, REST API.
  → Stack: Angular, Spring Boot, PostgreSQL.

EDUCATION
─────────
2025 — 2028
  Bachelor of Engineering in Computer Science
  iTeam University, Tunisia (1st year — Common Core)

2022 — 2025
  Bachelor's in Information Technology
  ISET Rades — Information Systems Development

2021
  Baccalaureate in Experimental Sciences
  Ibn Mandhour High School, Borj El Amri

LANGUAGES & ACTIVITIES
────────────────────────
Arabic
French
English

C:\\> Member — Securinets iTeam University
C:\\> HR Manager — IEEE Student Branch Rades

[End of file — CV.TXT v${new Date().getFullYear()}]`;

  const downloadPDF = () => {
    const a = document.createElement('a');
    a.href = '/Mariem_Jlassi_CV.pdf';
    a.download = 'CV_Mariem_Jlassi.pdf';
    a.click();
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Toolbar Win95 */}
      <div style={{
        display: 'flex', gap: 4, padding: '3px 4px',
        background: '#c0c0c0',
        borderBottom: '1px solid #808080',
        flexShrink: 0,
      }}>
        <button style={btnStyle} onClick={downloadPDF} title="Download my CV PDF">
          <PxSave /> Download .PDF
        </button>
      </div>

      {/* Textarea */}
      <textarea
        readOnly
        value={text}
        style={{
          flex: 1,
          width: '100%',
          background: '#fff',
          borderTop: '2px solid #808080',
          borderLeft: '2px solid #808080',
          borderRight: 'none',
          borderBottom: 'none',
          padding: 10,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 12, color: '#000', lineHeight: 1.7,
          resize: 'none', outline: 'none',
          whiteSpace: 'pre',
          overflowY: 'auto',
          cursor: 'text',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}