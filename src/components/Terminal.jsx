import { useState, useRef, useEffect, useCallback } from 'react';
import { USER, PROJECTS, SKILLS, CERTIFICATIONS } from '../data/portfolioData.js';

const PROMPT = `C:\\MARIEM> `;

function buildHelp() {
  return [
    { text: '', type: 'out' },
    { text: '┌────────────────────────────────────────────┐', type: 'out' },
    { text: '│         MARIEM-OS Terminal v1.0            │', type: 'out' },
    { text: '│         Type a command below               │', type: 'out' },
    { text: '└────────────────────────────────────────────┘', type: 'out' },
    { text: '', type: 'out' },
    { text: 'File commands:', type: 'label' },
    { text: '  DIR          — List files in current directory', type: 'out' },
    { text: '  TREE         — Show directory tree', type: 'out' },
    { text: '  TYPE <file>  — Display file content', type: 'out' },
    { text: '', type: 'out' },
    { text: 'Navigation:', type: 'label' },
    { text: '  CD PROJECTS  — Open Projects folder', type: 'out' },
    { text: '  OPEN <name>  — Open: ABOUT, CV, SKILLS, CONTACT, PROJECTS', type: 'out' },
    { text: '', type: 'out' },
    { text: 'System:', type: 'label' },
    { text: '  VER          — OS version info', type: 'out' },
    { text: '  WHOAMI       — Identity info', type: 'out' },
    { text: '  SYSINFO      — System information', type: 'out' },
    { text: '  UPTIME       — Show system uptime', type: 'out' },
    { text: '  DATE         — Current date & time', type: 'out' },
    { text: '  PING MARIEM  — Test network connection', type: 'out' },
    { text: '  NEOFETCH     — System info with ASCII art', type: 'out' },
    { text: '  CLS          — Clear screen', type: 'out' },
    { text: '  EXIT         — Close terminal', type: 'out' },
    { text: '', type: 'out' },
    { text: 'Tip: ↑↓ arrows for history, TAB for autocomplete', type: 'dim' },
  ];
}

const startTime = Date.now();

