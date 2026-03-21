import { CSSProperties } from 'react'
import { cn } from '@/lib/cn'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

export function SectionWrapper({ id, children, className, style }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-24 md:py-32', className)} style={style}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  )
}
