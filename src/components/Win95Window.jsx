import { useRef, useCallback, useState } from 'react';

const s = {
  win: {
    position: 'absolute',
    background: '#c0c0c0',
    borderTop: '2px solid #ffffff',
    borderLeft: '2px solid #ffffff',
    borderRight: '2px solid #404040',
    borderBottom: '2px solid #404040',
    minWidth: 280,
    minHeight: 160,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
    overflow: 'hidden',
  },
  titleBar: (active) => ({
    height: 22,
    background: active
      ? 'linear-gradient(90deg, #000080 0%, #1084d0 100%)'
      : 'linear-gradient(90deg, #808080 0%, #a0a0a0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 4px 0 6px',
    flexShrink: 0,
    cursor: 'default',
  }),
  titleText: {
    color: '#fff',
    fontFamily: "'VT323', monospace",
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    pointerEvents: 'none',
    letterSpacing: 0.3,
  },
  controls: { display: 'flex', gap: 2 },
  ctrlBtn: {
    width: 16, height: 14,
    background: '#c0c0c0',
    borderTop: '1px solid #ffffff',
    borderLeft: '1px solid #ffffff',
    borderRight: '1px solid #404040',
    borderBottom: '1px solid #404040',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 10, cursor: 'none', color: '#000',
    fontFamily: "'Share Tech Mono', monospace",
    fontWeight: 'bold', lineHeight: 1, flexShrink: 0,
  },
  body: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  menuBar: {
    height: 20,
    background: '#c0c0c0',
    borderBottom: '1px solid #808080',
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px',
    flexShrink: 0,
  },
  menuItem: {
    padding: '2px 8px',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 11,
    cursor: 'none',
    color: '#000',
  },
  statusBar: {
    height: 20,
    background: '#c0c0c0',
    borderTop: '2px solid #808080',
    display: 'flex',
    alignItems: 'center',
    padding: '0 6px',
    gap: 8,
    fontSize: 11,
    color: '#000',
    fontFamily: "'Share Tech Mono', monospace",
    flexShrink: 0,
  },
  sbPane: {
    borderTop: '1px solid #808080',
    borderLeft: '1px solid #808080',
    borderRight: '1px solid #ffffff',
    borderBottom: '1px solid #ffffff',
    padding: '1px 8px',
    height: 16,
    display: 'flex',
    alignItems: 'center',
  },
};

// 8 resize handles: 4 edges + 4 corners
const HANDLES = [
  { id: 'n',  style: { top: 0,    left: 8,    right: 8,   height: 5,  cursor: 'n-resize'  } },
  { id: 's',  style: { bottom: 0, left: 8,    right: 8,   height: 5,  cursor: 's-resize'  } },
  { id: 'w',  style: { left: 0,   top: 8,     bottom: 8,  width: 5,   cursor: 'w-resize'  } },
  { id: 'e',  style: { right: 0,  top: 8,     bottom: 8,  width: 5,   cursor: 'e-resize'  } },
  { id: 'nw', style: { top: 0,    left: 0,    width: 10,  height: 10, cursor: 'nw-resize' } },
  { id: 'ne', style: { top: 0,    right: 0,   width: 10,  height: 10, cursor: 'ne-resize' } },
  { id: 'sw', style: { bottom: 0, left: 0,    width: 10,  height: 10, cursor: 'sw-resize' } },
  { id: 'se', style: { bottom: 0, right: 0,   width: 10,  height: 10, cursor: 'se-resize' } },
];