export default function Terminal({ onOpenWindow, onClose }) {
  const [lines, setLines] = useState([
    { text: `Microsoft(R) MARIEM-DOS  Version 6.22`, type: 'amber' },
    { text: `(C)Copyright Mariem Corp 1994-2025.`, type: 'amber' },
    { text: ``, type: 'out' },
    { text: `Type HELP for commands list.`, type: 'dim' },
    { text: ``, type: 'out' },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const appendLines = useCallback((newLines) => {
    setLines(prev => [...prev, ...newLines]);
  }, []);

  const clearLines = useCallback(() => setLines([]), []);

  const ALL_COMMANDS = ['HELP','DIR','TREE','CLS','VER','WHOAMI','SYSINFO','UPTIME',
    'DATE','PING MARIEM','NEOFETCH','EXIT',
    'CD PROJECTS','OPEN ABOUT','OPEN CV','OPEN SKILLS','OPEN CONTACT','OPEN PROJECTS',
    'TYPE README.TXT','TYPE CV.TXT','TYPE SKILLS.CFG',
  ];

  const handleCommand = useCallback((raw) => {
    const cmd = raw.trim().toUpperCase();

    // Echo
    appendLines([{ text: PROMPT + raw, type: 'echo' }]);

    if (!cmd) { appendLines([{ text: '', type: 'out' }]); return; }

    // History
    setHistory(prev => [raw, ...prev]);
    setHistIdx(-1);

    switch (cmd) {
      case 'HELP':
        appendLines(buildHelp());
        break;

      case 'CLS':
        clearLines();
        break;

      case 'VER':
        appendLines([
          { text: '', type: 'out' },
          { text: '  MARIEM-OS [Version 1.0.1337]', type: 'out' },
          { text: '  (c) 2025 Mariem Corporation.', type: 'out' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'WHOAMI':
        appendLines([
          { text: '', type: 'out' },
          { text: `  ${USER.name}`, type: 'green' },
          { text: `  ${USER.title}`, type: 'out' },
          { text: `  Location : ${USER.location}`, type: 'dim' },
          { text: `  Status   : ${USER.status}`, type: 'green' },
          { text: `  Email    : ${USER.email}`, type: 'dim' },
          { text: `  GitHub   : ${USER.github}`, type: 'dim' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'SYSINFO':
        appendLines([
          { text: '', type: 'out' },
          { text: '  +-----------------------------------------+', type: 'label' },
          { text: '  |       MARIEM-OS  v1.0  -- SYSINFO       |', type: 'label' },
          { text: '  +-----------------------------------------+', type: 'label' },
          { text: '', type: 'out' },
          { text: '  HARDWARE', type: 'label' },
          { text: '  CPU      : Human Brain 2002 @ 3.2GHz', type: 'out' },
          { text: '             Turbo mode: activated on deadlines', type: 'dim' },
          { text: '  RAM      : 16GB Coffee-Enhanced DDR5', type: 'out' },
          { text: '             Overflow handler: sleep()', type: 'dim' },
          { text: '  GPU      : Creativity Engine -- 60fps ideas/sec', type: 'out' },
          { text: '  HDD      : 23 years of XP  [FULL]', type: 'out' },
          { text: '', type: 'out' },
          { text: '  SOFTWARE', type: 'label' },
          { text: '  OS       : MARIEM-OS v1.0  (based on Human 1.0)', type: 'out' },
          { text: '  Shell    : MS-DOS 6.22  --  MARIEM Edition', type: 'out' },
          { text: '  Stack    : Spring Boot + Angular + React + Java', type: 'out' },
          { text: '  AI mods  : TensorFlow, RASA  [LOADED]', type: 'out' },
          { text: '  Security : Spring Security  [ARMED]', type: 'out' },
          { text: '', type: 'out' },
          { text: '  NETWORK', type: 'label' },
          { text: '  Status   : ONLINE  [OK]', type: 'out' },
          { text: '  Mode     : OPEN TO WORK  -- broadcasting...', type: 'out' },
          { text: '  Location : Tunis, Tunisia  --  remote OK', type: 'out' },
          { text: '', type: 'out' },
          { text: '  DIAGNOSTICS', type: 'label' },
          { text: '  Bug fix  : 100%  |  Coffee level : critical', type: 'out' },
          { text: '  Patience : high  |  Motivation   : MAX', type: 'out' },
          { text: '  Mode     : Junior dev  --  learning every day', type: 'dim' },
          { text: '', type: 'out' },
          { text: '  All systems operational.  No errors detected.', type: 'label' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'UPTIME': {
        const sec = Math.floor((Date.now() - startTime) / 1000);
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        appendLines([
          { text: '', type: 'out' },
          { text: `  System up: ${m} minutes, ${s} seconds`, type: 'out' },
          { text: '', type: 'out' },
        ]);
        break;
      }

      case 'DATE':
        appendLines([
          { text: '', type: 'out' },
          { text: `  ${new Date().toLocaleString('fr-FR')}`, type: 'out' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'DIR':
        appendLines([
          { text: '', type: 'out' },
          { text: ' Directory of C:\\MARIEM', type: 'out' },
          { text: '', type: 'out' },
          { text: ' 07/03/2025  <DIR>          .', type: 'dim' },
          { text: ' 07/03/2025  <DIR>          ..', type: 'dim' },
          { text: ' 07/03/2025  <DIR>          PROJECTS', type: 'blue' },
          { text: ' 07/03/2025        4,284    ABOUT_ME.TXT', type: 'out' },
          { text: ' 07/03/2025        1,842    CV.TXT', type: 'out' },
          { text: ' 07/03/2025        2,190    SKILLS.CFG', type: 'out' },
          { text: ' 07/03/2025           EXE   CONTACT.EXE', type: 'amber' },
          { text: '             6 File(s)     12,450 bytes', type: 'dim' },
          { text: '             2 Dir(s)   2,147,483,648 bytes free', type: 'dim' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'TREE':
        appendLines([
          { text: '', type: 'out' },
          { text: 'C:\\MARIEM', type: 'green' },
          { text: '├── ABOUT_ME.TXT', type: 'out' },
          { text: '├── CV.TXT', type: 'out' },
          { text: '├── SKILLS.CFG', type: 'out' },
          { text: '├── CONTACT.EXE', type: 'amber' },
          { text: '└── PROJECTS\\', type: 'blue' },
          ...PROJECTS.map((p, i) => ({
            text: `    ${i === PROJECTS.length - 1 ? '└' : '├'}── ${p.name}`,
            type: 'out',
          })),
          { text: '', type: 'out' },
        ]);
        break;

      case 'TYPE README.TXT':
        appendLines([
          { text: '', type: 'out' },
          { text: '  ╔══════════════════════════════════════╗', type: 'green' },
          { text: `  ║   Welcome to MARIEM-OS v1.0          ║`, type: 'green' },
          { text: '  ║   A developer portfolio OS           ║', type: 'green' },
          { text: '  ║                                      ║', type: 'green' },
          { text: '  ║   Navigate using desktop icons or    ║', type: 'green' },
          { text: '  ║   type commands here. Enjoy! :)      ║', type: 'green' },
          { text: '  ╚══════════════════════════════════════╝', type: 'green' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'TYPE CV.TXT':
        appendLines([
          { text: '', type: 'out' },
          { text: `  ${USER.name}  —  ${USER.title}`, type: 'green' },
          { text: `  ${USER.email}  |  ${USER.github}`, type: 'dim' },
          { text: `  ${USER.location}`, type: 'dim' },
          { text: '', type: 'out' },
          { text: '  EXPERIENCE', type: 'label' },
          ...USER.email ? [] : [],
          { text: '', type: 'out' },
        ]);
        break;

      case 'TYPE SKILLS.CFG':
        appendLines([
          { text: '', type: 'out' },
          { text: '; SKILLS.CFG — Mariem Configuration', type: 'dim' },
          { text: '', type: 'out' },
          ...Object.entries(SKILLS).flatMap(([section, skills]) => [
            { text: `[${section.toUpperCase()}]`, type: 'label' },
            ...skills.map(sk => ({ text: `${sk.name}=${sk.level}`, type: 'out' })),
            { text: '', type: 'out' },
          ]),
        ]);
        break;

      case 'PING MARIEM':
        appendLines([
          { text: '', type: 'out' },
          { text: `Pinging ${USER.github.split('/')[0]} [93.184.216.34]`, type: 'out' },
        ]);
        setTimeout(() => appendLines([
          { text: 'Reply from 93.184.216.34: bytes=32 time=11ms TTL=55', type: 'green' },
          { text: 'Reply from 93.184.216.34: bytes=32 time=10ms TTL=55', type: 'green' },
          { text: 'Reply from 93.184.216.34: bytes=32 time=12ms TTL=55', type: 'green' },
          { text: '', type: 'out' },
          { text: 'Ping statistics:', type: 'dim' },
          { text: '  Packets: Sent=3, Received=3, Lost=0 (0% loss)', type: 'green' },
          { text: '  Min=10ms, Max=12ms, Avg=11ms', type: 'dim' },
          { text: '', type: 'out' },
        ]), 800);
        break;

      case 'NEOFETCH':
        appendLines([
          { text: '', type: 'out' },
          { text: '   ██████████    user@MARIEM-OS', type: 'split', left: 'green', right: 'amber' },
          { text: '  ████████████   ─────────────────────────', type: 'split', left: 'green', right: 'dim' },
          { text: ' ██████████████  OS     : MARIEM-OS 1.0', type: 'split', left: 'green', right: 'out' },
          { text: ' ██████████████  Shell  : MS-DOS 6.22 emu', type: 'split', left: 'green', right: 'out' },
          { text: '  ████████████   CPU    : Brain @ 3.2GHz ☕', type: 'split', left: 'green', right: 'out' },
          { text: '   ██████████    RAM    : ∞ ideas loaded', type: 'split', left: 'green', right: 'out' },
          { text: '                 Lang   : Python JS Go Rust', type: 'split', left: 'dim', right: 'out' },
          { text: '                 Role   : Full-Stack Dev', type: 'split', left: 'dim', right: 'out' },
          { text: `                 City   : ${USER.location}`, type: 'split', left: 'dim', right: 'out' },
          { text: '', type: 'out' },
        ]);
        break;

      case 'CD PROJECTS':
      case 'OPEN PROJECTS':
        onOpenWindow('projects');
        appendLines([{ text: `  Switching to PROJECTS\\...`, type: 'dim' }, { text: '', type: 'out' }]);
        break;

      case 'OPEN ABOUT':
        onOpenWindow('about');
        appendLines([{ text: `  Opening ABOUT_ME.TXT...`, type: 'dim' }, { text: '', type: 'out' }]);
        break;

      case 'OPEN CV':
        onOpenWindow('cv');
        appendLines([{ text: `  Opening CV.TXT...`, type: 'dim' }, { text: '', type: 'out' }]);
        break;

      case 'OPEN SKILLS':
        onOpenWindow('skills');
        appendLines([{ text: `  Opening SKILLS.CFG...`, type: 'dim' }, { text: '', type: 'out' }]);
        break;

      case 'OPEN CONTACT':
        onOpenWindow('contact');
        appendLines([{ text: `  Opening CONTACT.EXE...`, type: 'dim' }, { text: '', type: 'out' }]);
        break;

      case 'EXIT':
        onClose();
        return;

      default:
        appendLines([
          { text: `  '${raw}' is not recognized as an internal or external command.`, type: 'err' },
          { text: `  Type HELP for available commands.`, type: 'dim' },
          { text: '', type: 'out' },
        ]);
    }
  }, [appendLines, clearLines, onOpenWindow, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(i => {
        const ni = Math.min(i + 1, history.length - 1);
        setInput(history[ni] || '');
        return ni;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(i => {
        const ni = Math.max(i - 1, -1);
        setInput(ni === -1 ? '' : history[ni]);
        return ni;
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const up = input.toUpperCase();
      const match = ALL_COMMANDS.find(c => c.startsWith(up) && c !== up);
      if (match) setInput(match);
    }
  };

  const typeColor = {
    out: '#00cc33',
    green: '#00ff41',
    dim: '#557755',
    amber: '#ffb300',
    label: '#ffb300',
    err: '#ff4444',
    blue: '#6699ff',
    echo: '#ffffff',
    split: '#00cc33',
  };

  return (
    <div
      style={{ height: '100%', background: '#0a0a0a', display: 'flex', flexDirection: 'column', padding: 8 }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 13,
            lineHeight: 1.55,
            color: typeColor[line.type] || '#00cc33',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {line.text || '\u00A0'}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input line */}
      <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #0a3a0a', paddingTop: 6, marginTop: 4 }}>
        <span style={{ fontFamily: "'Share Tech Mono'", fontSize: 13, color: '#00cc33', whiteSpace: 'nowrap' }}>
          {PROMPT}
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            background: 'transparent', border: 'none', outline: 'none',
            color: '#ffffff', fontFamily: "'Share Tech Mono', monospace",
            fontSize: 13, flex: 1, caretColor: '#00ff41',
          }}
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}