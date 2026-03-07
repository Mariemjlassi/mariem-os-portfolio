const btn = {
  height: 28, padding: '0 24px',
  background: '#c0c0c0',
  borderTop: '2px solid #fff',
  borderLeft: '2px solid #fff',
  borderRight: '2px solid #404040',
  borderBottom: '2px solid #404040',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: 12, cursor: 'none',
  minWidth: 80,
};

export default function MsgBox({ title, message, icon = 'ℹ️', onOk, onCancel, buttons = ['OK'] }) {
  if (!message) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9000, background: 'rgba(0,0,0,0.15)',
    }}
      onClick={e => e.target === e.currentTarget && onCancel && onCancel()}
    >
      <div style={{
        background: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        minWidth: 300, maxWidth: 420,
        boxShadow: '4px 4px 0 rgba(0,0,0,0.4)',
        fontFamily: "'Share Tech Mono', monospace",
      }}>
        {/* Title */}
        <div style={{
          height: 22,
          background: 'linear-gradient(90deg, #000080, #1084d0)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 6px',
        }}>
          <div style={{ color: '#fff', fontSize: 14, fontFamily: "'VT323'", display: 'flex', alignItems: 'center', gap: 5 }}>
            <span>{icon}</span>
            <span>{title || 'MARIEM-OS'}</span>
          </div>
          <div
            style={{
              width: 16, height: 14, background: '#c0c0c0',
              borderTop: '1px solid #fff', borderLeft: '1px solid #fff',
              borderRight: '1px solid #404040', borderBottom: '1px solid #404040',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, cursor: 'none', fontWeight: 'bold',
            }}
            onClick={onCancel || onOk}
            onMouseEnter={e => e.target.style.background = '#cc0000'}
            onMouseLeave={e => e.target.style.background = '#c0c0c0'}
          >✕</div>
        </div>

        {/* Body */}
        <div style={{ padding: '20px 20px 14px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 36, lineHeight: 1, flexShrink: 0 }}>{icon}</div>
          <div style={{ fontSize: 12, color: '#000', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{message}</div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '8px 20px 16px' }}>
          {buttons.includes('OK') && (
            <button style={btn} onClick={onOk}>OK</button>
          )}
          {buttons.includes('Cancel') && (
            <button style={btn} onClick={onCancel}>Cancel</button>
          )}
          {buttons.includes('Yes') && (
            <button style={btn} onClick={onOk}>Yes</button>
          )}
          {buttons.includes('No') && (
            <button style={btn} onClick={onCancel}>No</button>
          )}
        </div>
      </div>
    </div>
  );
}