export default function Win95Window({
  id, title, icon, active,
  winState,
  defaultW = 500, defaultH = 380,
  onFocus, onClose, onMinimize, onMaximize,
  onMove,
  menuItems,
  statusItems,
  children,
  style = {},
}) {
  const winRef = useRef(null);
  // localRect holds live position/size during and after drag/resize
  const [localRect, setLocalRect] = useState(null);

  const state  = winState?.state;
  if (state === 'closed') return null;
  const hidden = state === 'minimized';
  const isMax  = state === 'maximized';

  // Prefer localRect (after user interaction) over winState
  const x = localRect?.x ?? winState?.x ?? 120;
  const y = localRect?.y ?? winState?.y ?? 60;
  const w = localRect?.w ?? winState?.w ?? defaultW;
  const h = localRect?.h ?? winState?.h ?? defaultH;

  const winStyle = {
    ...(isMax
      ? { ...s.win, position: 'fixed', left: 0, top: 0, width: '100vw', height: 'calc(100vh - 34px)' }
      : { ...s.win, left: x, top: y, width: w, height: h }),
    zIndex: winState?.z ?? 200,
    display: hidden ? 'none' : 'flex',   // KEY FIX: never unmount, just hide
    ...style,
  };

  // ── TITLE BAR DRAG ───────────────────────────────────────────────────────
  const handleTitleMouseDown = useCallback((e) => {
    if (e.target.dataset.ctrl) return;
    if (isMax) return;
    e.preventDefault();
    onFocus(id);

    const rect   = winRef.current.getBoundingClientRect();
    const startX = e.clientX, startY = e.clientY;
    const origX  = rect.left,  origY  = rect.top;

    const onMouseMove = (ev) => {
      const nx = origX + ev.clientX - startX;
      const ny = origY + ev.clientY - startY;
      if (winRef.current) {
        winRef.current.style.left = nx + 'px';
        winRef.current.style.top  = ny + 'px';
      }
    };
    const onMouseUp = (ev) => {
      const nx = origX + ev.clientX - startX;
      const ny = origY + ev.clientY - startY;
      setLocalRect(prev => ({ w: prev?.w ?? w, h: prev?.h ?? h, x: nx, y: ny }));
      onMove && onMove(id, nx, ny);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
  }, [id, isMax, w, h, onFocus, onMove]);

  // ── RESIZE ───────────────────────────────────────────────────────────────
  const handleResizeMouseDown = useCallback((e, dir) => {
    if (isMax) return;
    e.preventDefault();
    e.stopPropagation();
    onFocus(id);

    const rect   = winRef.current.getBoundingClientRect();
    const startX = e.clientX, startY = e.clientY;
    const origL  = rect.left,  origT = rect.top;
    const origW  = rect.width, origH = rect.height;
    const MIN_W  = 280, MIN_H = 160;

    const calc = (ev) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      let nl = origL, nt = origT, nw = origW, nh = origH;
      if (dir.includes('e')) nw = Math.max(MIN_W, origW + dx);
      if (dir.includes('s')) nh = Math.max(MIN_H, origH + dy);
      if (dir.includes('w')) { nw = Math.max(MIN_W, origW - dx); nl = origL + origW - nw; }
      if (dir.includes('n')) { nh = Math.max(MIN_H, origH - dy); nt = origT + origH - nh; }
      return { nl, nt, nw, nh };
    };

    const onMouseMove = (ev) => {
      const { nl, nt, nw, nh } = calc(ev);
      if (winRef.current) {
        winRef.current.style.left   = nl + 'px';
        winRef.current.style.top    = nt + 'px';
        winRef.current.style.width  = nw + 'px';
        winRef.current.style.height = nh + 'px';
      }
    };
    const onMouseUp = (ev) => {
      const { nl, nt, nw, nh } = calc(ev);
      setLocalRect({ x: nl, y: nt, w: nw, h: nh });
      onMove && onMove(id, nl, nt);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
  }, [id, isMax, onFocus, onMove]);

  return (
    <div
      ref={winRef}
      style={winStyle}
      onMouseDown={() => onFocus(id)}
    >
      {/* Resize handles — only when not maximized */}
      {!isMax && HANDLES.map(handle => (
        <div
          key={handle.id}
          onMouseDown={e => handleResizeMouseDown(e, handle.id)}
          style={{
            position: 'absolute',
            zIndex: 10,
            ...handle.style,
          }}
        />
      ))}

      {/* Title Bar */}
      <div style={s.titleBar(active)} onMouseDown={handleTitleMouseDown}>
        <div style={s.titleText}>
          {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
          <span>{title}</span>
        </div>
        <div style={s.controls}>
          <div
            style={s.ctrlBtn}
            data-ctrl="1"
            onMouseDown={e => e.stopPropagation()}
            onClick={() => onMinimize(id)}
            title="Minimize"
          >_</div>
          <div
            style={s.ctrlBtn}
            data-ctrl="1"
            onMouseDown={e => e.stopPropagation()}
            onClick={() => onMaximize(id)}
            title="Maximize / Restore"
          >□</div>
          <div
            style={s.ctrlBtn}
            data-ctrl="1"
            onMouseDown={e => e.stopPropagation()}
            onClick={() => onClose(id)}
            title="Close"
            onMouseEnter={e => e.currentTarget.style.background = '#cc0000'}
            onMouseLeave={e => e.currentTarget.style.background = '#c0c0c0'}
          >X</div>
        </div>
      </div>

      {/* Menu bar */}
      {menuItems && (
        <div style={s.menuBar}>
          {menuItems.map(item => (
            <span
              key={item}
              style={s.menuItem}
              onMouseEnter={e => { e.target.style.background = '#000080'; e.target.style.color = '#fff'; }}
              onMouseLeave={e => { e.target.style.background = ''; e.target.style.color = '#000'; }}
            >{item}</span>
          ))}
        </div>
      )}

      {/* Body */}
      <div style={s.body}>
        {children}
      </div>

      {/* Status bar */}
      {statusItems && (
        <div style={s.statusBar}>
          {statusItems.map((item, i) => (
            <div key={i} style={{ ...s.sbPane, marginLeft: item.right ? 'auto' : 0 }}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Win95Window.SBPane = ({ children, right }) => (
  <div style={{ ...s.sbPane, marginLeft: right ? 'auto' : 0 }}>{children}</div>
);