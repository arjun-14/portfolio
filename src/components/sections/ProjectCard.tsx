'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, ShieldCheck, ScanSearch, BarChart3, Database, LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Project } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  SafePlate:                  ShieldCheck,
  TerraLens:                  ScanSearch,
  'NYC Trips Analytics':      BarChart3,
  'POS Cloud Database System': Database,
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[project.title] ?? Database

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-row items-center gap-6 p-6 rounded-2xl transition-colors duration-300"
      style={{
        background: 'var(--page-card-bg)',
        border: `1px solid ${hovered ? 'rgba(200,60,60,0.55)' : 'var(--page-card-border)'}`,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Icon column */}
      <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 80 }}>
        <motion.div
          className="flex items-center justify-center rounded-full"
          animate={{
            width: 72,
            height: 72,
            background: hovered ? 'rgba(200,60,60,0.22)' : 'rgba(200,60,60,0.10)',
            boxShadow: hovered ? '0 0 28px rgba(200,60,60,0.40)' : '0 0 0px rgba(200,60,60,0)',
          }}
          transition={{ duration: 0.25 }}
        >
          <Icon size={28} style={{ color: 'var(--page-accent)' }} />
        </motion.div>
      </div>

      {/* Content column */}
      <motion.div
        className="flex flex-col gap-2 flex-1 min-w-0"
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold" style={{ color: 'var(--page-text)' }}>
            {project.title}
          </h3>
          <span className="font-mono text-xs" style={{ color: 'var(--page-muted)' }}>
            {project.period}
          </span>
        </div>
        <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--page-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
        </div>
      </motion.div>

      {/* Links column */}
      <div className="flex flex-col gap-3 items-center flex-shrink-0">
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            animate={{ opacity: hovered ? 1 : 0.35, color: hovered ? 'var(--page-accent)' : 'var(--page-muted)' }}
            transition={{ duration: 0.2 }}
            style={{ color: 'var(--page-muted)' }}
          >
            <GitBranch size={18} />
          </motion.a>
        )}
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live site"
            animate={{ opacity: hovered ? 1 : 0.35, color: hovered ? 'var(--page-accent)' : 'var(--page-muted)' }}
            transition={{ duration: 0.2 }}
            style={{ color: 'var(--page-muted)' }}
          >
            <ExternalLink size={18} />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
