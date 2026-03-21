'use client'

// Concentric rotating circles — GRIS menu aesthetic
// Two groups rotate at different speeds/directions

import { useRadius } from '@/hooks/useRadius'

const RADII = [80, 150, 230, 330, 450, 600, 780]

export function ConcentricRings() {
  const R = useRadius()
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ zIndex: 10 }}
    >
      <svg
        width="1800"
        height="1800"
        viewBox="-900 -900 1800 1800"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute' }}
      >
        {/* Outer group — slow reverse orbit */}
        <g style={{ animation: 'orbitReverse 180s linear infinite', transformOrigin: '0 0' }}>
          {RADII.slice(4).map((r, i) => (
            <circle
              key={r}
              cx={0}
              cy={0}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={i === 0 ? 0.8 : 0.5}
              strokeDasharray={i === 1 ? '4 12' : undefined}
            />
          ))}
        </g>

        {/* Inner group — slow forward orbit (inner 3 rings only) */}
        <g style={{ animation: 'orbit 90s linear infinite', transformOrigin: '0 0' }}>
          {RADII.slice(0, 3).map((r, i) => (
            <circle
              key={r}
              cx={0}
              cy={0}
              r={r}
              fill="none"
              stroke={`rgba(255,255,255,${0.22 - i * 0.04})`}
              strokeWidth={i === 0 ? 1.5 : 1}
              strokeDasharray={i === 2 ? '3 8' : undefined}
            />
          ))}
        </g>

        {/* Static group — 330px ring + diamond + nodes (no rotation) */}
        <g>
          <circle
            cx={0}
            cy={0}
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={1}
          />

          {/* Diamond inscribed in the 330px ring */}
          <rect
            x={-R * 0.707}
            y={-R * 0.707}
            width={R * 1.414}
            height={R * 1.414}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={0.8}
            transform="rotate(45)"
          />

          {/* Small node dots at cardinal points of the 330 ring */}
          {[0, 90, 180, 270].map((deg) => {
            const rad = (deg * Math.PI) / 180
            return (
              <circle
                key={deg}
                cx={R * Math.cos(rad)}
                cy={R * Math.sin(rad)}
                r={4}
                fill="rgba(255,255,255,0.5)"
              />
            )
          })}

          {/* Center dot */}
          <circle cx={0} cy={0} r={5} fill="rgba(255,255,255,0.6)" />
          <circle cx={0} cy={0} r={12} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
        </g>
      </svg>
    </div>
  )
}
