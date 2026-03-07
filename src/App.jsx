import { useState, useCallback, useRef, useEffect } from 'react';

import BiosScreen from './components/BiosScreen.jsx';
import DosLoader from './components/DosLoader.jsx';
import Desktop from './components/Desktop.jsx';
import Taskbar from './components/Taskbar.jsx';
import Win95Window from './components/Win95Window.jsx';
import Terminal from './components/Terminal.jsx';
import AboutWindow from './components/AboutWindow.jsx';
import CvWindow from './components/CvWindow.jsx';
import ProjectsWindow from './components/ProjectsWindow.jsx';
import SkillsWindow from './components/SkillsWindow.jsx';
import ContactWindow from './components/ContactWindow.jsx';
import ShutdownScreen from './components/ShutdownScreen.jsx';
import MsgBox from './components/MsgBox.jsx';
import { useWindowManager } from './hooks/useWindowManager.js';
import { IconFolder, IconNotepad, IconSettings, IconContact, IconMsDos, IconMyComputer, IconRecycleBin, CURSOR_SVG } from './components/Win95Icons.jsx';

// Phase: bios → loader → desktop → shutdown
const PHASES = { BIOS: 'bios', LOADER: 'loader', DESKTOP: 'desktop', SHUTDOWN: 'shutdown' };

const WIN_CONFIG = {
  about:    { title: 'About_Me.txt — Notepad', icon: null, defaultW: 500, defaultH: 420, menu: ['File','Edit','Format','View','Help'], defX: 160, defY: 50 },
  cv:       { title: 'CV.txt — Notepad',       icon: null, defaultW: 480, defaultH: 440, menu: ['File','Edit','View'],                defX: 200, defY: 70 },
  projects: { title: 'Projects — File Explorer',icon: null, defaultW: 620, defaultH: 460, menu: ['File','Edit','View','Tools','Help'], defX: 150, defY: 45 },
  skills:   { title: 'Skills.cfg — Config Editor',icon: null, defaultW: 440, defaultH: 470, menu: ['File','Edit','View'],             defX: 220, defY: 60 },
  contact:  { title: 'Contact.exe — Dial-Up',  icon: null, defaultW: 400, defaultH: 500, menu: null,                                  defX: 250, defY: 55 },
  terminal: { title: 'MS-DOS Prompt',           icon: null, defaultW: 600, defaultH: 360, menu: null,                                  defX: 20, defY: 'bottom' },
  explorer: { title: 'My Computer',             icon: null, defaultW: 540, defaultH: 420, menu: ['File','Edit','View','Help'],         defX: 180, defY: 55 },
  sysinfo:  { title: 'System Information',      icon: null, defaultW: 380, defaultH: 340, menu: null,                                  defX: 220, defY: 80 },
  recycle:  { title: 'Recycle Bin',             icon: null, defaultW: 400, defaultH: 320, menu: ['File','Edit','View'],                defX: 200, defY: 80 },
};

