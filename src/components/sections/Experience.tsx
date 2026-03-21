'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TimelineItem } from './TimelineItem'
import { experience } from '@/data/experience'

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="experience">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--page-muted)' }}>
          Experience
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: 'var(--page-text)' }}>
          The <span className="wavy-underline">Journey</span>
        </h2>
      </motion.div>

      <div>
        {experience.map((item, i) => (
          <TimelineItem
            key={`${item.company}-${i}`}
            item={item}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
