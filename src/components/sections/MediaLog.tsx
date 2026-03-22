'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Gamepad2, BookOpen, Tv, Music } from 'lucide-react'
import { playHover, playClick } from '@/lib/audio'
import { mediaLog } from '@/data/media'
import { MediaItem } from '@/types'

const categoryLabel: Record<MediaItem['category'], string> = {
  playing: 'Playing',
  reading: 'Reading',
  watching: 'Watching',
  listening: 'Listening',
}

const categoryIcon = {
  playing:   Gamepad2,
  reading:   BookOpen,
  watching:  Tv,
  listening: Music,
}

function MediaCard({ item, index, fillHeight }: { item: MediaItem; index: number; fillHeight?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ scale: 0.97 }}
      className="relative rounded-2xl p-6 flex flex-col gap-3 cursor-pointer"
      style={{
        height: fillHeight ? '100%' : undefined,
        background: hovered ? 'rgba(10,40,80,0.65)' : 'var(--page-card-bg)',
        border: `1px solid ${hovered ? 'rgba(74,144,200,0.55)' : 'var(--page-card-border)'}`,
        backdropFilter: 'blur(12px)',
        transition: 'background 0.25s, border-color 0.25s',
      }}
      onMouseEnter={() => { setHovered(true); playHover() }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { playClick(); window.open(item.platformUrl, '_blank', 'noopener noreferrer') }}
    >
      <div className="flex items-center gap-2">
        {(() => { const Icon = categoryIcon[item.category]; return <Icon size={13} style={{ color: 'var(--page-muted)' }} /> })()}
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: 'var(--page-muted)' }}
        >
          {categoryLabel[item.category]}
        </span>
      </div>

      <div>
        <p className="font-serif text-xl font-bold leading-snug" style={{ color: 'var(--page-text)' }}>
          {item.title}
        </p>
        <p className="font-mono text-xs mt-1" style={{ color: 'var(--page-muted)' }}>
          {item.creator}
        </p>
      </div>


      <div className="flex-1" />

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ boxShadow: hovered ? '0 0 50px rgba(74,144,200,0.2)' : 'none' }}
        transition={{ duration: 0.25 }}
      />

      <a
        href={item.platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 self-end"
        onClick={() => playClick()}
      >
        <span
          className="font-mono text-xs transition-all duration-300"
          style={{ color: 'var(--page-muted)' }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--page-accent)'
            el.style.textShadow = '0 0 12px var(--page-accent), 0 0 24px var(--page-accent)88'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.color = 'var(--page-muted)'
            el.style.textShadow = 'none'
          }}
        >
          {item.platform}
        </span>
        <ArrowUpRight size={11} style={{ color: 'var(--page-muted)' }} />
      </a>
    </motion.div>
  )
}

export function MediaLog() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="max-w-2xl mx-auto pt-4 pb-24">
      <motion.div
        className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 mb-12 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="font-serif text-4xl md:text-5xl font-bold flex-shrink-0"
          style={{ color: 'var(--page-text)' }}
        >
          Media Log
        </h2>
        <p
          className="font-mono text-sm leading-relaxed max-w-md"
          style={{ color: 'var(--page-muted)' }}
        >
          The things quietly running in the background of everything else.
        </p>
      </motion.div>

      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {mediaLog.map((item, i) => (
            <MediaCard key={item.title} item={item} index={i} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '220px 160px 180px',
            gridTemplateAreas: `
              "play read"
              "play watch"
              "list watch"
            `,
            gap: '12px',
          }}
        >
          {mediaLog.map((item, i) => {
            const areaMap: Record<MediaItem['category'], string> = {
              playing:   'play',
              reading:   'read',
              watching:  'watch',
              listening: 'list',
            }
            return (
              <div key={item.title} style={{ gridArea: areaMap[item.category] }}>
                <MediaCard item={item} index={i} fillHeight />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
