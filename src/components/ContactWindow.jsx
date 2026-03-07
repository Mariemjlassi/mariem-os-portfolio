import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { USER } from '../data/portfolioData.js';

// ── EmailJS config ────────────────────────────────────────────
const EJ_SERVICE  = 'service_qo9wyx3';
const EJ_TEMPLATE = 'template_8c9287r';
const EJ_PUBKEY   = 'Qg5tngFpVmUutB5Yo';

// ── Pixel icons ───────────────────────────────────────────────
const PxEmail = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',flexShrink:0}}>
    <rect x="1" y="3" width="14" height="10" fill="#c0c0c0"/>
    <rect x="1" y="3" width="14" height="1" fill="#ffffff"/><rect x="1" y="3" width="1" height="10" fill="#ffffff"/>
    <rect x="14" y="4" width="1" height="9" fill="#808080"/><rect x="2" y="12" width="13" height="1" fill="#808080"/>
    <rect x="2" y="4" width="12" height="8" fill="#ffffff"/>
    <rect x="2" y="4" width="3" height="1" fill="#000080"/><rect x="5" y="5" width="2" height="1" fill="#000080"/>
    <rect x="7" y="6" width="2" height="1" fill="#000080"/><rect x="9" y="5" width="2" height="1" fill="#000080"/>
    <rect x="11" y="4" width="3" height="1" fill="#000080"/>
  </svg>
);
const PxGithub = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',flexShrink:0}}>
    <rect x="5" y="1" width="6" height="2" fill="#404040"/><rect x="3" y="3" width="10" height="2" fill="#404040"/>
    <rect x="2" y="5" width="12" height="6" fill="#404040"/><rect x="3" y="11" width="10" height="2" fill="#404040"/>
    <rect x="4" y="13" width="3" height="2" fill="#404040"/><rect x="9" y="13" width="3" height="2" fill="#404040"/>
    <rect x="4" y="4" width="8" height="7" fill="#808080"/>
    <rect x="5" y="5" width="2" height="3" fill="#c0c0c0"/><rect x="9" y="5" width="2" height="3" fill="#c0c0c0"/>
  </svg>
);
const PxLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',flexShrink:0}}>
    <rect x="1" y="1" width="14" height="14" fill="#0044aa"/>
    <rect x="1" y="1" width="14" height="1" fill="#4488ff"/><rect x="1" y="1" width="1" height="14" fill="#4488ff"/>
    <rect x="3" y="4" width="3" height="8" fill="#ffffff"/><rect x="3" y="3" width="2" height="2" fill="#ffffff"/>
    <rect x="7" y="6" width="2" height="6" fill="#ffffff"/><rect x="7" y="6" width="5" height="2" fill="#ffffff"/>
    <rect x="10" y="8" width="2" height="4" fill="#ffffff"/>
  </svg>
);
const PxLocation = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',flexShrink:0}}>
    <rect x="5" y="1" width="6" height="2" fill="#cc0000"/><rect x="3" y="3" width="10" height="4" fill="#cc0000"/>
    <rect x="2" y="3" width="1" height="4" fill="#ff4444"/><rect x="2" y="7" width="12" height="2" fill="#cc0000"/>
    <rect x="4" y="9" width="8" height="2" fill="#cc0000"/><rect x="6" y="11" width="4" height="2" fill="#cc0000"/>
    <rect x="7" y="13" width="2" height="2" fill="#cc0000"/>
    <rect x="6" y="4" width="4" height="3" fill="#ffffff"/><rect x="7" y="5" width="2" height="1" fill="#cccccc"/>
  </svg>
);
const PxModem = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block'}}>
    <rect x="0" y="2" width="32" height="18" fill="#808080"/>
    <rect x="0" y="2" width="32" height="2" fill="#c0c0c0"/><rect x="0" y="2" width="2" height="18" fill="#c0c0c0"/>
    <rect x="30" y="4" width="2" height="16" fill="#404040"/><rect x="2" y="18" width="30" height="2" fill="#404040"/>
    <rect x="2" y="4" width="18" height="12" fill="#000000"/><rect x="3" y="5" width="16" height="10" fill="#001100"/>
    <rect x="4" y="6" width="8" height="2" fill="#00aa00"/><rect x="4" y="9" width="12" height="1" fill="#005500"/>
    <rect x="4" y="11" width="10" height="1" fill="#005500"/>
    <rect x="22" y="5" width="3" height="2" fill="#00ff00"/>
    <rect x="22" y="9" width="3" height="2" fill="#ffaa00"/>
    <rect x="22" y="13" width="3" height="2" fill="#ff0000"/>
    <rect x="27" y="5" width="3" height="2" fill="#00ff00"/>
    <rect x="27" y="9" width="3" height="2" fill="#005500"/>
    <rect x="12" y="20" width="8" height="3" fill="#404040"/>
    <rect x="13" y="21" width="1" height="2" fill="#c0c0c0"/>
    <rect x="15" y="21" width="1" height="2" fill="#c0c0c0"/>
    <rect x="17" y="21" width="1" height="2" fill="#c0c0c0"/>
  </svg>
);
const PxOK = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',margin:'0 auto 10px'}}>
    <rect x="4" y="4" width="24" height="24" fill="#008000"/>
    <rect x="4" y="4" width="24" height="2" fill="#00cc00"/><rect x="4" y="4" width="2" height="24" fill="#00cc00"/>
    <rect x="8" y="14" width="4" height="4" fill="#fff"/><rect x="12" y="18" width="4" height="4" fill="#fff"/>
    <rect x="16" y="14" width="8" height="4" fill="#fff"/><rect x="20" y="10" width="4" height="4" fill="#fff"/>
  </svg>
);
const PxError = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" shapeRendering="crispEdges" style={{imageRendering:'pixelated',display:'block',margin:'0 auto 10px'}}>
    <rect x="4" y="4" width="24" height="24" fill="#cc0000"/>
    <rect x="4" y="4" width="24" height="2" fill="#ff4444"/><rect x="4" y="4" width="2" height="24" fill="#ff4444"/>
    <rect x="8" y="14" width="16" height="4" fill="#fff"/>
  </svg>
);

