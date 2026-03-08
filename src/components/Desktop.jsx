import { useState, useEffect } from 'react';
import {
  IconMyComputer, IconNotepad, IconFolder,
  IconSettings, IconContact, IconMsDos,
  IconRecycleBin
} from './Win95Icons.jsx';

const ICONS = [
  { id: 'explorer', Icon: IconMyComputer, label: 'My Computer'   },
  { id: 'about',    Icon: IconNotepad,    label: 'About_Me.txt'  },
  { id: 'projects', Icon: IconFolder,     label: 'Projects'      },
  { id: 'skills',   Icon: IconSettings,   label: 'Skills.cfg'    },
  { id: 'cv',       Icon: IconNotepad,    label: 'CV.txt'        },
  { id: 'contact',  Icon: IconContact,    label: 'Contact.exe'   },
  { id: 'terminal', Icon: IconMsDos,      label: 'MS-DOS Prompt' },
  { id: 'recycle',  Icon: IconRecycleBin, label: 'Recycle Bin'   },
];

// Desktop icon positions for large screens (2 columns)
const DESKTOP_POS = {
  explorer: { x: 16, y: 20  },
  about:    { x: 16, y: 112 },
  projects: { x: 16, y: 204 },
  skills:   { x: 16, y: 296 },
  cv:       { x: 16, y: 388 },
  contact:  { x: 16, y: 480 },
  terminal: { x: 104, y: 20  },
  recycle:  { x: 104, y: 112 },
};

const isMobile = () => window.innerWidth < 768;

export default function Desktop({ onOpen, children }) {
  const [selected, setSelected] = useState(null);
  const [ctxMenu, setCtxMenu] = useState(null);
  const [ctxTarget, setCtxTarget] = useState(null);
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handler = () => setMobile(isMobile());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleIconClick = (id, e) => { e.stopPropagation(); setSelected(id); };
  const handleIconDblClick = (id, e) => { e.stopPropagation(); onOpen(id); };
  const handleIconTap = (id, e) => { e.stopPropagation(); onOpen(id); };
  const handleBgClick = () => { setSelected(null); setCtxMenu(null); };

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (!e.target.closest('.d-icon')) {
      setCtxMenu({ x: e.clientX, y: e.clientY }); setCtxTarget(null);
    }
  };

  const handleIconContext = (id, e) => {
    e.preventDefault(); e.stopPropagation();
    setSelected(id); setCtxMenu({ x: e.clientX, y: e.clientY }); setCtxTarget(id);
  };

  return (
    <div
      style={{
        position: 'absolute', inset: 0, bottom: 34,
        background: '#008080',
        backgroundImage: 'radial-gradient(circle, rgba(0,100,100,0.25) 1px, transparent 1px)',
        backgroundSize: '4px 4px', overflow: mobile ? 'auto' : 'hidden',
      }}
      onClick={handleBgClick}
      onContextMenu={handleContextMenu}
    >
      {/* Mobile: grid layout */}
      {mobile ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          padding: '8px 4px',
          width: '100%',
        }}>
          {ICONS.map(icon => (
            <MobileIcon
              key={icon.id}
              {...icon}
              selected={selected === icon.id}
              onTap={(e) => handleIconTap(icon.id, e)}
            />
          ))}
        </div>
      ) : (
        /* Desktop: absolute positioned icons */
        ICONS.map(icon => {
          const pos = DESKTOP_POS[icon.id] || { x: 16, y: 20 };
          return (
            <DesktopIcon
              key={icon.id}
              {...icon}
              x={pos.x}
              y={pos.y}
              selected={selected === icon.id}
              onClick={(e) => handleIconClick(icon.id, e)}
              onDblClick={(e) => handleIconDblClick(icon.id, e)}
              onContextMenu={(e) => handleIconContext(icon.id, e)}
            />
          );
        })
      )}

      {children}

      {!mobile && ctxMenu && (
        <ContextMenu x={ctxMenu.x} y={ctxMenu.y} target={ctxTarget}
          onOpen={onOpen} onClose={() => setCtxMenu(null)} />
      )}
    </div>
  );
}

