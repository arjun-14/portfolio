// Orbiting particle system — multiple bands revolving at different speeds
// Each <g> group rotates; particles inside are placed at fixed angles within the band

type Band = {
  radius: number
  count: number
  duration: number
  reverse: boolean
  opacities: number[]
  sizes: number[]
}

const BANDS: Band[] = [
  {
    radius: 200,
    count: 6,
    duration: 28,
    reverse: false,
    opacities: [0.7, 0.3, 0.8, 0.4, 0.6, 0.2],
    sizes:    [1.5, 1.0, 2.0, 1.0, 1.5, 0.8],
  },
  {
    radius: 350,
    count: 9,
    duration: 45,
    reverse: true,
    opacities: [0.5, 0.8, 0.3, 0.6, 0.2, 0.7, 0.4, 0.9, 0.3],
    sizes:    [1.2, 1.8, 1.0, 1.5, 0.8, 2.0, 1.0, 1.5, 1.2],
  },
  {
    radius: 520,
    count: 12,
    duration: 65,
    reverse: false,
    opacities: [0.4, 0.7, 0.2, 0.5, 0.8, 0.3, 0.6, 0.2, 0.7, 0.4, 0.5, 0.3],
    sizes:    [1.0, 1.5, 0.8, 1.2, 2.0, 1.0, 1.5, 0.8, 1.8, 1.2, 1.0, 1.4],
  },
  {
    radius: 700,
    count: 7,
    duration: 90,
    reverse: true,
    opacities: [0.3, 0.5, 0.2, 0.6, 0.3, 0.4, 0.2],
    sizes:    [1.0, 1.5, 0.8, 1.2, 1.0, 0.8, 1.5],
  },
]

export function OrbitingParticles({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ zIndex: 0, opacity }}
    >
      <svg
        width="1600"
        height="1600"
        viewBox="-800 -800 1600 1600"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute' }}
      >
        {BANDS.map((band, bi) => (
          <g
            key={bi}
            style={{
              animation: `${band.reverse ? 'orbitReverse' : 'orbit'} ${band.duration}s linear infinite`,
              transformOrigin: '0 0',
            }}
          >
            {Array.from({ length: band.count }, (_, i) => {
              const angle = (i / band.count) * 2 * Math.PI
              const x = band.radius * Math.cos(angle)
              const y = band.radius * Math.sin(angle)
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={band.sizes[i]}
                  fill={`rgba(255,255,255,${band.opacities[i]})`}
                />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
