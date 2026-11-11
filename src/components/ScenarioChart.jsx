// Inline SVG bar chart: daily CO2 at 2046 per scenario, from the LUTI-Kandy
// Step 27E evaluation output (tonnes/day, fleet-weighted COPERT).
const DATA = [
  { key: 'Baseline', label: 'Baseline', sub: 'Do-nothing', value: 4910 },
  { key: 'A', label: 'Scenario A', sub: 'Highway bypass', value: 5151 },
  { key: 'B', label: 'Scenario B', sub: 'BRT system', value: 4406 },
  { key: 'C', label: 'Scenario C', sub: 'BRT + TOD', value: 4533, best: true },
]

const BASE = DATA[0].value
const W = 640
const H = 260
const PAD = { top: 34, right: 16, bottom: 52, left: 16 }
const innerW = W - PAD.left - PAD.right
const innerH = H - PAD.top - PAD.bottom
const MAX = 5500
const slot = innerW / DATA.length
const barW = Math.min(72, slot * 0.5)

const fmt = (n) => n.toLocaleString('en-US')
const delta = (v) => ((v - BASE) / BASE) * 100

export default function ScenarioChart() {
  const summary = DATA.map(
    (d) => `${d.label} (${d.sub}): ${fmt(d.value)} tonnes of CO2 per day` +
      (d.key === 'Baseline' ? '' : `, ${delta(d.value) > 0 ? '+' : ''}${delta(d.value).toFixed(1)}% versus baseline`)
  ).join('. ')

  return (
    <figure className="chart">
      <figcaption className="chart-head">
        <span className="coords">Daily CO₂ at 2046 · tonnes/day</span>
        <span className="chart-legend">
          <span className="chart-swatch" aria-hidden="true" /> vs. baseline
        </span>
      </figcaption>
      <svg
        className="chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Bar chart of daily CO2 emissions at 2046 by scenario. ${summary}.`}
      >
        {/* gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = PAD.top + innerH - innerH * t
          return (
            <g key={t}>
              <line x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} className="chart-grid" />
              <text x={PAD.left} y={y - 4} className="chart-tick">{fmt(Math.round(MAX * t))}</text>
            </g>
          )
        })}
        {/* baseline reference */}
        {(() => {
          const y = PAD.top + innerH - (BASE / MAX) * innerH
          return <line x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} className="chart-baseline" />
        })()}
        {DATA.map((d, i) => {
          const h = (d.value / MAX) * innerH
          const x = PAD.left + slot * i + (slot - barW) / 2
          const y = PAD.top + innerH - h
          const dlt = delta(d.value)
          const cls = d.key === 'Baseline' ? 'is-base' : dlt < 0 ? 'is-down' : 'is-up'
          return (
            <g key={d.key} className={`chart-bar ${cls}${d.best ? ' is-best' : ''}`}>
              <rect x={x} y={y} width={barW} height={h} rx="4" style={{ '--i': i }} />
              <text x={x + barW / 2} y={y - 10} textAnchor="middle" className="chart-value">
                {fmt(d.value)}
              </text>
              {d.key !== 'Baseline' && (
                <text x={x + barW / 2} y={y - 24} textAnchor="middle" className="chart-delta">
                  {dlt > 0 ? '+' : ''}{dlt.toFixed(1)}%
                </text>
              )}
              <text x={x + barW / 2} y={PAD.top + innerH + 20} textAnchor="middle" className="chart-label">
                {d.label}
              </text>
              <text x={x + barW / 2} y={PAD.top + innerH + 36} textAnchor="middle" className="chart-sub">
                {d.sub}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="chart-note">
        BRT-based scenarios cut daily CO₂ by 8 to 10% against the do-nothing baseline, while the
        highway bypass raises it through induced demand. Source: Step 27E evaluation output.
      </p>
    </figure>
  )
}
