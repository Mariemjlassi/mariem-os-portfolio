import { useState, useEffect } from 'react';

const BIOS_LINES = [
  { text: '', cls: '' },
  { text: 'MARIEM-BIOS Version 2.4  Copyright (C) 2025 Mariem Corp.', cls: 'white' },
  { text: '', cls: '' },
  { text: 'CPU : Intel Core i9 @ 5.80GHz ......................  OK', cls: 'green', delay: 300 },
  { text: 'RAM : Testing 32768MB...', cls: 'white', delay: 600 },
  { text: '      Bank 0: 16384MB DDR5-6000 CL36', cls: 'gray', delay: 750 },
  { text: '      Bank 1: 16384MB DDR5-6000 CL36 ...............  OK', cls: 'green', delay: 850 },
  { text: 'GPU : NVIDIA RTX 4090 24576MB ......................  OK', cls: 'green', delay: 1050 },
  { text: 'SSD : NVMe Samsung 990 Pro 2TB .....................  OK', cls: 'green', delay: 1200 },
  { text: 'NET : Realtek 2.5GbE Controller ....................  OK', cls: 'green', delay: 1350 },
  { text: '', cls: '', delay: 1400 },
  { text: 'Initializing PCI Express devices...', cls: 'white', delay: 1500 },
  { text: '  [00:01.0] IDE Controller .........................  OK', cls: 'gray', delay: 1620 },
  { text: '  [00:02.0] SATA Controller ........................  OK', cls: 'gray', delay: 1720 },
  { text: '  [00:1c.0] PCIe Root Port .........................  OK', cls: 'gray', delay: 1820 },
  { text: '', cls: '', delay: 1880 },
  { text: 'ACPI: IRQ routing table loaded.', cls: 'gray', delay: 1950 },
  { text: 'USB : 14 ports detected.', cls: 'gray', delay: 2050 },
  { text: '', cls: '', delay: 2100 },
  { text: 'Searching for boot device...', cls: 'yellow', delay: 2200 },
  { text: '  Found: MARIEM-OS v1.0 on NVMe0', cls: 'green', delay: 2450 },
  { text: '', cls: '', delay: 2500 },
  { text: 'Loading MARIEM-OS Boot Sector...', cls: 'yellow', delay: 2600 },
];

const COLOR = {
  white: '#ffffff',
  green: '#00ff00',
  gray: '#888888',
  yellow: '#ffff00',
  red: '#ff4444',
  cyan: '#00ffff',
  '': '#aaaaaa',
};

export default function BiosScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);
  const [blinkOn, setBlinkOn] = useState(true);

  useEffect(() => {
    BIOS_LINES.forEach(({ text, cls, delay = 0 }, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { text, cls }]);
      }, delay || i * 30);
    });
    setTimeout(() => setReady(true), 3000);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const iv = setInterval(() => setBlinkOn(b => !b), 600);
    return () => clearInterval(iv);
  }, [ready]);

  const handleClick = () => ready && onComplete();

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter' && ready) onComplete();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [ready, onComplete]);

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed', inset: 0, background: '#000',
        padding: '20px 28px', fontFamily: "'Share Tech Mono', monospace",
        fontSize: 13, lineHeight: 1.65, display: 'flex',
        flexDirection: 'column', zIndex: 9000, overflow: 'hidden',
        cursor: 'none',
      }}
    >
      {/* ASCII Logo */}
      <div style={{ color: '#00ff00', fontFamily: "'Share Tech Mono', monospace", fontSize: 12, marginBottom: 10 }}>
        {`┌─────────────────────────────────────────────────────────────┐`}<br/>
        {`│  MARIEM-BIOS v2.4  ©2025 Mariem Corp.  EFI/UEFI Compliant  │`}<br/>
        {`└─────────────────────────────────────────────────────────────┘`}
      </div>

      {/* Lines */}
      {lines.map((line, i) => (
        <div key={i} style={{ color: COLOR[line.cls], whiteSpace: 'pre' }}>
          {line.text || '\u00A0'}
        </div>
      ))}

      {/* Enter prompt */}
      {ready && (
        <div style={{
          marginTop: 'auto', textAlign: 'center', padding: 12,
          color: blinkOn ? '#ffffff' : '#000000',
          fontSize: 15,
          transition: 'color 0.1s',
        }}>
          Press <span style={{ color: blinkOn ? '#ffff00' : '#000' }}>[ENTER]</span> or click anywhere to start MARIEM-OS...
        </div>
      )}
    </div>
  );
}
