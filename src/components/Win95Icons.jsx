// ============================================================
//   ICÔNES PIXEL-ART WINDOWS 95 — Dessinées à la main
//  Chaque icône = grille 32x32 pixels, palette Win95 authentique
// ============================================================

// Win95 palette authentique
const C = {
  w:   '#ffffff',
  lg:  '#dfdfdf',
  mg:  '#c0c0c0',
  dg:  '#808080',
  xdg: '#404040',
  blk: '#000000',
  t:   'transparent',
  nb:  '#000080',
  mb:  '#0000aa',
  lb:  '#0000ff',
  sky: '#00aaff',
  ice: '#aaddff',
  yw:  '#ffff00',
  gld: '#ffcc00',
  tan: '#c8a050',
  brn: '#804000',
  dbrn:'#503010',
  grn: '#008000',
  lgrn:'#00c000',
  teal:'#008080',
  red: '#ff0000',
  dred:'#800000',
  org: '#ff8000',
  pur: '#800080',
  hi:  '#ffffff',
  sh:  '#808080',
  dsh: '#404040',
};

// ═══════════════════════════════════════════
//  MY COMPUTER
// ═══════════════════════════════════════════
export function IconMyComputer({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="1" y="2" width="22" height="14" fill={C.dg}/>
      <rect x="2" y="3" width="20" height="12" fill={C.lg}/>
      <rect x="3" y="4" width="17" height="10" fill={C.nb}/>
      <rect x="3" y="4" width="17" height="1" fill="#0000dd"/>
      <rect x="3" y="4" width="1" height="10" fill="#0000dd"/>
      <rect x="1" y="16" width="22" height="2" fill={C.dg}/>
      <rect x="2" y="17" width="20" height="1" fill={C.lg}/>
      <rect x="8" y="18" width="6" height="2" fill={C.dg}/>
      <rect x="9" y="19" width="4" height="1" fill={C.lg}/>
      <rect x="5" y="20" width="12" height="2" fill={C.dg}/>
      <rect x="6" y="20" width="10" height="1" fill={C.lg}/>
      <rect x="17" y="15" width="10" height="14" fill={C.dg}/>
      <rect x="18" y="16" width="8" height="12" fill={C.lg}/>
      <rect x="19" y="17" width="6" height="2" fill={C.dg}/>
      <rect x="20" y="18" width="4" height="1" fill={C.xdg}/>
      <rect x="19" y="20" width="6" height="2" fill={C.dg}/>
      <rect x="20" y="21" width="4" height="1" fill={C.xdg}/>
      <rect x="23" y="24" width="2" height="2" fill={C.grn}/>
      <rect x="23" y="2" width="1" height="14" fill={C.blk}/>
      <rect x="1" y="16" width="23" height="1" fill={C.blk}/>
      <rect x="27" y="15" width="1" height="14" fill={C.blk}/>
      <rect x="17" y="29" width="11" height="1" fill={C.blk}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  FOLDER
// ═══════════════════════════════════════════
export function IconFolder({ scale = 1, open = false }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="1" y="8" width="8" height="3" fill="#c8a050"/>
      <rect x="1" y="8" width="8" height="1" fill="#e0c060"/>
      <rect x="1" y="10" width="28" height="18" fill="#c8a050"/>
      <rect x="1" y="10" width="28" height="2" fill="#e0c060"/>
      <rect x="1" y="10" width="2" height="18" fill="#e0c060"/>
      {open && <>
        <rect x="5" y="15" width="20" height="2" fill="#e0c060"/>
        <rect x="5" y="19" width="18" height="2" fill="#e0c060"/>
        <rect x="5" y="23" width="14" height="2" fill="#e0c060"/>
      </>}
      <rect x="2" y="28" width="28" height="1" fill={C.blk}/>
      <rect x="29" y="10" width="1" height="19" fill={C.blk}/>
      <rect x="1" y="27" width="28" height="1" fill="#806030"/>
      <rect x="28" y="10" width="1" height="17" fill="#806030"/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  NOTEPAD
// ═══════════════════════════════════════════
export function IconNotepad({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="4" y="2" width="20" height="26" fill={C.w}/>
      <rect x="18" y="2" width="6" height="6" fill={C.lg}/>
      <rect x="18" y="2" width="6" height="1" fill={C.dg}/>
      <rect x="23" y="2" width="1" height="6" fill={C.dg}/>
      <rect x="18" y="7" width="6" height="1" fill={C.dg}/>
      <polygon points="18,2 24,2 24,8" fill={C.lg}/>
      <polygon points="18,2 18,8 24,8" fill={C.w}/>
      <line x1="18" y1="2" x2="24" y2="8" stroke={C.dg} strokeWidth="1"/>
      <rect x="7" y="10" width="12" height="2" fill={C.nb}/>
      <rect x="7" y="14" width="14" height="1" fill={C.dg}/>
      <rect x="7" y="16" width="11" height="1" fill={C.dg}/>
      <rect x="7" y="18" width="13" height="1" fill={C.dg}/>
      <rect x="7" y="20" width="9" height="1" fill={C.dg}/>
      <rect x="7" y="22" width="12" height="1" fill={C.dg}/>
      <rect x="4" y="2" width="1" height="26" fill={C.dg}/>
      <rect x="4" y="27" width="20" height="1" fill={C.dg}/>
      <rect x="23" y="8" width="1" height="20" fill={C.dg}/>
      <rect x="5" y="28" width="20" height="2" fill={C.dg}/>
      <rect x="24" y="3" width="2" height="26" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  RECYCLE BIN
// ═══════════════════════════════════════════
export function IconRecycleBin({ scale = 1, full = false }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="5" y="4" width="22" height="4" fill={C.lg}/>
      <rect x="5" y="4" width="22" height="1" fill={C.w}/>
      <rect x="5" y="4" width="1" height="4" fill={C.w}/>
      <rect x="26" y="4" width="1" height="4" fill={C.dg}/>
      <rect x="5" y="7" width="22" height="1" fill={C.dg}/>
      <rect x="13" y="2" width="6" height="3" fill={C.lg}/>
      <rect x="13" y="2" width="6" height="1" fill={C.w}/>
      <rect x="13" y="4" width="6" height="1" fill={C.dg}/>
      <rect x="13" y="2" width="1" height="3" fill={C.w}/>
      <rect x="18" y="2" width="1" height="3" fill={C.dg}/>
      <rect x="6" y="8" width="20" height="20" fill={C.lg}/>
      <rect x="6" y="8" width="1" height="20" fill={C.w}/>
      <rect x="6" y="8" width="20" height="1" fill={C.w}/>
      <rect x="25" y="8" width="1" height="20" fill={C.dg}/>
      <rect x="6" y="27" width="20" height="1" fill={C.dg}/>
      <rect x="9"  y="10" width="2" height="16" fill={C.dg}/>
      <rect x="13" y="10" width="2" height="16" fill={C.dg}/>
      <rect x="17" y="10" width="2" height="16" fill={C.dg}/>
      <rect x="21" y="10" width="2" height="16" fill={C.dg}/>
      <rect x="7" y="9" width="18" height="1" fill={C.w}/>
      {full && <>
        <rect x="8" y="12" width="6" height="4" fill={C.w}/>
        <rect x="16" y="14" width="7" height="5" fill={C.w}/>
        <rect x="10" y="18" width="8" height="4" fill={C.w}/>
        <rect x="9"  y="13" width="3" height="1" fill={C.dg}/>
        <rect x="17" y="15" width="4" height="1" fill={C.dg}/>
      </>}
      <rect x="7" y="28" width="20" height="2" fill={C.dg}/>
      <rect x="26" y="9" width="2" height="20" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  MS-DOS
// ═══════════════════════════════════════════
export function IconMsDos({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="1" y="3" width="28" height="22" fill={C.dg}/>
      <rect x="2" y="4" width="26" height="20" fill={C.xdg}/>
      <rect x="3" y="5" width="24" height="17" fill={C.blk}/>
      <rect x="5" y="8"  width="3" height="1" fill={C.lgrn}/>
      <rect x="5" y="9"  width="1" height="3" fill={C.lgrn}/>
      <rect x="5" y="12" width="3" height="1" fill={C.lgrn}/>
      <rect x="9"  y="9"  width="1" height="1" fill={C.lgrn}/>
      <rect x="9"  y="11" width="1" height="1" fill={C.lgrn}/>
      <rect x="11" y="8"  width="1" height="1" fill={C.lgrn}/>
      <rect x="12" y="9"  width="1" height="2" fill={C.lgrn}/>
      <rect x="13" y="11" width="1" height="1" fill={C.lgrn}/>
      <rect x="15" y="8"  width="1" height="2" fill={C.lgrn}/>
      <rect x="16" y="10" width="1" height="1" fill={C.lgrn}/>
      <rect x="15" y="11" width="1" height="2" fill={C.lgrn}/>
      <rect x="18" y="8" width="3" height="5" fill={C.lgrn}/>
      <rect x="5" y="15" width="8" height="1" fill="#004400"/>
      <rect x="5" y="17" width="12" height="1" fill="#004400"/>
      <rect x="1" y="25" width="28" height="2" fill={C.dg}/>
      <rect x="11" y="27" width="10" height="2" fill={C.dg}/>
      <rect x="7"  y="29" width="18" height="2" fill={C.dg}/>
      <rect x="7"  y="29" width="18" height="1" fill={C.mg}/>
      <rect x="2" y="25" width="27" height="1" fill={C.blk}/>
      <rect x="29" y="3" width="1" height="23" fill={C.blk}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  SETTINGS
// ═══════════════════════════════════════════
export function IconSettings({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="1" y="2" width="13" height="28" fill={C.lg}/>
      <rect x="1" y="2" width="13" height="2" fill={C.nb}/>
      <rect x="1" y="2" width="1" height="28" fill={C.w}/>
      <rect x="1" y="2" width="13" height="1" fill={C.w}/>
      <rect x="13" y="3" width="1" height="27" fill={C.dg}/>
      <rect x="2" y="29" width="12" height="1" fill={C.dg}/>
      <rect x="3" y="7"  width="8" height="2" fill={C.dg}/>
      <rect x="3" y="7"  width="3" height="2" fill={C.nb}/>
      <rect x="3" y="12" width="8" height="2" fill={C.dg}/>
      <rect x="3" y="12" width="6" height="2" fill={C.nb}/>
      <rect x="3" y="17" width="8" height="2" fill={C.dg}/>
      <rect x="3" y="17" width="4" height="2" fill={C.nb}/>
      <rect x="3" y="22" width="8" height="2" fill={C.dg}/>
      <rect x="3" y="22" width="7" height="2" fill={C.nb}/>
      <rect x="17" y="8"  width="6" height="2" fill={C.dg}/>
      <rect x="15" y="10" width="10" height="8" fill={C.dg}/>
      <rect x="16" y="11" width="8" height="6" fill={C.mg}/>
      <rect x="17" y="12" width="6" height="4" fill={C.lg}/>
      <rect x="19" y="11" width="2" height="8" fill={C.dg}/>
      <rect x="15" y="13" width="10" height="2" fill={C.dg}/>
      <rect x="17" y="18" width="6" height="2" fill={C.dg}/>
      <rect x="18" y="13" width="4" height="2" fill={C.xdg}/>
      <rect x="21" y="20" width="3" height="9" fill={C.dg}/>
      <rect x="21" y="20" width="3" height="1" fill={C.mg}/>
      <rect x="20" y="22" width="5" height="2" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  CONTACT
// ═══════════════════════════════════════════
export function IconContact({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="4" y="6" width="24" height="20" fill={C.mg}/>
      <rect x="4" y="6" width="24" height="1" fill={C.w}/>
      <rect x="4" y="6" width="1" height="20" fill={C.w}/>
      <rect x="27" y="7" width="1" height="19" fill={C.dg}/>
      <rect x="5" y="25" width="23" height="1" fill={C.dg}/>
      <rect x="6" y="8" width="20" height="8" fill={C.nb}/>
      <rect x="6" y="8" width="20" height="1" fill="#0000aa"/>
      <rect x="6" y="8" width="1" height="8" fill="#0000aa"/>
      <rect x="8"  y="10" width="12" height="1" fill={C.w}/>
      <rect x="8"  y="12" width="8"  height="1" fill="#8888ff"/>
      <rect x="8"  y="14" width="10" height="1" fill="#8888ff"/>
      <rect x="7"  y="18" width="4" height="3" fill={C.lg}/>
      <rect x="13" y="18" width="4" height="3" fill={C.lg}/>
      <rect x="19" y="18" width="4" height="3" fill={C.lg}/>
      <rect x="7"  y="18" width="4" height="1" fill={C.w}/>
      <rect x="13" y="18" width="4" height="1" fill={C.w}/>
      <rect x="19" y="18" width="4" height="1" fill={C.w}/>
      <rect x="10" y="19" width="1" height="2" fill={C.dg}/>
      <rect x="16" y="19" width="1" height="2" fill={C.dg}/>
      <rect x="22" y="19" width="1" height="2" fill={C.dg}/>
      <rect x="14" y="19" width="2" height="2" fill={C.nb}/>
      <rect x="5" y="26" width="24" height="2" fill={C.dg}/>
      <rect x="28" y="7" width="2" height="21" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  INTERNET EXPLORER
// ═══════════════════════════════════════════
export function IconInternet({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="7"  y="4"  width="12" height="2"  fill="#0044cc"/>
      <rect x="5"  y="6"  width="16" height="2"  fill="#0044cc"/>
      <rect x="4"  y="8"  width="18" height="12" fill="#0044cc"/>
      <rect x="5"  y="20" width="16" height="2"  fill="#0044cc"/>
      <rect x="7"  y="22" width="12" height="2"  fill="#0044cc"/>
      <rect x="8"  y="6"  width="6"  height="3"  fill="#228822"/>
      <rect x="6"  y="9"  width="4"  height="4"  fill="#228822"/>
      <rect x="12" y="10" width="5"  height="3"  fill="#228822"/>
      <rect x="10" y="14" width="8"  height="4"  fill="#228822"/>
      <rect x="16" y="18" width="4"  height="3"  fill="#228822"/>
      <rect x="4"  y="13" width="18" height="1"  fill="#0000aa"/>
      <rect x="13" y="4"  width="1"  height="20" fill="#0000aa"/>
      <rect x="7"  y="5"  width="4"  height="2"  fill="#aaccff"/>
      <rect x="5"  y="7"  width="2"  height="4"  fill="#aaccff"/>
      <rect x="18" y="18" width="2"  height="2"  fill={C.dg}/>
      <rect x="20" y="20" width="2"  height="2"  fill={C.dg}/>
      <rect x="22" y="22" width="3"  height="3"  fill="#cc0000"/>
      <rect x="21" y="21" width="2"  height="2"  fill={C.dg}/>
      <rect x="17" y="14" width="8"  height="1"  fill={C.dg}/>
      <rect x="17" y="20" width="8"  height="1"  fill={C.dg}/>
      <rect x="16" y="15" width="1"  height="5"  fill={C.dg}/>
      <rect x="25" y="15" width="1"  height="5"  fill={C.dg}/>
      <rect x="18" y="15" width="6"  height="5"  fill="#ccddff"/>
      <rect x="18" y="15" width="3"  height="2"  fill={C.w}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  INBOX
// ═══════════════════════════════════════════
export function IconInbox({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="2"  y="18" width="28" height="10" fill={C.mg}/>
      <rect x="2"  y="18" width="28" height="1"  fill={C.w}/>
      <rect x="2"  y="18" width="1"  height="10" fill={C.w}/>
      <rect x="29" y="19" width="1"  height="9"  fill={C.dg}/>
      <rect x="3"  y="27" width="27" height="1"  fill={C.dg}/>
      <rect x="5"  y="8"  width="22" height="14" fill={C.w}/>
      <rect x="5"  y="8"  width="22" height="1"  fill={C.dg}/>
      <rect x="5"  y="8"  width="1"  height="14" fill={C.w}/>
      <rect x="26" y="9"  width="1"  height="13" fill={C.dg}/>
      <rect x="6"  y="21" width="21" height="1"  fill={C.dg}/>
      <rect x="5"  y="8"  width="11" height="7"  fill="#ddeeff"/>
      <rect x="16" y="8"  width="11" height="7"  fill="#ddeeff"/>
      <rect x="6"  y="9"  width="2"  height="1"  fill={C.nb}/>
      <rect x="8"  y="10" width="2"  height="1"  fill={C.nb}/>
      <rect x="10" y="11" width="2"  height="1"  fill={C.nb}/>
      <rect x="12" y="12" width="4"  height="1"  fill={C.nb}/>
      <rect x="16" y="11" width="2"  height="1"  fill={C.nb}/>
      <rect x="18" y="10" width="2"  height="1"  fill={C.nb}/>
      <rect x="20" y="9"  width="2"  height="1"  fill={C.nb}/>
      <rect x="22" y="8"  width="2"  height="1"  fill={C.nb}/>
      <rect x="8"  y="16" width="15" height="1"  fill={C.dg}/>
      <rect x="8"  y="18" width="12" height="1"  fill={C.dg}/>
      <rect x="3"  y="28" width="28" height="2"  fill={C.dg}/>
      <rect x="30" y="19" width="1"  height="10" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  NETWORK
// ═══════════════════════════════════════════
export function IconNetwork({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="0"  y="4"  width="13" height="10" fill={C.dg}/>
      <rect x="1"  y="5"  width="11" height="8"  fill={C.nb}/>
      <rect x="2"  y="6"  width="8"  height="5"  fill="#000066"/>
      <rect x="2"  y="6"  width="4"  height="2"  fill={C.nb}/>
      <rect x="0"  y="14" width="13" height="2"  fill={C.dg}/>
      <rect x="3"  y="16" width="4"  height="2"  fill={C.dg}/>
      <rect x="1"  y="18" width="8"  height="1"  fill={C.dg}/>
      <rect x="19" y="4"  width="13" height="10" fill={C.dg}/>
      <rect x="20" y="5"  width="11" height="8"  fill={C.nb}/>
      <rect x="21" y="6"  width="8"  height="5"  fill="#000066"/>
      <rect x="25" y="6"  width="4"  height="2"  fill={C.nb}/>
      <rect x="19" y="14" width="13" height="2"  fill={C.dg}/>
      <rect x="24" y="16" width="4"  height="2"  fill={C.dg}/>
      <rect x="23" y="18" width="8"  height="1"  fill={C.dg}/>
      <rect x="13" y="10" width="2"  height="2"  fill="#cc8800"/>
      <rect x="15" y="11" width="2"  height="1"  fill="#cc8800"/>
      <rect x="17" y="10" width="2"  height="2"  fill="#cc8800"/>
      <rect x="13" y="20" width="6"  height="4"  fill={C.mg}/>
      <rect x="13" y="20" width="6"  height="1"  fill={C.w}/>
      <rect x="13" y="20" width="1"  height="4"  fill={C.w}/>
      <rect x="18" y="21" width="1"  height="3"  fill={C.dg}/>
      <rect x="14" y="23" width="5"  height="1"  fill={C.dg}/>
      <rect x="15" y="21" width="1"  height="1"  fill={C.grn}/>
      <rect x="17" y="21" width="1"  height="1"  fill={C.grn}/>
      <rect x="5"  y="19" width="1"  height="3"  fill="#cc8800"/>
      <rect x="6"  y="22" width="8"  height="1"  fill="#cc8800"/>
      <rect x="25" y="19" width="1"  height="3"  fill="#cc8800"/>
      <rect x="19" y="22" width="7"  height="1"  fill="#cc8800"/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  HELP
// ═══════════════════════════════════════════
export function IconHelp({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="14" y="4"  width="4"  height="24" fill={C.dg}/>
      <rect x="3"  y="4"  width="12" height="24" fill={C.w}/>
      <rect x="3"  y="27" width="12" height="1"  fill={C.dg}/>
      <rect x="5"  y="8"  width="7"  height="1"  fill={C.dg}/>
      <rect x="5"  y="10" width="7"  height="1"  fill={C.dg}/>
      <rect x="5"  y="12" width="6"  height="1"  fill={C.dg}/>
      <rect x="5"  y="14" width="7"  height="1"  fill={C.dg}/>
      <rect x="5"  y="16" width="5"  height="1"  fill={C.dg}/>
      <rect x="5"  y="18" width="7"  height="1"  fill={C.dg}/>
      <rect x="5"  y="20" width="6"  height="1"  fill={C.dg}/>
      <rect x="17" y="4"  width="12" height="24" fill="#ffffd0"/>
      <rect x="28" y="5"  width="1"  height="23" fill={C.dg}/>
      <rect x="17" y="27" width="12" height="1"  fill={C.dg}/>
      <rect x="21" y="8"  width="4"  height="1"  fill={C.nb}/>
      <rect x="25" y="9"  width="1"  height="3"  fill={C.nb}/>
      <rect x="21" y="12" width="4"  height="2"  fill={C.nb}/>
      <rect x="22" y="14" width="2"  height="2"  fill={C.nb}/>
      <rect x="22" y="17" width="2"  height="2"  fill={C.nb}/>
      <rect x="14" y="4"  width="4"  height="1"  fill={C.nb}/>
      <rect x="14" y="27" width="4"  height="1"  fill={C.nb}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  ARCHIVE
// ═══════════════════════════════════════════
export function IconArchive({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="1"  y="9"  width="8"  height="3"  fill="#c8a050"/>
      <rect x="1"  y="11" width="28" height="17" fill="#c8a050"/>
      <rect x="1"  y="11" width="28" height="2"  fill="#e0c060"/>
      <rect x="1"  y="11" width="2"  height="17" fill="#e0c060"/>
      <rect x="28" y="12" width="1"  height="16" fill="#806030"/>
      <rect x="2"  y="27" width="27" height="1"  fill="#806030"/>
      <rect x="13" y="9"  width="4"  height="19" fill={C.lg}/>
      <rect x="13" y="9"  width="4"  height="1"  fill={C.w}/>
      <rect x="16" y="10" width="1"  height="18" fill={C.dg}/>
      {[9,11,13,15,17,19,21,23,25].map(y => (
        <rect key={y} x="13" y={y} width="3" height="1" fill={C.dg}/>
      ))}
      <rect x="12" y="8"  width="6"  height="3"  fill={C.mg}/>
      <rect x="12" y="8"  width="6"  height="1"  fill={C.w}/>
      <rect x="12" y="10" width="6"  height="1"  fill={C.dg}/>
      <rect x="17" y="8"  width="1"  height="3"  fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  PAINT
// ═══════════════════════════════════════════
export function IconPaint({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="3"  y="2"  width="22" height="22" fill={C.w}/>
      <rect x="3"  y="2"  width="22" height="2"  fill={C.dg}/>
      <rect x="3"  y="2"  width="2"  height="22" fill={C.dg}/>
      <rect x="23" y="4"  width="2"  height="20" fill={C.dg}/>
      <rect x="5"  y="22" width="20" height="2"  fill={C.dg}/>
      <rect x="7"  y="6"  width="6"  height="6"  fill="#ff0000"/>
      <rect x="15" y="6"  width="6"  height="6"  fill="#0000ff"/>
      <rect x="7"  y="14" width="6"  height="6"  fill="#00aa00"/>
      <rect x="15" y="14" width="6"  height="6"  fill="#ffff00"/>
      <rect x="20" y="20" width="3"  height="10" fill="#c8a050"/>
      <rect x="20" y="20" width="3"  height="1"  fill={C.mg}/>
      <rect x="19" y="28" width="5"  height="3"  fill={C.dg}/>
      <rect x="21" y="29" width="1"  height="3"  fill="#cc0000"/>
      <rect x="4"  y="24" width="22" height="2"  fill={C.dg}/>
      <rect x="25" y="3"  width="2"  height="22" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  EXE
// ═══════════════════════════════════════════
export function IconExe({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="2"  y="4"  width="28" height="24" fill={C.lg}/>
      <rect x="2"  y="4"  width="28" height="2"  fill={C.w}/>
      <rect x="2"  y="4"  width="2"  height="24" fill={C.w}/>
      <rect x="28" y="6"  width="2"  height="22" fill={C.dg}/>
      <rect x="4"  y="26" width="26" height="2"  fill={C.dg}/>
      <rect x="12" y="8"  width="8"  height="2"  fill={C.xdg}/>
      <rect x="10" y="10" width="12" height="10" fill={C.xdg}/>
      <rect x="11" y="11" width="10" height="8"  fill={C.nb}/>
      <rect x="13" y="10" width="6"  height="10" fill={C.xdg}/>
      <rect x="10" y="13" width="12" height="4"  fill={C.xdg}/>
      <rect x="12" y="18" width="8"  height="2"  fill={C.xdg}/>
      <rect x="14" y="13" width="4"  height="4"  fill={C.dg}/>
      <rect x="14" y="13" width="2"  height="2"  fill={C.mg}/>
      <rect x="4"  y="21" width="24" height="5"  fill={C.nb}/>
      <rect x="6"  y="22" width="3"  height="3"  fill={C.w}/>
      <rect x="6"  y="22" width="3"  height="1"  fill={C.w}/>
      <rect x="6"  y="24" width="3"  height="1"  fill={C.w}/>
      <rect x="10" y="22" width="1"  height="3"  fill={C.w}/>
      <rect x="10" y="22" width="3"  height="1"  fill={C.w}/>
      <rect x="10" y="23" width="2"  height="1"  fill={C.w}/>
      <rect x="10" y="24" width="3"  height="1"  fill={C.w}/>
      <rect x="14" y="22" width="3"  height="1"  fill={C.w}/>
      <rect x="14" y="23" width="1"  height="1"  fill={C.w}/>
      <rect x="16" y="23" width="1"  height="1"  fill={C.w}/>
      <rect x="14" y="24" width="3"  height="1"  fill={C.w}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  MONITOR
// ═══════════════════════════════════════════
export function IconMonitor({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="2"  y="3"  width="28" height="19" fill={C.dg}/>
      <rect x="3"  y="4"  width="26" height="17" fill={C.blk}/>
      <rect x="4"  y="5"  width="24" height="1"  fill="#003300"/>
      <rect x="5"  y="7"  width="2"  height="10" fill="#00aa00"/>
      <rect x="8"  y="10" width="2"  height="7"  fill="#00aa00"/>
      <rect x="11" y="8"  width="2"  height="9"  fill="#00ff00"/>
      <rect x="14" y="6"  width="2"  height="11" fill="#00ff00"/>
      <rect x="17" y="9"  width="2"  height="8"  fill="#00aa00"/>
      <rect x="20" y="7"  width="2"  height="10" fill="#00ff00"/>
      <rect x="23" y="11" width="2"  height="6"  fill="#00aa00"/>
      <rect x="4"  y="17" width="24" height="1"  fill="#005500"/>
      <rect x="2"  y="22" width="28" height="2"  fill={C.dg}/>
      <rect x="12" y="24" width="8"  height="2"  fill={C.dg}/>
      <rect x="8"  y="26" width="16" height="2"  fill={C.dg}/>
      <rect x="8"  y="26" width="16" height="1"  fill={C.mg}/>
      <rect x="3"  y="23" width="28" height="1"  fill={C.blk}/>
      <rect x="30" y="3"  width="1"  height="21" fill={C.blk}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  LOCK
// ═══════════════════════════════════════════
export function IconLock({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="10" y="4"  width="12" height="2"  fill={C.dg}/>
      <rect x="8"  y="6"  width="2"  height="10" fill={C.dg}/>
      <rect x="22" y="6"  width="2"  height="10" fill={C.dg}/>
      <rect x="9"  y="5"  width="14" height="2"  fill={C.mg}/>
      <rect x="9"  y="5"  width="2"  height="10" fill={C.mg}/>
      <rect x="21" y="5"  width="2"  height="10" fill={C.mg}/>
      <rect x="11" y="6"  width="10" height="2"  fill={C.teal}/>
      <rect x="11" y="8"  width="2"  height="6"  fill={C.teal}/>
      <rect x="19" y="8"  width="2"  height="6"  fill={C.teal}/>
      <rect x="5"  y="14" width="22" height="14" fill={C.gld}/>
      <rect x="5"  y="14" width="22" height="2"  fill="#ffee88"/>
      <rect x="5"  y="14" width="2"  height="14" fill="#ffee88"/>
      <rect x="25" y="16" width="2"  height="12" fill="#997700"/>
      <rect x="7"  y="26" width="20" height="2"  fill="#997700"/>
      <rect x="14" y="18" width="4"  height="4"  fill={C.blk}/>
      <rect x="13" y="19" width="6"  height="2"  fill={C.blk}/>
      <rect x="15" y="22" width="2"  height="4"  fill={C.blk}/>
      <rect x="14" y="23" width="4"  height="2"  fill={C.blk}/>
      <rect x="7"  y="16" width="2"  height="2"  fill="#997700"/>
      <rect x="23" y="16" width="2"  height="2"  fill="#997700"/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  NETMAP
// ═══════════════════════════════════════════
export function IconNetmap({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="13" y="13" width="6"  height="6"  fill={C.nb}/>
      <rect x="13" y="13" width="6"  height="1"  fill="#4444ff"/>
      <rect x="13" y="13" width="1"  height="6"  fill="#4444ff"/>
      <rect x="18" y="14" width="1"  height="5"  fill="#000044"/>
      <rect x="14" y="18" width="5"  height="1"  fill="#000044"/>
      <rect x="9"  y="15" width="4"  height="2"  fill={C.dg}/>
      <rect x="19" y="15" width="4"  height="2"  fill={C.dg}/>
      <rect x="15" y="9"  width="2"  height="4"  fill={C.dg}/>
      <rect x="15" y="19" width="2"  height="4"  fill={C.dg}/>
      <rect x="10" y="10" width="3"  height="2"  fill={C.dg}/>
      <rect x="10" y="10" width="2"  height="3"  fill={C.dg}/>
      <rect x="20" y="10" width="3"  height="2"  fill={C.dg}/>
      <rect x="21" y="10" width="2"  height="3"  fill={C.dg}/>
      <rect x="10" y="20" width="3"  height="2"  fill={C.dg}/>
      <rect x="10" y="21" width="2"  height="3"  fill={C.dg}/>
      <rect x="19" y="21" width="3"  height="2"  fill={C.dg}/>
      <rect x="20" y="19" width="2"  height="3"  fill={C.dg}/>
      {[[4,13],[23,13],[13,4],[13,23],[4,4],[23,4],[4,23],[23,23]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="5" height="5" fill={C.mg}/>
      ))}
      {[[4,13],[23,13],[13,4],[13,23],[4,4],[23,4],[4,23],[23,23]].map(([x,y],i) => (
        <rect key={`h${i}`} x={x} y={y} width="5" height="1" fill={C.w}/>
      ))}
      <rect x="6"  y="15" width="1"  height="1"  fill={C.grn}/>
      <rect x="25" y="15" width="1"  height="1"  fill={C.grn}/>
      <rect x="15" y="6"  width="1"  height="1"  fill={C.grn}/>
      <rect x="15" y="25" width="1"  height="1"  fill={C.grn}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  LOG
// ═══════════════════════════════════════════
export function IconLog({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="4"  y="2"  width="20" height="26" fill={C.w}/>
      <rect x="4"  y="2"  width="1"  height="26" fill={C.dg}/>
      <rect x="4"  y="2"  width="14" height="1"  fill={C.dg}/>
      <rect x="23" y="8"  width="1"  height="20" fill={C.dg}/>
      <rect x="5"  y="27" width="19" height="1"  fill={C.dg}/>
      <rect x="18" y="2"  width="6"  height="6"  fill={C.lg}/>
      <line x1="18" y1="2" x2="24" y2="8" stroke={C.dg} strokeWidth="1"/>
      <rect x="18" y="7"  width="6"  height="1"  fill={C.dg}/>
      <rect x="23" y="2"  width="1"  height="6"  fill={C.dg}/>
      <rect x="7"  y="6"  width="2"  height="2"  fill={C.grn}/>
      <rect x="10" y="6"  width="10" height="2"  fill={C.dg}/>
      <rect x="7"  y="10" width="2"  height="2"  fill={C.grn}/>
      <rect x="10" y="10" width="12" height="2"  fill={C.dg}/>
      <rect x="7"  y="14" width="2"  height="2"  fill={C.red}/>
      <rect x="10" y="14" width="10" height="2"  fill="#cc0000"/>
      <rect x="7"  y="18" width="2"  height="2"  fill="#ffaa00"/>
      <rect x="10" y="18" width="11" height="2"  fill={C.dg}/>
      <rect x="7"  y="22" width="2"  height="2"  fill={C.grn}/>
      <rect x="10" y="22" width="9"  height="2"  fill={C.dg}/>
      <rect x="5"  y="28" width="20" height="2"  fill={C.dg}/>
      <rect x="24" y="3"  width="2"  height="26" fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  ROCKET
// ═══════════════════════════════════════════
export function IconRocket({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="13" y="4"  width="6"  height="2"  fill={C.lg}/>
      <rect x="11" y="6"  width="10" height="2"  fill={C.lg}/>
      <rect x="10" y="8"  width="12" height="12" fill={C.lg}/>
      <rect x="10" y="8"  width="12" height="2"  fill={C.w}/>
      <rect x="10" y="8"  width="2"  height="12" fill={C.w}/>
      <rect x="20" y="10" width="2"  height="10" fill={C.dg}/>
      <rect x="12" y="19" width="8"  height="1"  fill={C.dg}/>
      <rect x="13" y="10" width="6"  height="6"  fill={C.nb}/>
      <rect x="13" y="10" width="6"  height="2"  fill="#4444ff"/>
      <rect x="13" y="10" width="2"  height="6"  fill="#4444ff"/>
      <rect x="15" y="12" width="2"  height="2"  fill="#aaaaff"/>
      <rect x="6"  y="16" width="4"  height="4"  fill={C.dg}/>
      <rect x="6"  y="16" width="4"  height="1"  fill={C.mg}/>
      <rect x="22" y="16" width="4"  height="4"  fill={C.dg}/>
      <rect x="22" y="16" width="4"  height="1"  fill={C.mg}/>
      <rect x="12" y="20" width="8"  height="2"  fill={C.dg}/>
      <rect x="13" y="22" width="6"  height="2"  fill={C.dg}/>
      <rect x="14" y="24" width="2"  height="3"  fill={C.red}/>
      <rect x="16" y="24" width="2"  height="4"  fill={C.org}/>
      <rect x="13" y="25" width="2"  height="2"  fill={C.org}/>
      <rect x="17" y="25" width="2"  height="3"  fill={C.red}/>
      <rect x="15" y="26" width="2"  height="2"  fill={C.yw}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  GLOBE
// ═══════════════════════════════════════════
export function IconGlobe({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="8"  y="3"  width="16" height="2"  fill="#0044cc"/>
      <rect x="5"  y="5"  width="22" height="2"  fill="#0044cc"/>
      <rect x="4"  y="7"  width="24" height="18" fill="#0044cc"/>
      <rect x="5"  y="25" width="22" height="2"  fill="#0044cc"/>
      <rect x="8"  y="27" width="16" height="2"  fill="#0044cc"/>
      <rect x="7"  y="5"  width="7"  height="4"  fill="#228822"/>
      <rect x="5"  y="9"  width="5"  height="5"  fill="#228822"/>
      <rect x="14" y="7"  width="6"  height="5"  fill="#228822"/>
      <rect x="11" y="13" width="10" height="6"  fill="#228822"/>
      <rect x="19" y="9"  width="6"  height="4"  fill="#228822"/>
      <rect x="18" y="20" width="7"  height="4"  fill="#228822"/>
      <rect x="7"  y="22" width="5"  height="4"  fill="#228822"/>
      <rect x="4"  y="16" width="24" height="1"  fill="#0000aa"/>
      <rect x="16" y="3"  width="1"  height="26" fill="#0000aa"/>
      <rect x="8"  y="4"  width="5"  height="3"  fill="#aaccff"/>
      <rect x="5"  y="7"  width="3"  height="5"  fill="#aaccff"/>
      <rect x="13" y="29" width="6"  height="2"  fill={C.dg}/>
      <rect x="10" y="31" width="12" height="1"  fill={C.dg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  TRAFFIC LIGHT
// ═══════════════════════════════════════════
export function IconTrafficLight({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="14" y="22" width="4"  height="10" fill={C.dg}/>
      <rect x="14" y="22" width="2"  height="10" fill={C.mg}/>
      <rect x="10" y="4"  width="12" height="19" fill={C.xdg}/>
      <rect x="10" y="4"  width="12" height="2"  fill={C.dg}/>
      <rect x="10" y="4"  width="2"  height="19" fill={C.dg}/>
      <rect x="20" y="6"  width="2"  height="17" fill={C.blk}/>
      <rect x="12" y="22" width="8"  height="1"  fill={C.blk}/>
      <rect x="12" y="6"  width="8"  height="5"  fill={C.blk}/>
      <rect x="13" y="7"  width="6"  height="3"  fill={C.red}/>
      <rect x="13" y="7"  width="2"  height="1"  fill="#ff8888"/>
      <rect x="12" y="12" width="8"  height="5"  fill={C.blk}/>
      <rect x="13" y="13" width="6"  height="3"  fill="#888800"/>
      <rect x="12" y="18" width="8"  height="4"  fill={C.blk}/>
      <rect x="13" y="19" width="6"  height="2"  fill={C.grn}/>
      <rect x="13" y="19" width="2"  height="1"  fill={C.lgrn}/>
      <rect x="4"  y="8"  width="6"  height="2"  fill={C.dg}/>
      <rect x="4"  y="8"  width="6"  height="1"  fill={C.mg}/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  CALCULATOR
// ═══════════════════════════════════════════
export function IconCalculator({ scale = 1 }) {
  return (
    <svg width={32*scale} height={32*scale} viewBox="0 0 32 32"
      style={{ imageRendering: 'pixelated', display: 'block' }} shapeRendering="crispEdges">
      <rect x="5"  y="3"  width="22" height="26" fill={C.mg}/>
      <rect x="5"  y="3"  width="22" height="2"  fill={C.w}/>
      <rect x="5"  y="3"  width="2"  height="26" fill={C.w}/>
      <rect x="25" y="5"  width="2"  height="24" fill={C.dg}/>
      <rect x="7"  y="27" width="20" height="2"  fill={C.dg}/>
      <rect x="7"  y="5"  width="18" height="7"  fill={C.blk}/>
      <rect x="8"  y="6"  width="14" height="5"  fill="#003300"/>
      <rect x="16" y="7"  width="4"  height="3"  fill={C.grn}/>
      <rect x="10" y="7"  width="1"  height="3"  fill={C.grn}/>
      <rect x="12" y="7"  width="3"  height="1"  fill={C.grn}/>
      <rect x="12" y="9"  width="3"  height="1"  fill={C.grn}/>
      {[14,17,20,23].map(row =>
        [7,12,17,22].map(col => (
          <rect key={`${row}-${col}`} x={col} y={row} width="4" height="2" fill={C.lg}/>
        ))
      )}
      {[14,17,20,23].map(row =>
        [7,12,17,22].map(col => (
          <rect key={`h${row}-${col}`} x={col} y={row} width="4" height="1" fill={C.w}/>
        ))
      )}
      <rect x="22" y="20" width="4"  height="5"  fill={C.nb}/>
      <rect x="22" y="20" width="4"  height="1"  fill="#4444aa"/>
    </svg>
  );
}

// ═══════════════════════════════════════════
//  CURSOR Win95 — flèche pixel-art 32x32
//  Pixels de 2px comme toutes les autres icônes
// ═══════════════════════════════════════════
export function IconCursor({ scale = 1 }) {
  // Grille 16x20 de pixels de 2px = SVG 32x40
  // Dessin de la flèche Win95 classique
  const px = 2 * scale; // taille d'un pixel
  const blk = '#000000';
  const wht = '#ffffff';

  // Chaque entrée = [col, row, color]
  // Flèche Win95 : contour noir puis remplissage blanc
  const pixels = [
    // Bord gauche (colonne 0) — contour noir, hauteur 14
    ...[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(r => [0, r, blk]),
    // Diagonale droite contour noir
    [1, 1, blk], [1, 2, blk], [1, 3, blk], [1, 4, blk], [1, 5, blk],
    [1, 6, blk], [1, 7, blk], [1, 8, blk], [1, 9, blk], [1,10, blk],
    [1,11, blk], [1,12, blk],
    [2, 2, blk], [2, 3, blk], [2, 4, blk], [2, 5, blk],
    [2, 6, blk], [2, 7, blk], [2, 8, blk], [2, 9, blk], [2,10, blk],
    [3, 3, blk], [3, 4, blk], [3, 5, blk], [3, 6, blk], [3, 7, blk], [3, 8, blk],
    [4, 4, blk], [4, 5, blk], [4, 6, blk], [4, 7, blk],
    [5, 5, blk], [5, 6, blk],
    [6, 6, blk],
    // Jambe droite contour
    [3, 9, blk], [4, 9, blk], [4,10, blk],
    [3,10, blk], [4,11, blk], [5,11, blk],
    [4,12, blk], [5,12, blk], [5,13, blk],
    [5,14, blk], [6,14, blk], [6,15, blk],
    [6,16, blk], [7,16, blk], [7,17, blk],
    [6,13, blk], [7,13, blk],
    [7,14, blk], [7,15, blk],
    [8,15, blk], [8,16, blk],
    [8,17, blk], [8,18, blk],
    [7,18, blk],
    // Remplissage blanc intérieur
    [1, 1, wht], [1, 2, wht], [1, 3, wht], [1, 4, wht], [1, 5, wht],
    [1, 6, wht], [1, 7, wht], [1, 8, wht], [1, 9, wht], [1,10, wht],
    [2, 2, wht], [2, 3, wht], [2, 4, wht], [2, 5, wht],
    [2, 6, wht], [2, 7, wht], [2, 8, wht],
    [3, 3, wht], [3, 4, wht], [3, 5, wht], [3, 6, wht], [3, 7, wht],
    [4, 4, wht], [4, 5, wht], [4, 6, wht],
    [5, 5, wht],
    [4,10, wht], [5,11, wht], [5,12, wht],
    [6,13, wht], [6,14, wht], [6,15, wht],
    [7,15, wht], [7,16, wht],
    [8,16, wht], [8,17, wht],
  ];

  return (
    <svg
      width={10 * px} height={20 * px}
      viewBox={`0 0 ${10 * px} ${20 * px}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
      shapeRendering="crispEdges"
    >
      {pixels.map(([col, row, color], i) => (
        <rect key={i} x={col * px} y={row * px} width={px} height={px} fill={color} />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════
//  CURSOR_SVG — string encodée pour CSS cursor:url()
//  Flèche Win95 32x40 pixels de 2px
// ═══════════════════════════════════════════
export const CURSOR_SVG = `%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='28' viewBox='0 0 20 36' shape-rendering='crispEdges' style='image-rendering:pixelated'%3E%3Crect x='0' y='0' width='2' height='28' fill='%23000'/%3E%3Crect x='2' y='2' width='2' height='24' fill='%23000'/%3E%3Crect x='4' y='4' width='2' height='20' fill='%23000'/%3E%3Crect x='6' y='6' width='2' height='16' fill='%23000'/%3E%3Crect x='8' y='8' width='2' height='12' fill='%23000'/%3E%3Crect x='10' y='10' width='2' height='8' fill='%23000'/%3E%3Crect x='12' y='12' width='2' height='4' fill='%23000'/%3E%3Crect x='6' y='18' width='2' height='2' fill='%23000'/%3E%3Crect x='6' y='20' width='4' height='2' fill='%23000'/%3E%3Crect x='8' y='22' width='4' height='2' fill='%23000'/%3E%3Crect x='10' y='24' width='4' height='2' fill='%23000'/%3E%3Crect x='12' y='26' width='4' height='2' fill='%23000'/%3E%3Crect x='14' y='28' width='4' height='2' fill='%23000'/%3E%3Crect x='14' y='30' width='2' height='2' fill='%23000'/%3E%3Crect x='2' y='2' width='2' height='22' fill='%23fff'/%3E%3Crect x='4' y='4' width='2' height='18' fill='%23fff'/%3E%3Crect x='6' y='6' width='2' height='14' fill='%23fff'/%3E%3Crect x='8' y='8' width='2' height='10' fill='%23fff'/%3E%3Crect x='10' y='10' width='2' height='6' fill='%23fff'/%3E%3Crect x='12' y='12' width='2' height='2' fill='%23fff'/%3E%3Crect x='8' y='20' width='2' height='2' fill='%23fff'/%3E%3Crect x='10' y='22' width='2' height='2' fill='%23fff'/%3E%3Crect x='12' y='24' width='2' height='2' fill='%23fff'/%3E%3Crect x='14' y='26' width='2' height='2' fill='%23fff'/%3E%3C/svg%3E`;

// ═══════════════════════════════════════════
//  EXPORT MAP
// ═══════════════════════════════════════════
export const WIN95_ICONS = {
  explorer:             IconMyComputer,
  about:                IconNotepad,
  cv:                   IconNotepad,
  projects:             IconFolder,
  skills:               IconSettings,
  contact:              IconContact,
  terminal:             IconMsDos,
  recycle:              IconRecycleBin,
  internet:             IconInternet,
  network:              IconNetwork,
  inbox:                IconInbox,
  help:                 IconHelp,
  archive:              IconArchive,
  paint:                IconPaint,
  'orgarh':             IconExe,
  'smart-intersection': IconTrafficLight,
  'tax-calculator':     IconCalculator,
  'portfolio-os':       IconGlobe,
  'sys-monitor':        IconMonitor,
  'cryptoshell':        IconLock,
  'netmap':             IconNetmap,
  'logparser':          IconLog,
  'deploybot':          IconRocket,
};

export default WIN95_ICONS;