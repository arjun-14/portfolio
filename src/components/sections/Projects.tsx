'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
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

      <div
        style={{
          columns: '3 280px',
          columnGap: '1rem',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>


    </div>
  )
}
