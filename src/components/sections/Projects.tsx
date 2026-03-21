'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--page-muted)' }}>
          Projects
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: 'var(--page-text)' }}>
          Things I&apos;ve <span className="wavy-underline">Built</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
