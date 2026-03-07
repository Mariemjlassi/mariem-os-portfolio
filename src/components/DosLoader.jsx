import { useState, useEffect } from 'react';

const STATUSES = [
  'Loading HIMEM.SYS...',
  'Loading EMM386.EXE...',
  'Mounting C:\\MARIEM...',
  'Loading portfolio modules...',
  'Initializing WIN.COM...',
  'Starting desktop services...',
  'Loading MARIEM-OS...',
];

export default function DosLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    let pct = 0;
    let si = 0;
    const iv = setInterval(() => {
      pct += Math.random() * 14 + 5;
      if (pct > 100) pct = 100;
      setProgress(pct);
      si += 0.6;
      setStatusIdx(Math.min(Math.floor(si), STATUSES.length - 1));
      if (pct >= 100) {
        clearInterval(iv);
        setTimeout(onComplete, 500);
      }
    }, 100);
    return () => clearInterval(iv);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#000099',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 20, zIndex: 8000,
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'VT323', monospace", fontSize: 72,
          color: '#fff', letterSpacing: 4,
          textShadow: '4px 4px 0 #000044',
          lineHeight: 1,
        }}>
          MARIEM<span style={{ color: '#aaaaff' }}>OS</span>
        </div>
        <div style={{
          color: '#aaaaff', fontFamily: "'VT323', monospace",
          fontSize: 22, letterSpacing: 5, marginTop: 6,
        }}>
          Version 1.0 — Portfolio Edition
        </div>
      </div>

      {/* Progress */}
      <div style={{ width: 400, textAlign: 'center' }}>
        <div style={{
          width: '100%', height: 22,
          border: '2px solid #888',
          background: '#000044',
          overflow: 'hidden',
          marginBottom: 10,
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'repeating-linear-gradient(90deg, #4444cc 0, #4444cc 10px, #aaaaff 10px, #aaaaff 20px)',
            transition: 'width 0.1s linear',
          }} />
        </div>
        <div style={{
          color: '#aaaaff', fontFamily: "'VT323', monospace",
          fontSize: 18, letterSpacing: 1,
        }}>
          {STATUSES[statusIdx]}
        </div>
      </div>

      <div style={{
        color: 'rgba(170,170,255,0.5)',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 11,
        marginTop: 10,
      }}>
        © 2025 Mariem Corp. All rights reserved.
      </div>
    </div>
  );
}
