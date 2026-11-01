import type { Project } from '../content/projects'

/** Abstract domain diagrams; never representations of employer product screens. */
export function ProjectArt({ kind, large = false }: { kind: Project['visual']; large?: boolean }) {
  return <figure className={`project-art art-${kind}${large ? ' art-large' : ''}`}>
    <svg viewBox="0 0 600 240" fill="none" aria-hidden="true" focusable="false">
      <path className="art-guide" d="M0 60H600M0 120H600M0 180H600M100 0V240M200 0V240M300 0V240M400 0V240M500 0V240"/>
      {kind === 'communication' && <>
        <path className="art-connector" d="M150 73C210 73 180 120 230 120M370 120C410 120 400 73 445 73M370 120C430 120 400 175 455 175"/>
        <rect className="art-node" x="85" y="44" width="80" height="58" rx="14"/>
        <text className="art-letter" x="125" y="80">Aa</text>
        <rect className="art-node" x="437" y="44" width="80" height="58" rx="14"/>
        <text className="art-letter" x="477" y="80">あ</text>
        <rect className="art-node" x="447" y="145" width="80" height="58" rx="14"/>
        <text className="art-letter" x="487" y="182">অ</text>
        <rect className="art-center" x="210" y="72" width="180" height="96" rx="28"/>
        <g className="art-wave">{[16, 28, 45, 32, 60, 40, 26, 44, 20].map((height, i) => <path key={i} d={`M${244 + i * 14} ${120 - height / 2}v${height}`}/>)}</g>
      </>}
      {kind === 'commerce' && <>
        <path className="art-connector" d="M172 110H253M347 110H428"/>
        <path className="art-arrow" d="m240 104 7 6-7 6m175-12 7 6-7 6"/>
        <circle className="art-node" cx="125" cy="110" r="47"/>
        <circle className="art-center" cx="300" cy="110" r="47"/>
        <circle className="art-node" cx="475" cy="110" r="47"/>
        <g className="art-icon"><path d="m103 100 22-12 22 12v25l-22 12-22-12zm0 0 22 12 22-12m-22 12v25m-10-43 22 12"/>
          <rect x="282" y="86" width="36" height="48" rx="5"/><path d="M291 99h18m-18 10h18m-18 10h10"/>
          <path d="M451 103h29v25h-29zm29 9h12l8 9v7h-20m-19-25v-9h23v9"/><circle cx="461" cy="131" r="5"/><circle cx="490" cy="131" r="5"/>
        </g>
        <text className="art-label" x="125" y="188">Discover</text><text className="art-label" x="300" y="188">Order</text><text className="art-label" x="475" y="188">Deliver</text>
      </>}
      {kind === 'fleet' && <>
        <path className="art-connector" d="M183 75h57m120 0h57M300 104v48m178-48v48c0 18-15 26-35 26h-83M240 178H130c-18 0-24-8-24-26v-48"/>
        <rect className="art-node" x="63" y="43" width="120" height="62" rx="12"/>
        <rect className="art-center" x="240" y="43" width="120" height="62" rx="12"/>
        <rect className="art-node" x="417" y="43" width="120" height="62" rx="12"/>
        <rect className="art-node" x="240" y="149" width="120" height="58" rx="12"/>
        <text className="art-label" x="123" y="81">Plan</text><text className="art-label" x="300" y="81">Assign</text><text className="art-label" x="477" y="81">Move</text><text className="art-label" x="300" y="184">Approve</text>
        <circle className="art-dot" cx="210" cy="75" r="4"/><circle className="art-dot" cx="388" cy="75" r="4"/><circle className="art-dot" cx="300" cy="127" r="4"/>
      </>}
      {kind === 'location' && <>
        <path className="art-road" d="M0 58h600M0 187h600M134 0v240M448 0v240M230 0 90 240M518 0 354 240"/>
        <path className="art-route" d="M134 178V108q0-16 16-16h278q20 0 20 20v45"/>
        <circle className="art-center" cx="134" cy="178" r="20"/><circle className="art-dot" cx="134" cy="178" r="6"/>
        <path className="art-pin" d="M448 121c-16 0-28 11-28 26 0 22 28 43 28 43s28-21 28-43c0-15-12-26-28-26Z"/>
        <circle className="art-dot" cx="448" cy="147" r="7"/>
        <path className="art-connector" d="M177 178h55m260 12h47"/>
      </>}
      {kind === 'finance' && <>
        <path className="art-connector" d="M178 120h64m118 0h64"/>
        <path className="art-arrow" d="m231 114 7 6-7 6m177-12 7 6-7 6"/>
        <rect className="art-node" x="77" y="68" width="102" height="104" rx="18"/>
        <path className="art-icon" d="m103 102 25-14 25 14m-44 8h38m-34 0v28m12-28v28m12-28v28m-34 7h42"/>
        <rect className="art-center" x="242" y="68" width="116" height="104" rx="22"/>
        <path className="art-wave" d="M300 93v52m-26-26h52"/>
        <circle className="art-node" cx="475" cy="120" r="52"/>
        <path className="art-icon" d="M451 107h48v34h-48zm0 11h48m-38 12h12"/>
        <text className="art-label" x="128" y="204">Source</text><text className="art-label" x="300" y="204">Add money</text><text className="art-label" x="475" y="204">Account</text>
      </>}
    </svg>
    <figcaption>Conceptual illustration</figcaption>
  </figure>
}