export default function App() {
  const [phase, setPhase] = useState(PHASES.BIOS);
  const [msgBox, setMsgBox] = useState(null); // { title, message, icon, onOk, onCancel, buttons }
  const deskRef = useRef(null);

  const {
    windows, openWindow, closeWindow, minimizeWindow,
    maximizeWindow, focusWindow, moveWindow,
    isOpen, isVisible, resetWindows,
  } = useWindowManager();

  // Custom cursor — pixel-art Win95 dessiné dans Win95Icons.jsx
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'win95-cursor';
    style.textContent = `* { cursor: url("data:image/svg+xml,${CURSOR_SVG}") 0 0, auto !important; }`;
    document.head.appendChild(style);
    return () => document.getElementById('win95-cursor')?.remove();
  }, []);

  // CRT overlay
  useEffect(() => {
    const crt = document.createElement('div');
    crt.style.cssText = `
      position:fixed;inset:0;pointer-events:none;z-index:99999;
      background:repeating-linear-gradient(0deg,rgba(0,0,0,0.025) 0px,rgba(0,0,0,0.025) 1px,transparent 1px,transparent 3px);
    `;
    const vig = document.createElement('div');
    vig.style.cssText = `
      position:fixed;inset:0;pointer-events:none;z-index:99998;
      background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,0.5) 100%);
    `;
    document.body.appendChild(crt);
    document.body.appendChild(vig);
    return () => { crt.remove(); vig.remove(); };
  }, []);

  const showMsg = useCallback((title, message, icon = null, buttons = ['OK'], onOk = null, onCancel = null) => {
    setMsgBox({ title, message, icon, buttons, onOk: onOk || (() => setMsgBox(null)), onCancel: onCancel || (() => setMsgBox(null)) });
  }, []);

  const handleOpen = useCallback((id) => {
    if (id === 'recycle') {
      showMsg('Recycle Bin', 'La corbeille est vide.\n\nAucun fichier supprime recemment.', null);
      return;
    }
    if (id === 'shutdown') {
      showMsg(
        'Shut Down MARIEM-OS',
        'Are you sure you want to shut down\nMARIEM-OS?\n\nAll work will be saved automatically.',
        null,
        ['Yes', 'No'],
        () => { setMsgBox(null); setPhase(PHASES.SHUTDOWN); },
        () => setMsgBox(null),
      );
      return;
    }
    if (id === 'sysinfo') {
      openWindow(id);
      return;
    }
    openWindow(id);
  }, [openWindow, showMsg]);

  const handleMaximize = useCallback((id) => {
    const deskH = (deskRef.current?.offsetHeight || window.innerHeight) - 34;
    const deskW = deskRef.current?.offsetWidth || window.innerWidth;
    maximizeWindow(id, deskW, deskH);
  }, [maximizeWindow]);

  const handleTaskClick = useCallback((id) => {
    const win = windows[id];
    if (!win || win.state === 'closed') return;
    if (win.state === 'minimized') {
      openWindow(id);
    } else {
      minimizeWindow(id);
    }
  }, [windows, openWindow, minimizeWindow]);

  // Open windows list for taskbar
  const openWinList = Object.entries(windows)
    .filter(([, w]) => w.state !== 'closed')
    .map(([id]) => id);

  // Focused window (highest z)
  const focusedId = Object.entries(windows)
    .filter(([, w]) => w.state === 'normal' || w.state === 'maximized')
    .sort(([, a], [, b]) => b.z - a.z)[0]?.[0];

  if (phase === PHASES.BIOS) return <BiosScreen onComplete={() => setPhase(PHASES.LOADER)} />;
  if (phase === PHASES.LOADER) return <DosLoader onComplete={() => setPhase(PHASES.DESKTOP)} />;
  if (phase === PHASES.SHUTDOWN) return <ShutdownScreen onRestart={() => { setPhase(PHASES.BIOS); resetWindows(); }} />;

  return (
    <div ref={deskRef} style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
      {/* Desktop + icons */}
      <Desktop onOpen={handleOpen}>

        {/* Render all windows */}
        {Object.entries(WIN_CONFIG).map(([id, cfg]) => {
          const win = windows[id];
          if (!win || win.state === 'closed') return null;

          const defY = cfg.defY === 'bottom'
            ? (window.innerHeight - 34 - cfg.defaultH - 10)
            : cfg.defY;

          const winState = {
            ...win,
            x: win.x ?? cfg.defX,
            y: win.y ?? defY,
          };

          return (
            <Win95Window
              key={id}
              id={id}
              title={cfg.title}
              icon={cfg.icon}
              active={focusedId === id}
              winState={winState}
              defaultW={cfg.defaultW}
              defaultH={cfg.defaultH}
              menuItems={cfg.menu}
              onFocus={focusWindow}
              onClose={closeWindow}
              onMinimize={minimizeWindow}
              onMaximize={handleMaximize}
              onMove={moveWindow}
            >
              <WindowContent id={id} onOpenWindow={handleOpen} onClose={() => closeWindow(id)} showMsg={showMsg} />
            </Win95Window>
          );
        })}

        {/* System Info window (special inline content) */}
        <SysInfoWindow
          windows={windows}
          focusedId={focusedId}
          focusWindow={focusWindow}
          closeWindow={closeWindow}
          minimizeWindow={minimizeWindow}
          handleMaximize={handleMaximize}
          moveWindow={moveWindow}
        />

      </Desktop>

      {/* Taskbar */}
      <Taskbar
        openWindows={openWinList.filter(id => id !== 'sysinfo')}
        windows={windows}
        onTaskClick={handleTaskClick}
        onStartItem={handleOpen}
      />

      {/* Global MsgBox */}
      {msgBox && (
        <MsgBox
          title={msgBox.title}
          message={msgBox.message}
          icon={msgBox.icon}
          buttons={msgBox.buttons}
          onOk={msgBox.onOk}
          onCancel={msgBox.onCancel}
        />
      )}
    </div>
  );
}

