'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { playHover, playClick } from '@/lib/audio'

const bio = [
  `My dad brought home a computer when I was in first grade. I don't think he expected me to spend every evening glued to it, taking things apart just to see how they worked. That never really stopped.`,
  `Engineering college was where I first felt the thrill of a project coming alive. Late nights, half-broken prototypes, teammates crowded around a laptop at 2am. I didn't always know what I was doing, but I was always curious enough to figure it out.`,
  `LTIMindtree was where the curiosity turned into craft. Three years as a Data Engineer, working with Python, Snowflake, Airflow, and DBT for clients like ServiceNow and Onsemi, taught me something I didn't expect. The code is rarely the hard part. Understanding what the business actually needs, and then building for that, is.`,
  `Now I'm at Texas A&M for an MS in Management Information Systems, trying to close the gap between the technical and the strategic. I've spent years learning how systems work. What I'm after now is understanding why they matter.`,
  `I'm actively looking for data engineering roles. If you think I'd be a good fit for your team, I'd love to hear from you.`,
]

const work = [
  { company: 'LTIMindtree', role: 'Data Engineer', period: '2021–2024' },
]

const education = [
  { company: 'Texas A&M University', role: 'MS MIS', period: '2024–Present' },
  { company: 'Pillai College of Engineering', role: 'B.E. Computer Eng', period: '2017–2021' },
]

const online = [
  { label: 'Email', href: 'mailto:arjunadukathil@tamu.edu' },
  { label: 'GitHub', href: 'https://github.com/arjun-14' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-adukathil/' },
  { label: 'Resume', href: '/Arjun_Adukathil_resume.pdf' },
]

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }
}

function TimelineRow({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="flex items-center flex-shrink-0">
        <span className="text-[13px] font-mono" style={{ color: 'var(--page-text)' }}>{left}</span>
      </div>
      <div className="flex-1" style={{ borderBottom: '1px solid rgba(45,26,24,0.18)', marginBottom: 1 }} />
      <div className="flex-shrink-0 flex items-center gap-3 text-right">
        {right}
      </div>
    </div>
  )
}

function Section({ label, children, delay }: { label: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div {...fade(delay)} className="flex gap-10 md:gap-16 mb-10">
      <div className="w-20 flex-shrink-0 pt-3">
        <p className="font-serif text-[10px] font-bold tracking-[0.2em]" style={{ color: 'var(--page-muted)' }}>
          {label}
        </p>
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <div className="max-w-2xl mx-auto pt-4 pb-24">

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
          Journey
        </h2>
        <p
          className="font-mono text-sm leading-relaxed max-w-md"
          style={{ color: 'var(--page-muted)' }}
        >
          Data engineer, problem solver, and grad student figuring out what comes next.
        </p>
      </motion.div>

      {/* About — staggered paragraphs */}
      <Section label="About" delay={0.15}>
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[13px] leading-relaxed"
            style={{ color: 'var(--page-text)' }}
          >
            Hi, I&apos;m Arjun Adukathil. Thanks for stopping by.
          </motion.p>
          {bio.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[13px] leading-relaxed text-justify"
              style={{ color: 'var(--page-text)' }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section label="Work" delay={0.25}>
        <div>
          {work.map((item, i) => (
            <TimelineRow
              key={i}
              left={item.company}
              right={
                <>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--page-muted)' }}>{item.role}</span>
                  <span className="font-mono text-[10px] tracking-wide w-20 text-right" style={{ color: 'var(--page-muted)' }}>{item.period}</span>
                </>
              }
            />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section label="Education" delay={0.35}>
        <div>
          {education.map((item, i) => (
            <TimelineRow
              key={i}
              left={item.company}
              right={
                <>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--page-muted)' }}>{item.role}</span>
                  <span className="font-mono text-[10px] tracking-wide w-20 text-right" style={{ color: 'var(--page-muted)' }}>{item.period}</span>
                </>
              }
            />
          ))}
        </div>
      </Section>

      {/* Where */}
      <Section label="Where" delay={0.45}>
        <p className="font-mono text-[13px] pt-1" style={{ color: 'var(--page-text)' }}>
          College Station, Texas
        </p>
      </Section>

      {/* Online */}
      <Section label="Find me" delay={0.55}>
        <div className="flex items-center gap-5 flex-wrap pt-1">
          {online.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-1 group"
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
            >
              <span
                className="font-mono text-[13px] transition-all duration-300"
                style={{ color: 'var(--page-text)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--page-accent)'
                  el.style.textShadow = `0 0 12px var(--page-accent), 0 0 24px var(--page-accent)88`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'var(--page-text)'
                  el.style.textShadow = 'none'
                }}
              >
                {item.label}
              </span>
              <ArrowUpRight size={11} style={{ color: 'var(--page-muted)' }} />
            </a>
          ))}
        </div>
      </Section>

    </div>
  )
}
