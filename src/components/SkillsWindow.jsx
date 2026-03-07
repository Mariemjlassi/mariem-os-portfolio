import { SKILLS, CERTIFICATIONS } from '../data/portfolioData.js';

export default function SkillsWindow() {
  const lines = [
    '; ============================================',
    '; SKILLS.CFG — Mariem Portfolio Configuration',
    `; Generated: ${new Date().toLocaleDateString('fr-FR')}`,
    '; ============================================',
    '',
  ];

  Object.entries(SKILLS).forEach(([section, skills]) => {
    lines.push(`[${section.toUpperCase()}]`);
    skills.forEach(s => lines.push(`${s.name}=enabled`));
    lines.push('');
  });

  lines.push('; CERTIFICATIONS');
  lines.push('[CERTS]');
  CERTIFICATIONS.forEach((c, i) => lines.push(`cert_${i + 1}=${c}`));
  lines.push('');
  lines.push('[SOFT_SKILLS]');
  lines.push('Team_Lead=enabled');
  lines.push('Problem_Solving=enabled');
  lines.push('Communication=enabled');
  lines.push('Coffee_Intake=enabled');
  lines.push('');
  lines.push('; END OF FILE');

  return (
    <div style={{ height: '100%' }}>
      <textarea
        readOnly
        value={lines.join('\n')}
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
