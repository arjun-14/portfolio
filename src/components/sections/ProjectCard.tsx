'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, ScanSearch, BarChart3, Globe, Music, Building2, LucideIcon } from 'lucide-react'
import { Project } from '@/types'
import { playHover, playClick } from '@/lib/audio'

const iconMap: Record<string, LucideIcon> = {
  SafePlate:                       ShieldCheck,
  TerraLens:                       ScanSearch,
  'NYC Trips Analytics':           BarChart3,
  Portfolio:                       Globe,
  'Emotion Based Music Player':    Music,
  'Housing Society Management System': Building2,
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[project.title] ?? Globe

  return (
    <motion.div
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer mb-4 break-inside-avoid flex flex-col items-center justify-center gap-5"
      style={{
        height: project.height ?? 320,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        background: hovered ? 'rgba(200,60,60,0.06)' : 'rgba(10,2,2,0.12)',
        border: `1px solid ${hovered ? 'rgba(200,60,60,0.55)' : 'rgba(255,255,255,0.07)'}`,
        transition: 'background 0.25s, border-color 0.25s',
      }}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 0.97 }}
      onMouseEnter={() => { setHovered(true); playHover() }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { playClick(); if (project.githubUrl) window.open(project.githubUrl, '_blank', 'noopener noreferrer') }}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          background: hovered ? 'rgba(200,60,60,0.22)' : 'rgba(200,60,60,0.10)',
          boxShadow: hovered ? '0 0 36px rgba(200,60,60,0.5)' : '0 0 0px transparent',
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.25 }}
        style={{ width: 64, height: 64 }}
      >
        <Icon size={26} style={{ color: 'var(--page-accent)' }} />
      </motion.div>

      {/* Title */}
      <motion.p
        className="font-serif font-semibold text-sm text-center px-6 leading-snug"
        animate={{ color: hovered ? '#ffffff' : 'rgba(245,238,232,0.7)' }}
        transition={{ duration: 0.2 }}
      >
        {project.title}
      </motion.p>

      {/* Description — slides up from bottom on hover */}
      {project.description && (
        <motion.p
          className="absolute bottom-0 left-0 right-0 px-6 pb-5 font-mono text-[11px] font-bold leading-relaxed text-left"
          style={{ color: 'rgba(245,238,232,0.6)' }}
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.description}
        </motion.p>
      )}

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered ? '0 0 50px rgba(200,60,60,0.2)' : 'none',
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  )
}
