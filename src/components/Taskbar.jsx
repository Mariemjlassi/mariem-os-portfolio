import { useState, useEffect } from 'react';
import StartMenu from './StartMenu.jsx';
import {
  IconNotepad, IconFolder, IconSettings,
  IconContact, IconMsDos, IconMyComputer, IconRecycleBin,
} from './Win95Icons.jsx';

// Tiny pixel icons for taskbar buttons (16px)
const TbIcon = ({ Icon }) => (
  <span style={{display:'inline-flex',alignItems:'center',flexShrink:0,imageRendering:'pixelated'}}>
    <Icon scale={0.5}/>
  </span>
);

// Pixel Windows flag for Start button
const WinFlag = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block'}}>
    <rect x="0" y="0" width="7" height="7" fill="#ff0000"/>
    <rect x="8" y="0" width="8" height="7" fill="#00aa00"/>
    <rect x="0" y="8" width="7" height="8" fill="#0000ff"/>
    <rect x="8" y="8" width="8" height="8" fill="#ffcc00"/>
    <rect x="7" y="0" width="2" height="16" fill="#c0c0c0"/>
    <rect x="0" y="7" width="16" height="2" fill="#c0c0c0"/>
  </svg>
);

const WIN_META = {
  about:    { Icon: IconNotepad,     label: 'About_Me.txt' },
  cv:       { Icon: IconNotepad,     label: 'CV.txt'       },
  projects: { Icon: IconFolder,      label: 'Projects'     },
  skills:   { Icon: IconSettings,    label: 'Skills.cfg'   },
  contact:  { Icon: IconContact,     label: 'Contact.exe'  },
  terminal: { Icon: IconMsDos,       label: 'MS-DOS'       },
  explorer: { Icon: IconMyComputer,  label: 'My Computer'  },
  recycle:  { Icon: IconRecycleBin,  label: 'Recycle Bin'  },
};

export default function Taskbar({ openWindows, windows, onTaskClick, onStartItem }) {
  const [time, setTime] = useState('');
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    const update = () => {
      const n = new Date();
      setTime(n.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  const tbBtn = (id) => {
    const win = windows[id];
    const isActive = win?.state === 'normal' || win?.state === 'maximized';
    const meta = WIN_META[id] || { label: id };
    return (
      <button
        key={id}
        onClick={() => onTaskClick(id)}
        style={{
          height: 26, minWidth: 100, maxWidth: 150,
          background: isActive ? '#a0a0a0' : '#c0c0c0',
          borderTop:    isActive ? '2px solid #404040' : '2px solid #fff',
          borderLeft:   isActive ? '2px solid #404040' : '2px solid #fff',
          borderRight:  isActive ? '2px solid #fff'    : '2px solid #404040',
          borderBottom: isActive ? '2px solid #fff'    : '2px solid #404040',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 11, color: '#000', cursor: 'none',
          textAlign: 'left', padding: '0 6px',
          overflow: 'hidden', textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: 4,
        }}
      >
        {meta.Icon && <TbIcon Icon={meta.Icon}/>}
        <span style={{overflow:'hidden',textOverflow:'ellipsis'}}>{meta.label}</span>
      </button>
    );
  };

  return (
    <>
      {showStart && (
        <StartMenu
          onItem={(id) => { setShowStart(false); onStartItem(id); }}
          onClose={() => setShowStart(false)}
        />
      )}

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 34, background: '#c0c0c0',
        borderTop: '2px solid #fff',
        display: 'flex', alignItems: 'center',
        padding: '0 4px', gap: 4, zIndex: 500,
      }}>
        {/* Start button */}
        <button
          onClick={() => setShowStart(s => !s)}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: showStart ? '#a0a0a0' : '#c0c0c0',
            borderTop:    showStart ? '2px solid #404040' : '2px solid #fff',
            borderLeft:   showStart ? '2px solid #404040' : '2px solid #fff',
            borderRight:  showStart ? '2px solid #fff'    : '2px solid #404040',
            borderBottom: showStart ? '2px solid #fff'    : '2px solid #404040',
            padding: '3px 10px 3px 6px',
            fontFamily: "'VT323', monospace",
            fontSize: 18, fontWeight: 'bold',
            color: '#000', cursor: 'none',
            minWidth: 88,
          }}
        >
          <WinFlag/>
          <b>Start</b>
        </button>

        <div style={{ width: 2, height: 24, background: '#808080', borderRight: '1px solid #fff', margin: '0 2px' }} />

        {/* Open window buttons */}
        <div style={{ display: 'flex', gap: 3, flex: 1, overflow: 'hidden' }}>
          {openWindows.map(id => tbBtn(id))}
        </div>

        {/* System tray */}
        <div style={{
          borderTop: '1px solid #808080', borderLeft: '1px solid #808080',
          borderRight: '1px solid #fff', borderBottom: '1px solid #fff',
          padding: '3px 10px', fontSize: 12, color: '#000',
          fontFamily: "'Share Tech Mono'",
          display: 'flex', alignItems: 'center', gap: 8,
          flexShrink: 0,
        }}>
          {/* Network pixel icon */}
          <svg width="14" height="12" viewBox="0 0 14 12" shapeRendering="crispEdges" style={{imageRendering:'pixelated'}}>
            <rect x="5" y="0" width="4" height="3" fill="#808080"/>
            <rect x="6" y="1" width="2" height="2" fill="#00aa00"/>
            <rect x="3" y="3" width="8" height="1" fill="#808080"/>
            <rect x="1" y="4" width="3" height="4" fill="#808080"/>
            <rect x="10" y="4" width="3" height="4" fill="#808080"/>
            <rect x="2" y="5" width="1" height="2" fill="#00aa00"/>
            <rect x="11" y="5" width="1" height="2" fill="#00aa00"/>
            <rect x="0" y="8" width="5" height="3" fill="#808080"/>
            <rect x="9" y="8" width="5" height="3" fill="#808080"/>
          </svg>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
