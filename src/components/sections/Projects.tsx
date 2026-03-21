'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

// Bento grid: 3 cols, 3 rows — total height 580px with 12px gaps
// Row heights: 240px | 190px | 150px
// Areas:
//   safe  nyc   port
//   safe  terra port
//   safe  house music

const AREA_MAP: Record<string, string> = {
  'SafePlate':                          'safe',
  'NYC Trips Analytics':                'nyc',
  'TerraLens':                          'terra',
  'Portfolio':                          'port',
  'Housing Society Management System':  'house',
  'Emotion Based Music Player':         'music',
}

export function Projects() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="py-8">
      {/* Header */}
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
          Projects
        </h2>
        <p
          className="font-mono text-sm leading-relaxed max-w-md"
          style={{ color: 'var(--page-muted)' }}
        >
          Data pipelines, AI systems, the occasional rabbit hole.
          A collection of things I got curious enough to actually finish.
        </p>
      </motion.div>

      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '240px 190px 150px',
            gridTemplateAreas: `
              "safe nyc   port"
              "safe terra port"
              "safe house music"
            `,
            gap: '12px',
          }}
        >
          {projects.map((project, i) => {
            const area = AREA_MAP[project.title]
            return (
              <div key={project.title} style={{ gridArea: area }}>
                <ProjectCard project={project} index={i} fillHeight />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