function WindowContent({ id, onOpenWindow, onClose, showMsg }) {
  switch (id) {
    case 'about':    return <AboutWindow />;
    case 'cv':       return <CvWindow />;
    case 'projects': return <ProjectsWindow />;
    case 'skills':   return <SkillsWindow />;
    case 'contact':  return <ContactWindow />;
    case 'terminal': return <Terminal onOpenWindow={onOpenWindow} onClose={onClose} />;
    case 'explorer': return <ExplorerContent onOpenWindow={onOpenWindow} />;
    case 'recycle':  return (
      <div style={{ padding: 20, fontFamily: "'Share Tech Mono'", fontSize: 13, color: '#555', textAlign: 'center', marginTop: 40 }}>
        <div style={{ display:"flex",justifyContent:"center",marginBottom:10 }}><IconRecycleBin scale={1.2}/></div>
        <div>The Recycle Bin is empty.</div>
        <div style={{ fontSize: 11, marginTop: 6, color: '#888' }}>No deleted files found.</div>
      </div>
    );
    default: return null;
  }
}

function ExItemIcon({ id }) {
  const map = { projects:IconFolder, about:IconNotepad, cv:IconNotepad, skills:IconSettings, contact:IconContact, terminal:IconMsDos };
  const IC = map[id] || IconNotepad;
  return <IC scale={1}/>;
}

