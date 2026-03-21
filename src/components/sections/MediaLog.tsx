'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Gamepad2, BookOpen, Tv, CheckCircle2 } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { mediaLog } from '@/data/media'
import { MediaItem } from '@/types'

const categoryConfig = {
  playing:  { label: 'Now Playing',       Icon: Gamepad2,     colorKey: 'accent'   },
  finished: { label: 'Recently Finished',  Icon: CheckCircle2, colorKey: 'accent'   },
  reading:  { label: 'Reading',            Icon: BookOpen,     colorKey: 'accent'   },
  watching: { label: 'Watching',           Icon: Tv,           colorKey: 'muted'    },
}

function MediaCard({ item, index }: { item: MediaItem; index: number }) {
  const config = categoryConfig[item.category]
  const { Icon } = config

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="rounded-2xl p-5 flex flex-col gap-3"
      style={{
        background: 'var(--page-card-bg)',
        border: '1px solid var(--page-card-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center gap-2">
        <Icon size={15} style={{ color: 'var(--page-accent)' }} />
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--page-accent)' }}>
          {config.label}
        </span>
      </div>
      <div>
        <p className="font-serif text-lg font-semibold" style={{ color: 'var(--page-text)' }}>
          {item.title}
        </p>
        {item.subtitle && (
          <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--page-muted)' }}>
            {item.subtitle}
          </p>
        )}
      </div>
      {item.note && (
        <p className="font-sans text-xs italic" style={{ color: 'var(--page-muted)' }}>
          {item.note}
        </p>
      )}
    </motion.div>
  )
}

export function MediaLog() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="media">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--page-muted)' }}>
          Media Log
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: 'var(--page-text)' }}>
          What I&apos;m <span className="wavy-underline">Into</span>
        </h2>
        <p className="font-sans text-sm mt-4 max-w-md" style={{ color: 'var(--page-muted)' }}>
          A window into what I&apos;m playing, reading, and watching — because a good story
          is a good story, whatever the medium.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mediaLog.map((item, i) => (
          <MediaCard key={`${item.category}-${i}`} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
