import type { Project } from '../content/projects'
export function ProjectArt({ kind, large = false }: { kind: Project['visual']; large?: boolean }) {
  return <div className={`project-art art-${kind} ${large ? 'art-large' : ''}`} aria-hidden="true">
    <div className="art-grid" />
    {kind === 'communication' && <div className="signal-art"><div className="signal-orbit orbit-one" /><div className="signal-orbit orbit-two" /><div className="wave">{[18, 30, 50, 36, 70, 46, 92, 60, 36, 78, 48, 30, 56, 24, 16].map((h, i) => <i key={i} style={{ height: h }} />)}</div><span className="art-node node-a">Aa</span><span className="art-node node-b">あ</span><span className="art-node node-c">অ</span></div>}
    {kind === 'commerce' && <div className="commerce-art"><div className="commerce-orbit"/><div className="abstract-box box-back"/><div className="abstract-box box-front"><span/><i/></div><span className="commerce-line"/></div>}
    {kind === 'fleet' && <div className="fleet-art"><div className="flow-card flow-start"><i/>Plan</div><div className="flow-path"/><div className="flow-card flow-center"><i/>Coordinate</div><div className="flow-card flow-end"><i/>Move</div><div className="flow-dot dot-one"/><div className="flow-dot dot-two"/></div>}
    {kind === 'location' && <div className="location-art"><svg viewBox="0 0 500 260" fill="none"><path className="map-road" d="M0 70H500M0 185H500M90 0V260M330 0V260M0 260L260 0M220 260L480 0"/><path className="map-route" d="M90 190V110Q90 90 110 90H310Q330 90 330 110V180"/><circle cx="90" cy="190" r="8" fill="#ddd6fe"/><circle cx="330" cy="180" r="18" fill="#a78bfa" fillOpacity=".2"/><circle cx="330" cy="180" r="7" fill="#c4b5fd"/></svg></div>}
    <span className="art-caption">CONCEPTUAL ILLUSTRATION</span>
  </div>
}
