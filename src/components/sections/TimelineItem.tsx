'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { ExperienceItem } from '@/types'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
  isLast: boolean
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const Icon = item.type === 'education' ? GraduationCap : Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 z-10"
          style={{
            borderColor: 'var(--page-accent)',
            background: 'var(--page-card-bg)',
          }}
        >
          <Icon size={16} style={{ color: 'var(--page-accent)' }} />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{ background: 'var(--page-card-border)' }} />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 flex-1 ${isLast ? 'pb-0' : ''}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="font-serif text-xl font-semibold" style={{ color: 'var(--page-text)' }}>
            {item.company}
          </h3>
          <span className="font-mono text-xs" style={{ color: 'var(--page-muted)' }}>
            {item.period}
          </span>
        </div>
        <p className="font-sans text-sm mb-1" style={{ color: 'var(--page-accent)' }}>
          {item.role}
        </p>
        <p className="font-mono text-xs mb-4" style={{ color: 'var(--page-muted)' }}>
          {item.location}
        </p>

        {/* Single bullets */}
        {item.bullets.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {item.bullets.map((b, i) => (
              <li key={i} className="font-sans text-sm flex gap-2" style={{ color: 'var(--page-muted)' }}>
                <span className="mt-1 shrink-0" style={{ color: 'var(--page-accent)' }}>·</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Sub-roles (e.g. different clients) */}
        {item.subRoles && (
          <div className="space-y-5">
            {item.subRoles.map((sub) => (
              <div key={sub.client}>
                <p
                  className="font-mono text-xs tracking-wide uppercase mb-2"
                  style={{ color: 'var(--page-accent)' }}
                >
                  {sub.client}
                </p>
                <ul className="space-y-1.5">
                  {sub.bullets.map((b, i) => (
                    <li key={i} className="font-sans text-sm flex gap-2" style={{ color: 'var(--page-muted)' }}>
                      <span className="mt-1 shrink-0" style={{ color: 'var(--page-accent)' }}>·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.skills.map((s) => (
              <Badge key={s} variant="secondary">{s}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
