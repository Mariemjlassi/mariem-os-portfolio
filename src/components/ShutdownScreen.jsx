import { useEffect, useState } from 'react';

export default function ShutdownScreen({ onRestart }) {
  const [phase, setPhase] = useState('saving'); // saving | shutdown | off
  const [dots, setDots] = useState('');

  useEffect(() => {
    const iv = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 400);
    const t1 = setTimeout(() => setPhase('shutdown'), 2500);
    const t2 = setTimeout(() => setPhase('off'), 5000);
    return () => { clearInterval(iv); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'off') {
    return (
      <div
        style={{
          position: 'fixed', inset: 0, background: '#000',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, cursor: 'none',
        }}
        onClick={onRestart}
      >
        <div style={{
          color: '#333', fontFamily: "'Share Tech Mono'", fontSize: 13,
          textAlign: 'center', lineHeight: 2,
        }}>
          <div style={{ color: '#555', marginBottom: 20, fontSize: 12 }}>
            It is now safe to turn off your computer.
          </div>
          <div style={{ color: '#222', fontSize: 24, fontFamily: "'VT323'" }}>
            ■
          </div>
          <div
            style={{ color: '#444', marginTop: 30, fontSize: 12, cursor: 'pointer' }}
            onClick={onRestart}
          >
            [ Click to restart MARIEM-OS ]
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#000080',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, cursor: 'none',
      fontFamily: "'Share Tech Mono', monospace",
    }}>
      <div style={{
        background: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        padding: '20px 40px',
        textAlign: 'center',
        minWidth: 320,
      }}>
        <div style={{ marginBottom: 12, display:'flex', justifyContent:'center' }}>
          {phase === 'saving' ? (
            <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges" style={{imageRendering:'pixelated'}}>
              <rect x="2" y="2" width="28" height="28" fill="#808080"/>
              <rect x="2" y="2" width="28" height="2" fill="#c0c0c0"/>
              <rect x="2" y="2" width="2" height="28" fill="#c0c0c0"/>
              <rect x="28" y="4" width="2" height="26" fill="#404040"/>
              <rect x="4" y="28" width="26" height="2" fill="#404040"/>
              <rect x="4" y="4" width="24" height="24" fill="#c0c0c0"/>
              <rect x="6" y="4" width="16" height="10" fill="#808080"/>
              <rect x="8" y="5" width="10" height="8" fill="#c0c0c0"/>
              <rect x="15" y="5" width="3" height="6" fill="#808080"/>
              <rect x="6" y="18" width="20" height="8" fill="#808080"/>
              <rect x="8" y="20" width="16" height="5" fill="#c0c0c0"/>
              <rect x="11" y="21" width="10" height="3" fill="#808080"/>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges" style={{imageRendering:'pixelated'}}>
              <rect x="13" y="2" width="6" height="14" fill="#cc0000"/>
              <rect x="13" y="2" width="6" height="2" fill="#ff4444"/>
              <rect x="7" y="8" width="4" height="4" fill="#cc0000"/>
              <rect x="21" y="8" width="4" height="4" fill="#cc0000"/>
              <rect x="4" y="12" width="4" height="8" fill="#cc0000"/>
              <rect x="24" y="12" width="4" height="8" fill="#cc0000"/>
              <rect x="6" y="20" width="4" height="4" fill="#cc0000"/>
              <rect x="22" y="20" width="4" height="4" fill="#cc0000"/>
              <rect x="8" y="24" width="16" height="4" fill="#cc0000"/>
              <rect x="12" y="10" width="8" height="8" fill="#ff4444"/>
            </svg>
          )}
        </div>
        <div style={{ fontSize: 14, color: '#000', marginBottom: 8 }}>
          {phase === 'saving' ? 'Saving your settings' : 'Shutting down MARIEM-OS'}
          {dots}
        </div>
        <div style={{ fontSize: 12, color: '#555', marginBottom: 16 }}>
          {phase === 'saving'
            ? 'Please wait while MARIEM-OS saves your configuration.'
            : 'Windows is shutting down. Please wait...'}
        </div>

        {/* Progress bar */}
        <div style={{
          height: 14, background: '#808080',
          borderTop: '2px solid #404040', borderLeft: '2px solid #404040',
          borderRight: '2px solid #fff', borderBottom: '2px solid #fff',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            background: 'repeating-linear-gradient(90deg, #000080 0, #000080 10px, #4444cc 10px, #4444cc 20px)',
            animation: 'slide 0.8s linear infinite',
            width: '40%',
          }} />
        </div>
      </div>

      <style>{`@keyframes slide { from { background-position: 0 0 } to { background-position: 40px 0 } }`}</style>
    </div>
  );
}
