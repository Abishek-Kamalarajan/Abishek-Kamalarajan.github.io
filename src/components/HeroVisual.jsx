// Decorative stylised contour map with a survey pin — fills the right column of
// the hero on wide screens. Pure SVG, no runtime cost; hidden from AT.
const CONTOURS = [
  'M40 300 C90 230 170 240 210 180 C250 120 330 110 380 150 C430 190 470 170 500 120',
  'M20 340 C80 270 180 280 230 220 C280 160 350 150 400 190 C450 230 480 210 520 160',
  'M10 380 C70 320 190 330 250 260 C300 200 370 190 420 230 C470 270 500 250 540 200',
  'M30 420 C100 370 210 380 270 310 C320 250 390 240 440 280 C490 320 520 300 560 250',
  'M60 460 C130 420 230 430 290 360 C340 300 410 290 460 330 C510 370 540 350 580 300',
  'M110 490 C170 470 250 480 310 410 C360 350 430 340 480 380 C530 420 560 400 600 350',
  'M180 70 C230 40 300 50 330 90 C360 130 320 180 270 170 C220 160 200 110 180 70 Z',
  'M200 90 C240 70 290 80 310 110 C330 140 300 170 265 160 C230 150 215 115 200 90 Z',
  'M330 400 C370 370 430 380 450 420 C470 460 430 500 390 490 C350 480 330 440 330 400 Z',
  'M350 415 C380 395 420 405 435 430 C450 455 425 480 395 472 C365 465 350 440 350 415 Z',
]

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 600 520" className="hero-map">
        <defs>
          <radialGradient id="hv-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </radialGradient>
          <linearGradient id="hv-scan" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(103,232,249,0)" />
            <stop offset="50%" stopColor="rgba(103,232,249,0.5)" />
            <stop offset="100%" stopColor="rgba(103,232,249,0)" />
          </linearGradient>
          <pattern id="hv-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(148,163,184,0.10)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="600" height="520" fill="url(#hv-glow)" />
        <rect width="600" height="520" fill="url(#hv-grid)" />

        {/* graticule labels */}
        <g className="hero-map-ticks">
          <text x="14" y="26">7.3°N</text>
          <text x="14" y="266">7.2°N</text>
          <text x="14" y="506">7.1°N</text>
          <text x="498" y="506">80.6°E</text>
        </g>

        {/* contours */}
        <g className="hero-map-contours">
          {CONTOURS.map((d, i) => (
            <path key={i} d={d} style={{ '--i': i }} />
          ))}
        </g>

        {/* survey traverse */}
        <g className="hero-map-traverse">
          <path d="M120 420 L215 300 L300 345 L395 215 L470 250" />
          {[[120, 420], [215, 300], [300, 345], [395, 215], [470, 250]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="3.2" className="hero-map-station" />
              <path d={`M${x - 6} ${y}h12M${x} ${y - 6}v12`} className="hero-map-cross" />
            </g>
          ))}
        </g>

        {/* control point marker */}
        <g className="hero-map-pin" transform="translate(300 345)">
          <circle r="18" className="hero-map-pulse" />
          <circle r="18" className="hero-map-pulse hero-map-pulse-2" />
          <circle r="7" className="hero-map-pin-core" />
          <circle r="2.2" className="hero-map-pin-dot" />
          <text x="26" y="-14" className="hero-map-pin-label">CP-01</text>
          <text x="26" y="2" className="hero-map-pin-sub">7.2543° N · 80.5962° E</text>
        </g>

        {/* scan line */}
        <rect className="hero-map-scan" x="0" y="0" width="600" height="60" fill="url(#hv-scan)" />

        {/* scale bar */}
        <g className="hero-map-scale" transform="translate(410 480)">
          <path d="M0 0h120M0 -4v8M60 -4v8M120 -4v8" />
          <text x="0" y="20">0</text>
          <text x="50" y="20">5</text>
          <text x="104" y="20">10 km</text>
        </g>
      </svg>
    </div>
  )
}