/* Mobile icon — single tap opens */
function MobileIcon({ id, Icon, label, selected, onTap }) {
  return (
    <div
      className="d-icon"
      onClick={onTap}
      style={{
        padding: '8px 4px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        background: selected ? 'rgba(0,0,128,0.35)' : 'transparent',
        borderRadius: 2,
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
      }}
    >
      <div style={{
        width: 36, height: 36,
        imageRendering: 'pixelated',
        filter: selected ? 'brightness(0.7) hue-rotate(180deg) saturate(2)' : 'none',
      }}>
        <Icon scale={1} />
      </div>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace", fontSize: 10,
        color: '#fff',
        textShadow: '1px 1px 1px rgba(0,0,0,0.95)',
        background: selected ? '#000080' : 'transparent',
        padding: '1px 3px', wordBreak: 'break-word',
        lineHeight: 1.3, textAlign: 'center',
      }}>
        {label}
      </div>
    </div>
  );
}

/* Desktop icon — double click opens */
function DesktopIcon({ id, Icon, label, x, y, selected, onClick, onDblClick, onContextMenu }) {
  return (
    <div
      className="d-icon"
      onClick={onClick} onDoubleClick={onDblClick} onContextMenu={onContextMenu}
      style={{
        position: 'absolute', left: x, top: y, width: 76,
        padding: '5px 4px', cursor: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      }}
    >
      <div style={{
        width: 32, height: 32,
        outline: selected ? '1px dotted rgba(255,255,255,0.9)' : 'none',
        outlineOffset: 1,
        filter: selected ? 'brightness(0.55) hue-rotate(180deg) saturate(2)' : 'none',
        imageRendering: 'pixelated',
      }}>
        <Icon scale={1} />
      </div>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace", fontSize: 11,
        color: '#fff',
        textShadow: '1px 1px 1px rgba(0,0,0,0.95)',
        background: selected ? '#000080' : 'transparent',
        padding: '1px 3px', wordBreak: 'break-word',
        lineHeight: 1.3, maxWidth: 72, textAlign: 'center',
      }}>
        {label}
      </div>
    </div>
  );
}

function ContextMenu({ x, y, target, onOpen, onClose }) {
  const items = target ? [
    { label: 'Open', action: () => onOpen(target) }, null,
    { label: 'Send To ▶', action: () => {} }, null,
    { label: 'Create Shortcut', action: () => {} },
    { label: 'Delete', action: () => {} },
    { label: 'Rename', action: () => {} }, null,
    { label: 'Properties', action: () => {} },
  ] : [
    { label: 'Arrange Icons ▶', action: () => {} },
    { label: 'Line up Icons', action: () => {} }, null,
    { label: 'Paste', action: () => {} },
    { label: 'Paste Shortcut', action: () => {}, disabled: true }, null,
    { label: 'New ▶', action: () => {} }, null,
    { label: 'Properties', action: () => onOpen('sysinfo') },
  ];

  const menuH = items.filter(Boolean).length * 24 + items.filter(i => !i).length * 9;
  const top = y + menuH > window.innerHeight - 40 ? y - menuH : y;
  const left = x + 165 > window.innerWidth ? x - 165 : x;

  return (
    <div
      style={{
        position: 'fixed', left, top, zIndex: 800, background: '#c0c0c0',
        borderTop: '2px solid #fff', borderLeft: '2px solid #fff',
        borderRight: '2px solid #404040', borderBottom: '2px solid #404040',
        minWidth: 165, boxShadow: '2px 2px 0 rgba(0,0,0,0.3)',
        fontFamily: "'Share Tech Mono', monospace", fontSize: 12,
      }}
      onClick={e => e.stopPropagation()}
    >
      {items.map((item, i) =>
        !item ? (
          <div key={i} style={{ height: 1, background: '#808080', margin: '2px 4px', borderBottom: '1px solid #fff' }} />
        ) : (
          <div key={i} onClick={() => { item.action(); onClose(); }}
            style={{ padding: '4px 22px 4px 24px', cursor: 'none', color: item.disabled ? '#808080' : '#000' }}
            onMouseEnter={e => { if (!item.disabled) { e.currentTarget.style.background='#000080'; e.currentTarget.style.color='#fff'; }}}
            onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.color=item.disabled?'#808080':'#000'; }}
          >{item.label}</div>
        )
      )}
    </div>
  );
}