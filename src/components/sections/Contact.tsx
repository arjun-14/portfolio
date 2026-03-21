'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const links = [
  {
    label: 'Email',
    href: 'mailto:arjun.adukathil@tamu.edu',
    Icon: Mail,
    display: 'arjun.adukathil@tamu.edu',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/arjunadukathil',
    Icon: Github,
    display: 'github.com/arjunadukathil',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arjunadukathil',
    Icon: Linkedin,
    display: 'linkedin.com/in/arjunadukathil',
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl"
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--page-muted)' }}>
          Contact
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--page-text)' }}>
          Let&apos;s <span className="wavy-underline">Connect</span>
        </h2>
        <p className="font-sans text-base leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--page-muted)' }}>
          Whether it&apos;s a data engineering challenge, a collaboration idea, or just
          a good game recommendation — my inbox is open.
        </p>

        <div className="flex flex-col gap-4">
          {links.map(({ label, href, Icon, display }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
              style={{
                background: 'var(--page-card-bg)',
                border: '1px solid var(--page-card-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <Icon size={16} style={{ color: 'var(--page-accent)' }} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--page-muted)' }}>
                  {label}
                </p>
                <p className="font-sans text-sm g-hover-accent transition-colors" style={{ color: 'var(--page-text)' }}>
                  {display}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
