export default function AboutWindow() {
  const text = `====================================================
  ABOUT_ME.TXT -- Mariem Jlassi
====================================================

  Hi, I'm Mariem
  Full Stack Developer & Engineering Student
  Tunis, Tunisia

====================================================
  WHO AM I ?
====================================================

  First-year engineering student at iTeam University,
  holding a Bachelor's degree in Information Systems
  Development from ISET Radès.

  I'm passionate about building things that work --
  clean code, secure backends, responsive frontends.
  I love turning complex problems into simple,
  elegant solutions.

  When I'm not coding, you'll find me exploring
  new tech, contributing to student clubs, or
  drinking too much coffee.

====================================================
  WHAT I DO
====================================================

  I build full-stack web applications with a focus
  on security and scalability.

  My go-to stack:
  -> Frontend  : Angular, React, HTML5, CSS3
  -> Backend   : Spring Boot, Spring Security, Java
  -> Databases : PostgreSQL, MySQL, MongoDB
  -> Other     : TensorFlow, RASA, Cypress, Git

  I work in Agile/Scrum environments and I care
  deeply about code quality and testing.

====================================================
  WHAT DRIVES ME
====================================================

  -> Building things that actually help people
  -> Learning something new every single day
  -> Writing code I'm proud of, not just code
     that works
  -> Collaborating, sharing knowledge, growing

====================================================
  CURRENTLY
====================================================

  Location : Tunis, Tunisia
  School   : Engineering @ iTeam University (Year 1)
  Status   : OPEN TO WORK
  Looking  : internship / junior dev role
  Learning : System Administration, Cybersecurity,
             Network Security, Linux, DevOps,
             Cloud Infrastructure, AI/ML

====================================================
  FIND ME
====================================================

  Email    ->  jlassiimariem52@gmail.com
  LinkedIn ->  linkedin.com/in/mariem-jlassi
  GitHub   ->  github.com/Mariemjlassi
  Phone    ->  +216 94 381 426

====================================================
  ACTIVITIES
====================================================

  [OK] Member   -- Securinets iTeam University
                   (cybersecurity student club)

  [OK] HR Mgr   -- IEEE Student Branch Rades
                   (5 months, team & events management)

====================================================
  [EOF] -- Thanks for reading! Let's build something.
====================================================`;

  return (
    <div style={{ height: '100%' }}>
      <textarea
        readOnly
        value={text}
        style={{
          width: '100%', height: '100%',
          background: '#fff',
          borderTop: '2px solid #808080',
          borderLeft: '2px solid #808080',
          borderRight: 'none', borderBottom: 'none',
          padding: 10,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 12, color: '#000', lineHeight: 1.7,
          resize: 'none', outline: 'none',
          whiteSpace: 'pre',
          overflowY: 'auto',
          cursor: 'text',
        }}
      />
    </div>
  );
}