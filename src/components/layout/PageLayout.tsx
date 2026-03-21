'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { OrbitingParticles } from '@/components/landing/OrbitingParticles'
import { playHover, playClick } from '@/lib/audio'
import { AmbientPlayer } from '@/components/landing/AmbientPlayer'
import { RedFog } from '@/components/landing/RedFog'
import { PinkBranches } from '@/components/landing/PinkBranches'
import { BlueCrystals } from '@/components/landing/BlueCrystals'
import { ColorfulFoliage } from '@/components/landing/ColorfulFoliage'

export type Chapter = 'red' | 'pink' | 'blue' | 'colorful'

const chapterConfig: Record<Chapter, {
  gradient: string
  cardBg: string
  cardBorder: string
  text: string
  accent: string
  muted: string
  Decor: React.ComponentType
}> = {
  red: {
    gradient: 'linear-gradient(180deg, #0D0505 0%, #3D0E0E 50%, #7A1A1A 100%)',
    cardBg: 'rgba(120,20,20,0.30)',
    cardBorder: 'rgba(200,60,60,0.20)',
    text: '#F5EEE8',
    accent: '#C84040',
    muted: 'rgba(245,238,232,0.55)',
    Decor: RedFog,
  },
  pink: {
    gradient: 'linear-gradient(180deg, #D4B8B0 0%, #B8CEC8 50%, #E8D4CC 100%)',
    cardBg: 'rgba(255,255,255,0.45)',
    cardBorder: 'rgba(180,140,130,0.30)',
    text: '#2D1A18',
    accent: '#7BAAB5',
    muted: 'rgba(45,26,24,0.55)',
    Decor: PinkBranches,
  },
  blue: {
    gradient: 'linear-gradient(180deg, #020A14 0%, #041A3A 40%, #0A3A6A 100%)',
    cardBg: 'rgba(10,40,80,0.50)',
    cardBorder: 'rgba(40,100,180,0.30)',
    text: '#D0E8F8',
    accent: '#4A90C8',
    muted: 'rgba(208,232,248,0.55)',
    Decor: BlueCrystals,
  },
  colorful: {
    gradient: 'linear-gradient(180deg, #1A0D28 0%, #2D1545 50%, #1A0D28 100%)',
    cardBg: 'rgba(60,20,80,0.40)',
    cardBorder: 'rgba(180,80,180,0.25)',
    text: '#F0E8F8',
    accent: '#C8A030',
    muted: 'rgba(240,232,248,0.55)',
    Decor: ColorfulFoliage,
  },
}

interface PageLayoutProps {
  chapter: Chapter
  children: React.ReactNode
}

export function PageLayout({ chapter, children }: PageLayoutProps) {
  const cfg = chapterConfig[chapter]
  const { Decor } = cfg

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: cfg.gradient,
        // Scoped CSS vars consumed by section components
        ['--page-card-bg' as string]: cfg.cardBg,
        ['--page-card-border' as string]: cfg.cardBorder,
        ['--page-text' as string]: cfg.text,
        ['--page-accent' as string]: cfg.accent,
        ['--page-muted' as string]: cfg.muted,
      }}
    >
      {/* Chapter-specific decorative background */}
      <Decor />

      {/* Orbiting particles at reduced opacity for inner pages */}
      <OrbitingParticles opacity={0.25} />

      {/* Back to home button */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-7 left-7 z-50"
      >
        <Link href="/">
          <div
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 group-hover:opacity-100"
              style={{ color: cfg.muted }}
              onMouseEnter={e => { playHover(); e.currentTarget.style.textShadow = `0 0 12px ${cfg.accent}, 0 0 24px ${cfg.accent}88` }}
              onMouseLeave={e => (e.currentTarget.style.textShadow = 'none')}
              onClick={() => playClick()}
            >
              Home
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Ambient player */}
      <AmbientPlayer />

      {/* Page content */}
      <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}
