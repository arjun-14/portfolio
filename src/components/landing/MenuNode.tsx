'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CSSProperties } from 'react'
import { playClick } from '@/lib/audio'
import { useRadius } from '@/hooks/useRadius'

export type NodePosition = 'top' | 'right' | 'bottom' | 'left'

interface MenuNodeProps {
  label: string
  href: string
  position: NodePosition
}

const RING_RADII = [14, 22, 32]
const positionDelay: Record<NodePosition, number> = { top: 0, right: 0.6, bottom: 1.2, left: 1.8 }

export function MenuNode({ label, href, position }: MenuNodeProps) {
  const [hovered, setHovered] = useState(false)
  const R = useRadius()
  const isMobile = R < 250

  const anchorStyle: Record<NodePosition, CSSProperties> = {
    top:    { left: '50%', top:  `calc(50% - ${R}px)` },
    right:  { left: `calc(50% + ${R}px)`, top: '50%'  },
    bottom: { left: '50%', top:  `calc(50% + ${R}px)` },
    left:   { left: `calc(50% - ${R}px)`, top: '50%'  },
  }

  // On mobile, left/right labels flip inward so they don't overflow screen edges
  const labelStyle: Record<NodePosition, CSSProperties> = {
    top:    { bottom: 18, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' },
    right:  isMobile
      ? { right: 18, top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }
      : { left: 18,  top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' },
    bottom: { top:  18,  left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' },
    left:   isMobile
      ? { left: 18, top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }
      : { right: 18, top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' },
  }

  return (
    // Zero-size anchor pinned to the diamond corner
    <div
      className="absolute"
      style={{ ...anchorStyle[position], width: 0, height: 0, zIndex: 30 }}
    >
      <Link href={href}>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => playClick()}
        >
          {/* Idle pulse — disappears on hover */}
          {!hovered && (
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ border: '1px solid rgba(255,255,255,0.35)' }}
              animate={{ width: [10, 48], height: [10, 48], top: [-5, -24], left: [-5, -24], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', repeatDelay: 1.2, delay: positionDelay[position] }}
            />
          )}

          {/* Bullseye rings centered on the SVG dot — appear on hover */}
          <AnimatePresence>
            {hovered && RING_RADII.map((r, i) => (
              <motion.div
                key={r}
                className="absolute rounded-full"
                style={{
                  width: r * 2,
                  height: r * 2,
                  top: -r,
                  left: -r,
                  border: '1px solid rgba(255,255,255,0.6)',
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 0.5 - i * 0.12, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </AnimatePresence>

          {/* Label floats outward from corner */}
          <motion.span
            className="absolute font-mono text-xs tracking-[0.25em] uppercase"
            style={{ ...labelStyle[position], color: '#fff' }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        </div>
      </Link>
    </div>
  )
}