function ExplorerContent({ onOpenWindow }) {
  const items = [
    { id: 'projects', label: 'Projects', desc: 'Portfolio projects folder' },
    { id: 'about',    icon: null, label: 'About_Me.txt', desc: 'Personal info' },
    { id: 'cv',       icon: null, label: 'CV.txt', desc: 'Curriculum Vitae' },
    { id: 'skills',   icon: null, label: 'Skills.cfg', desc: 'Technical skills' },
    { id: 'contact',  icon: null, label: 'Contact.exe', desc: 'Get in touch' },
    { id: 'terminal', label: 'MS-DOS Prompt', desc: 'Command line' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Toolbar */}
      <div style={{ height: 28, background: '#c0c0c0', borderBottom: '1px solid #808080', display: 'flex', alignItems: 'center', gap: 4, padding: '2px 6px', flexShrink: 0 }}>
        {['← Back', '→ Fwd', '⬆ Up'].map(l => (
          <button key={l} style={{ height: 22, padding: '0 8px', background: '#c0c0c0', borderTop: '1px solid #fff', borderLeft: '1px solid #fff', borderRight: '1px solid #404040', borderBottom: '1px solid #404040', fontFamily: "'Share Tech Mono'", fontSize: 11 }}>{l}</button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ height: 20, background: '#fff', borderTop: '1px solid #808080', borderLeft: '1px solid #808080', padding: '0 8px', fontSize: 11, fontFamily: "'Share Tech Mono'", display: 'flex', alignItems: 'center', minWidth: 180 }}>
          C:\MARIEM
        </div>
      </div>
      {/* Files */}
      <div style={{ flex: 1, background: '#fff', padding: 12, display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'flex-start', overflowY: 'auto' }}>
        {items.map(item => (
          <div
            key={item.id}
            onDoubleClick={() => onOpenWindow(item.id)}
            style={{ width: 72, textAlign: 'center', padding: 4 }}
            onMouseEnter={e => e.currentTarget.style.outline = '1px dotted #808080'}
            onMouseLeave={e => e.currentTarget.style.outline = 'none'}
          >
            <div style={{ imageRendering:"pixelated",display:"flex",justifyContent:"center",width:34,height:34,margin:"0 auto 2px" }}><ExItemIcon id={item.id}/></div>
            <div style={{ fontSize: 10, fontFamily: "'Share Tech Mono'", color: '#000', marginTop: 2, lineHeight: 1.3, wordBreak: 'break-word' }}>{item.label}</div>
          </div>
        ))}
      </div>
      {/* Status */}
      <div style={{ height: 20, background: '#c0c0c0', borderTop: '2px solid #808080', padding: '0 8px', fontSize: 11, fontFamily: "'Share Tech Mono'", display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {items.length} objects — Double-click to open
      </div>
    </div>
  );
}

// System info as separate window
function SysInfoWindow({ windows, focusedId, focusWindow, closeWindow, minimizeWindow, handleMaximize, moveWindow }) {
  const id = 'sysinfo';
  const win = windows[id];
  if (!win || win.state === 'closed') return null;

  const [up, setUp] = useState('0m 0s');
  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => {
      const sec = Math.floor((Date.now() - start) / 1000);
      setUp(`${Math.floor(sec/60)}m ${sec%60}s`);
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  const winState = { ...win, x: win.x ?? 220, y: win.y ?? 80 };

  return (
    <Win95Window
      id={id} title="System Information" icon={null}
      active={focusedId === id}
      winState={winState}
      defaultW={380} defaultH={340}
      onFocus={focusWindow} onClose={closeWindow}
      onMinimize={minimizeWindow} onMaximize={handleMaximize} onMove={moveWindow}
    >
      <div style={{ padding: 16, fontFamily: "'Share Tech Mono'", fontSize: 12, overflowY: 'auto', height: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontFamily: "'VT323'", fontSize: 42, color: '#000080', letterSpacing: 2 }}>MARIEM-OS</div>
          <div style={{ fontSize: 12, color: '#555' }}>Version 1.0.1337 (Build 2025)</div>
        </div>
        <div style={{ height: 1, background: '#808080', marginBottom: 12 }} />
        <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
          {[
            ['Owner', 'Mariem'],
            ['Title', 'Full-Stack Developer'],
            ['Processor', 'Brain @ 3.2GHz (cafe boosted)'],
            ['Memory', 'infini ideas / unlimited creativity'],
            ['System', 'MARIEM-OS v1.0 Portfolio'],
            ['Network', 'TCP/IP -- ONLINE [OK]'],
            ['Uptime', up],
          ].map(([k, v]) => (
            <tr key={k}>
              <td style={{ padding: '3px 0', color: '#555', width: '40%' }}>{k}:</td>
              <td style={{ padding: '3px 0', color: '#000' }}>{v}</td>
            </tr>
          ))}
        </table>
        <div style={{ height: 1, background: '#808080', margin: '12px 0' }} />
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => closeWindow(id)}
            style={{ padding: '4px 28px', background: '#c0c0c0', borderTop: '2px solid #fff', borderLeft: '2px solid #fff', borderRight: '2px solid #404040', borderBottom: '2px solid #404040', fontFamily: "'Share Tech Mono'", fontSize: 12 }}
          >OK</button>
        </div>
      </div>
    </Win95Window>
  );
}