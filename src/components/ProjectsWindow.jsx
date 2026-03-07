import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData.js';
import {
  IconExe, IconMonitor, IconLock, IconNetmap,
  IconLog, IconRocket, IconGlobe, IconTrafficLight, IconCalculator,
  IconMyComputer, IconFolder, IconNetwork, IconRecycleBin,
} from './Win95Icons.jsx';

const PROJECT_ICONS = {
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
function getProjectIcon(id) { return PROJECT_ICONS[id] || IconExe; }

// ── Pixel-art GitHub icon ─────────────────────────────────────
function IconGitHub({ color = '#000' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated', display: 'block', flexShrink: 0 }}>
      <rect x="5" y="0" width="6" height="1" fill={color}/>
      <rect x="3" y="1" width="10" height="1" fill={color}/>
      <rect x="2" y="2" width="12" height="1" fill={color}/>
      <rect x="1" y="3" width="14" height="1" fill={color}/>
      <rect x="1" y="4" width="14" height="5" fill={color}/>
      <rect x="2" y="5" width="3"  height="2" fill="#fff"/>
      <rect x="11" y="5" width="3" height="2" fill="#fff"/>
      <rect x="1" y="9"  width="14" height="1" fill={color}/>
      <rect x="2" y="10" width="12" height="1" fill={color}/>
      <rect x="3" y="11" width="10" height="3" fill={color}/>
      <rect x="3" y="14" width="3"  height="2" fill={color}/>
      <rect x="10" y="14" width="3" height="2" fill={color}/>
      <rect x="12" y="12" width="3" height="2" fill={color}/>
      <rect x="13" y="11" width="2" height="1" fill={color}/>
    </svg>
  );
}

// ── Pixel-art GitLab icon ─────────────────────────────────────
function IconGitLab({ color = '#e24329' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated', display: 'block', flexShrink: 0 }}>
      <rect x="7" y="1" width="2" height="2" fill={color}/>
      <rect x="5" y="3" width="6" height="2" fill={color}/>
      <rect x="3" y="3" width="2" height="4" fill={color}/>
      <rect x="11" y="3" width="2" height="4" fill={color}/>
      <rect x="1" y="5" width="2" height="4" fill={color}/>
      <rect x="13" y="5" width="2" height="4" fill={color}/>
      <rect x="1" y="9" width="14" height="2" fill={color}/>
      <rect x="3" y="11" width="10" height="2" fill={color}/>
      <rect x="5" y="13" width="6" height="2" fill={color}/>
    </svg>
  );
}

// ── Pixel-art Globe icon for Demo ─────────────────────────────
function IconDemoGlobe({ color = '#fff' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated', display: 'block', flexShrink: 0 }}>
      <rect x="5"  y="0"  width="6" height="1" fill={color}/>
      <rect x="3"  y="1"  width="2" height="1" fill={color}/>
      <rect x="11" y="1"  width="2" height="1" fill={color}/>
      <rect x="2"  y="2"  width="1" height="1" fill={color}/>
      <rect x="13" y="2"  width="1" height="1" fill={color}/>
      <rect x="1"  y="3"  width="1" height="10" fill={color}/>
      <rect x="14" y="3"  width="1" height="10" fill={color}/>
      <rect x="2"  y="13" width="1" height="1" fill={color}/>
      <rect x="13" y="13" width="1" height="1" fill={color}/>
      <rect x="3"  y="14" width="2" height="1" fill={color}/>
      <rect x="11" y="14" width="2" height="1" fill={color}/>
      <rect x="5"  y="15" width="6" height="1" fill={color}/>
      <rect x="7"  y="0"  width="2" height="16" fill={color}/>
      <rect x="1"  y="7"  width="14" height="2" fill={color}/>
      <rect x="4"  y="2"  width="8" height="1" fill={color} opacity="0.6"/>
      <rect x="4"  y="13" width="8" height="1" fill={color} opacity="0.6"/>
    </svg>
  );
}

const btn = {
  height: 22, padding: '0 8px',
  background: '#c0c0c0',
  borderTop: '1px solid #fff',
  borderLeft: '1px solid #fff',
  borderRight: '1px solid #404040',
  borderBottom: '1px solid #404040',
  fontFamily: "'Share Tech Mono', monospace",
  fontSize: 11, cursor: 'none',
  display: 'flex', alignItems: 'center', gap: 3,
};

const TREE = [
  { label: 'My Computer', indent: 0,  Icon: IconMyComputer },
  { label: 'C:\\',        indent: 12, Icon: IconFolder },
  { label: 'MARIEM',      indent: 24, Icon: IconFolder },
  { label: 'PROJECTS',    indent: 36, Icon: IconFolder, active: true },
  { label: 'SKILLS',      indent: 36, Icon: IconFolder },
  { label: 'Network',     indent: 0,  Icon: IconNetwork },
  { label: 'Recycle Bin', indent: 0,  Icon: IconRecycleBin },
];

export default function ProjectsWindow() {
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('icons');
  const [ghHover, setGhHover] = useState(false);
  const [glHover, setGlHover] = useState(false);
  const [demoHover, setDemoHover] = useState(false);

  const project = PROJECTS.find(p => p.id === selected);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* Toolbar */}
      <div style={{
        height: 30, background: '#c0c0c0',
        borderBottom: '1px solid #808080',
        display: 'flex', alignItems: 'center', gap: 2, padding: '2px 4px',
        flexShrink: 0,
      }}>
        <button style={btn}>← Back</button>
        <button style={btn}>→ Fwd</button>
        <button style={btn}>⬆ Up</button>
        <div style={{ width: 1, height: 18, background: '#808080', margin: '0 3px' }} />
        <button style={{ ...btn, marginLeft: 'auto' }} onClick={() => setView(v => v === 'icons' ? 'list' : 'icons')}>
          {view === 'icons' ? '= List' : '# Icons'}
        </button>
        <div style={{
          height: 20, background: '#fff',
          borderTop: '1px solid #808080', borderLeft: '1px solid #808080',
          borderRight: '1px solid #fff', borderBottom: '1px solid #fff',
          padding: '0 8px', fontSize: 11,
          fontFamily: "'Share Tech Mono'", display: 'flex', alignItems: 'center',
          minWidth: 200,
        }}>
          C:\MARIEM\PROJECTS
        </div>
      </div>

      {/* Panes */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* Left tree */}
        <div style={{
          width: 150, background: '#f0f0f0',
          borderRight: '2px solid #808080',
          padding: 4, overflowY: 'auto', flexShrink: 0,
          fontFamily: "'Share Tech Mono'", fontSize: 11,
        }}>
          {TREE.map((item, i) => (
            <div key={i} style={{
              padding: '3px 4px',
              paddingLeft: item.indent + 4,
              background: item.active ? '#000080' : 'transparent',
              color: item.active ? '#fff' : '#000',
              cursor: 'none',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <span style={{
                display: 'inline-flex', flexShrink: 0,
                imageRendering: 'pixelated',
                filter: item.active ? 'brightness(10)' : 'none',
              }}>
                <item.Icon scale={0.5} />
              </span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Right: files + detail */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

          {/* Files panel */}
          <div style={{
            flex: selected ? '0 0 55%' : 1,
            background: '#fff', padding: 8,
            overflowY: 'auto',
            display: view === 'icons' ? 'flex' : 'block',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            gap: view === 'icons' ? 8 : 0,
          }}>
            {view === 'icons' ? (
              PROJECTS.map(p => {
                const IC = getProjectIcon(p.id);
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelected(selected === p.id ? null : p.id)}
                    onDoubleClick={() => (p.github || p.gitlab) && window.open(p.github || p.gitlab, '_blank')}
                    style={{
                      width: 72, textAlign: 'center', padding: 4,
                      background: selected === p.id ? '#000080' : 'transparent',
                      cursor: 'none', flexShrink: 0,
                    }}
                  >
                    <div style={{
                      width: 32, height: 32, margin: '0 auto',
                      imageRendering: 'pixelated',
                      filter: selected === p.id ? 'brightness(0.6) hue-rotate(180deg) saturate(2)' : 'none',
                    }}>
                      <IC scale={1} />
                    </div>
                    <div style={{
                      fontSize: 10, fontFamily: "'Share Tech Mono'",
                      color: selected === p.id ? '#fff' : '#000',
                      wordBreak: 'break-word', lineHeight: 1.3, marginTop: 2,
                    }}>{p.name}</div>
                  </div>
                );
              })
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11, fontFamily: "'Share Tech Mono'" }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #c0c0c0' }}>
                    {['Name', 'Category', 'Tech', 'Year'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '3px 8px', color: '#000', fontWeight: 'normal', borderRight: '1px solid #e0e0e0' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROJECTS.map(p => {
                    const IC = getProjectIcon(p.id);
                    return (
                      <tr key={p.id}
                        onClick={() => setSelected(selected === p.id ? null : p.id)}
                        style={{
                          background: selected === p.id ? '#000080' : 'transparent',
                          cursor: 'none',
                        }}
                      >
                        <td style={{ padding: '3px 8px', color: selected === p.id ? '#fff' : '#000', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <span style={{ imageRendering: 'pixelated', display: 'inline-flex', flexShrink: 0 }}>
                            <IC scale={0.5} />
                          </span>
                          {p.name}
                        </td>
                        <td style={{ padding: '3px 8px', color: selected === p.id ? '#ddd' : '#555' }}>{p.category}</td>
                        <td style={{ padding: '3px 8px', color: selected === p.id ? '#ddd' : '#555' }}>{p.tech.slice(0, 2).join(', ')}</td>
                        <td style={{ padding: '3px 8px', color: selected === p.id ? '#ddd' : '#555' }}>{p.year}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Detail panel */}
          {selected && project && (
            <div style={{
              flex: '0 0 45%', borderLeft: '2px solid #808080',
              background: '#f8f8f8', padding: 12,
              overflowY: 'auto', fontFamily: "'Share Tech Mono'", fontSize: 12,
            }}>
              {/* Project icon */}
              {(() => { const IC = getProjectIcon(project.id); return (
                <div style={{ marginBottom: 8, imageRendering: 'pixelated' }}>
                  <IC scale={1.5} />
                </div>
              ); })()}

              <div style={{ fontSize: 14, fontWeight: 'bold', color: '#000080', marginBottom: 4 }}>
                {project.name}
              </div>
              <div style={{ fontSize: 11, color: '#555', marginBottom: 10 }}>
                {project.category} -- {project.year}
              </div>
              <div style={{ fontSize: 12, color: '#000', lineHeight: 1.6, marginBottom: 12, whiteSpace: 'pre-line' }}>
                {project.longDescription}
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ color: '#000080', fontSize: 11, marginBottom: 4 }}>TECHNOLOGIES:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      border: '1px solid #000080', color: '#000080',
                      padding: '1px 6px', fontSize: 10,
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>

                {/* GitHub button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setGhHover(true)}
                    onMouseLeave={() => setGhHover(false)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '5px 12px', textDecoration: 'none',
                      fontFamily: "'Share Tech Mono'", fontSize: 11,
                      color:      ghHover ? '#fff'    : '#000',
                      background: ghHover ? '#000080' : '#c0c0c0',
                      borderTop:    ghHover ? '2px solid #000044' : '2px solid #fff',
                      borderLeft:   ghHover ? '2px solid #000044' : '2px solid #fff',
                      borderRight:  ghHover ? '2px solid #6666aa' : '2px solid #404040',
                      borderBottom: ghHover ? '2px solid #6666aa' : '2px solid #404040',
                    }}
                  >
                    <IconGitHub color={ghHover ? '#fff' : '#000'} />
                    GitHub
                  </a>
                )}

                {/* GitLab button */}
                {project.gitlab && (
                  <a
                    href={project.gitlab}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setGlHover(true)}
                    onMouseLeave={() => setGlHover(false)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '5px 12px', textDecoration: 'none',
                      fontFamily: "'Share Tech Mono'", fontSize: 11,
                      color:      glHover ? '#fff'    : '#000',
                      background: glHover ? '#e24329' : '#c0c0c0',
                      borderTop:    glHover ? '2px solid #aa2200' : '2px solid #fff',
                      borderLeft:   glHover ? '2px solid #aa2200' : '2px solid #fff',
                      borderRight:  glHover ? '2px solid #ff6644' : '2px solid #404040',
                      borderBottom: glHover ? '2px solid #ff6644' : '2px solid #404040',
                    }}
                  >
                    <IconGitLab color={glHover ? '#fff' : '#e24329'} />
                    GitLab
                  </a>
                )}

                
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        height: 20, background: '#c0c0c0',
        borderTop: '2px solid #808080',
        display: 'flex', alignItems: 'center',
        padding: '0 6px', gap: 8, fontSize: 11,
        fontFamily: "'Share Tech Mono'", flexShrink: 0,
      }}>
        <div style={{ borderTop: '1px solid #808080', borderLeft: '1px solid #808080', padding: '1px 8px' }}>
          {PROJECTS.length} objects
        </div>
        <div style={{ borderTop: '1px solid #808080', borderLeft: '1px solid #808080', padding: '1px 8px', marginLeft: 'auto' }}>
          {selected ? `Selected: ${project?.name}` : 'Double-click to open'}
        </div>
      </div>

    </div>
  );
}