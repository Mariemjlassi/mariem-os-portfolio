import { useEffect, useRef } from 'react';
import { USER } from '../data/portfolioData.js';
import {
  IconNotepad, IconFolder, IconSettings,
  IconContact, IconMsDos, IconMyComputer,
  IconHelp, IconRecycleBin
} from './Win95Icons.jsx';

// Shutdown icon SVG inline
const IconPower = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{imageRendering:'pixelated'}} shapeRendering="crispEdges">
    <rect x="6" y="1" width="4" height="7" fill="#ff4444"/>
    <rect x="6" y="1" width="4" height="1" fill="#ff8888"/>
    <rect x="3" y="4" width="2" height="2" fill="#ff4444"/>
    <rect x="11" y="4" width="2" height="2" fill="#ff4444"/>
    <rect x="2" y="6" width="2" height="4" fill="#ff4444"/>
    <rect x="12" y="6" width="2" height="4" fill="#ff4444"/>
    <rect x="3" y="10" width="2" height="2" fill="#ff4444"/>
    <rect x="11" y="10" width="2" height="2" fill="#ff4444"/>
    <rect x="4" y="12" width="8" height="2" fill="#ff4444"/>
  </svg>
);

const IconSysInfo = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{imageRendering:'pixelated'}} shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="10" fill="#808080"/>
    <rect x="2" y="2" width="12" height="8"  fill="#000080"/>
    <rect x="3" y="3" width="10" height="6"  fill="#000066"/>
    <rect x="4" y="4" width="2"  height="4"  fill="#ffffff"/>
    <rect x="4" y="4" width="4"  height="1"  fill="#ffffff"/>
    <rect x="4" y="7" width="4"  height="1"  fill="#ffffff"/>
    <rect x="1" y="11" width="14" height="2" fill="#808080"/>
    <rect x="5" y="13" width="6"  height="2" fill="#808080"/>
    <rect x="3" y="15" width="10" height="1" fill="#808080"/>
  </svg>
);

const ITEMS = [
  { id: 'about',    IconComp: IconNotepad,    label: 'About_Me.txt',  small: false },
  { id: 'projects', IconComp: IconFolder,     label: 'Projects',      small: false },
  { id: 'skills',   IconComp: IconSettings,   label: 'Skills.cfg',    small: false },
  { id: 'cv',       IconComp: IconNotepad,    label: 'CV.txt',        small: false },
  { id: 'contact',  IconComp: IconContact,    label: 'Contact.exe',   small: false },
  { separator: true },
  { id: 'terminal', IconComp: IconMsDos,      label: 'MS-DOS Prompt', small: false },
  { id: 'explorer', IconComp: IconMyComputer, label: 'My Computer',   small: false },
  { id: 'sysinfo',  IconComp: IconSysInfo,    label: 'System Info',   small: true  },
  { separator: true },
  { id: 'shutdown', IconComp: IconPower,      label: 'Shut Down...',  small: true  },
];

export default function StartMenu({ onItem, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    setTimeout(() => document.addEventListener('mousedown', handler), 100);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute', bottom: 34, left: 0,
        width: 220, background: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        zIndex: 600,
        boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
      }}
    >
      {/* Side strip */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 28,
        background: '#000080',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        paddingBottom: 6,
      }}>
        <span style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontFamily: "'VT323', monospace",
          fontSize: 18, color: 'rgba(255,255,255,0.5)',
          letterSpacing: 3,
        }}>
          MARIEM-OS
        </span>
      </div>

      {/* Items */}
      <div style={{ marginLeft: 28, paddingTop: 4, paddingBottom: 4 }}>
        {ITEMS.map((item, i) =>
          item.separator ? (
            <div key={i} style={{
              height: 1, background: '#808080',
              margin: '2px 4px 2px 8px',
              borderBottom: '1px solid #fff',
            }} />
          ) : (
            <div
              key={item.id}
              onClick={() => onItem(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '5px 14px 5px 10px',
                fontFamily: "'Share Tech Mono'", fontSize: 12,
                color: '#000', cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#000080'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#000'; }}
            >
              <div style={{
                width: item.small ? 16 : 24, height: item.small ? 16 : 24,
                flexShrink: 0, imageRendering: 'pixelated',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {item.small ? <item.IconComp /> : <item.IconComp scale={0.75} />}
              </div>
              <span>{item.label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