// ── Styles ────────────────────────────────────────────────────
const iStyle = {
  height:22, background:'#fff',
  borderTop:'2px solid #808080', borderLeft:'2px solid #808080',
  borderRight:'2px solid #fff', borderBottom:'2px solid #fff',
  padding:'0 6px', outline:'none',
  fontFamily:"'Share Tech Mono', monospace", fontSize:12, width:'100%', cursor:'text',
};
const gStyle = {
  border:'1px solid #808080', padding:'14px 12px 10px',
  marginBottom:12, position:'relative', background:'#d4d0c8',
};
const btnStyle = {
  padding:'4px 14px', background:'#c0c0c0',
  borderTop:'2px solid #fff', borderLeft:'2px solid #fff',
  borderRight:'2px solid #404040', borderBottom:'2px solid #404040',
  fontFamily:"'Share Tech Mono'", fontSize:12, cursor:'pointer',
};
const GL = ({children}) => (
  <div style={{position:'absolute',top:-8,left:8,background:'#c0c0c0',
    padding:'0 4px',fontSize:11,fontWeight:'bold',fontFamily:"'Share Tech Mono'"
  }}>{children}</div>
);

// ── Modem animation ───────────────────────────────────────────
function ModemAnim() {
  const [step, setStep] = useState(0);
  const steps = [
    'ATH0.................. OK',
    'ATZ................... OK',
    `ATDT ${USER.email}`,
    'CONNECT 56600/ARQ/V90',
    'PROTOCOL: LAP-M',
    'COMPRESSION: MNP5',
    'Handshaking...........',
    'Sending packet [1/3].',
    'Sending packet [2/3]..',
    'Sending packet [3/3]...',
    'Transfer complete. OK',
  ];
  useState(() => {
    const iv = setInterval(() => setStep(s => Math.min(s + 1, steps.length - 1)), 380);
    return () => clearInterval(iv);
  });
  return (
    <div style={{background:'#000',color:'#00ff33',padding:8,
      fontFamily:"'Share Tech Mono'",fontSize:11,lineHeight:1.6}}>
      {steps.slice(0, step + 1).map((s, i) => <div key={i}>{s}</div>)}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function ContactWindow() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status,  setStatus]  = useState('idle'); // idle | connecting | sent | error

  const dial = async () => {
    if (!name || !message) return;
    setStatus('connecting');

    try {
      await emailjs.send(
        EJ_SERVICE,
        EJ_TEMPLATE,
        {
          name:    name,
          email:   email,
          title:   subject,   // ← variable "title"
          message: message,
        },
        EJ_PUBKEY
      );
      setStatus('sent');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  // ── Success screen ──────────────────────────────────────────
  if (status === 'sent') return (
    <div style={{padding:24,textAlign:'center',fontFamily:"'Share Tech Mono'",background:'#c0c0c0',height:'100%'}}>
      <PxOK/>
      <div style={{fontFamily:"'VT323'",fontSize:26,color:'#000080',marginBottom:8}}>MESSAGE SENT</div>
      <div style={{fontSize:12,color:'#404040',lineHeight:1.8}}>
        Transfer complete. 0 errors.<br/>
        {USER.name} will reply soon.<br/>
        <a href={`mailto:${USER.email}`} style={{color:'#000080'}}>{USER.email}</a>
      </div>
      <button
        onClick={() => { setStatus('idle'); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
        style={{...btnStyle, marginTop:16}}
      >
        [ New Message ]
      </button>
    </div>
  );

  // ── Error screen ────────────────────────────────────────────
  if (status === 'error') return (
    <div style={{padding:24,textAlign:'center',fontFamily:"'Share Tech Mono'",background:'#c0c0c0',height:'100%'}}>
      <PxError/>
      <div style={{fontFamily:"'VT323'",fontSize:26,color:'#cc0000',marginBottom:8}}>CONNECTION ERROR</div>
      <div style={{fontSize:12,color:'#404040',lineHeight:1.8}}>
        Failed to send message.<br/>
        Please try the direct email below.
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:16}}>
        <button onClick={() => setStatus('idle')} style={btnStyle}>[ Retry ]</button>
        <a
          href={`mailto:${USER.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
          style={{...btnStyle,textDecoration:'none',background:'#000080',color:'#fff',
            border:'2px solid',borderColor:'#4444aa #000044 #000044 #4444aa',
            display:'inline-flex',alignItems:'center'}}
        >
          [ Email Direct ]
        </a>
      </div>
    </div>
  );

  // ── Main form ───────────────────────────────────────────────
  return (
    <div style={{padding:12,overflowY:'auto',height:'100%',
      fontFamily:"'Share Tech Mono'",fontSize:12,background:'#c0c0c0'}}>

      {/* Header */}
      <div style={{textAlign:'center',marginBottom:12}}>
        <div style={{display:'flex',justifyContent:'center',marginBottom:6}}><PxModem/></div>
        <div style={{fontSize:14,fontWeight:'bold'}}>Connect to: {USER.name}</div>
        <div style={{fontSize:11,color:'#555'}}>Modem: 56K V.90 -- Standard Connection</div>
      </div>
      <div style={{height:1,background:'#808080',borderBottom:'1px solid #fff',marginBottom:12}}/>

      {/* Connection Info */}
      <div style={gStyle}>
        <GL>Connection Info</GL>
        {[
          {Icon:PxEmail,    label:'Email',    val:USER.email,    href:`mailto:${USER.email}`},
          {Icon:PxGithub,   label:'GitHub',   val:USER.github,   href:`https://${USER.github}`},
          {Icon: PxLinkedin, label:'LinkedIn', val: 'linkedin.com/in/mariem-jlassi', href: USER.linkedin},
          {Icon:PxLocation, label:'Location', val:USER.location, href:null},
        ].map(row => (
          <div key={row.label} style={{display:'flex',alignItems:'center',gap:8,marginBottom:7}}>
            <row.Icon/>
            <span style={{width:62,color:'#404040',fontSize:11,flexShrink:0}}>{row.label}</span>
            {row.href
              ? <a href={row.href} target="_blank" rel="noreferrer"
                  style={{color:'#000080',fontSize:11,textDecoration:'underline'}}>{row.val}</a>
              : <span style={{color:'#000',fontSize:11}}>{row.val}</span>
            }
          </div>
        ))}
      </div>

      {/* Form */}
      <div style={gStyle}>
        <GL>Send Message</GL>
        {[
          {label:'Your Name *', ph:'Anonymous_95',          val:name,    set:setName,    type:'text'},
          {label:'Your Email',  ph:'anon@aol.com',      val:email,   set:setEmail,   type:'email'},
          {label:'Subject',     ph:"dialup_connection.exe",   val:subject, set:setSubject, type:'text'},
        ].map(f => (
          <div key={f.label} style={{marginBottom:7}}>
            <div style={{fontSize:11,marginBottom:2}}>{f.label}</div>
            <input style={iStyle} type={f.type} value={f.val}
              onChange={e => f.set(e.target.value)} placeholder={f.ph}/>
          </div>
        ))}
        <div style={{marginBottom:7}}>
          <div style={{fontSize:11,marginBottom:2}}>Message *</div>
          <textarea value={message} onChange={e => setMessage(e.target.value)}
            placeholder="Connecting... please wait_"
            style={{...iStyle,height:68,resize:'none',display:'block',
              padding:'4px 6px',lineHeight:1.5}}/>
        </div>
      </div>

      {/* Modem animation while sending */}
      {status === 'connecting' && <div style={{marginBottom:10}}><ModemAnim/></div>}

      {/* Buttons */}
      <div style={{display:'flex',justifyContent:'center',gap:8}}>
        <button
          onClick={dial}
          disabled={status === 'connecting' || !name || !message}
          style={{...btnStyle, opacity:(status==='connecting'||!name||!message)?0.6:1}}
        >
          {status === 'connecting' ? '[ Dialing... ]' : 'Connect & Send '}
        </button>
        <a
          href={`mailto:${USER.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
          style={{...btnStyle,textDecoration:'none',background:'#000080',color:'#fff',
            border:'2px solid',borderColor:'#4444aa #000044 #000044 #4444aa',
            display:'inline-flex',alignItems:'center'}}
        >
          Email Direct 
        </a>
      </div>

    </div>
  );
}