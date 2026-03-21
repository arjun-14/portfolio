import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'secondary' | 'tertiary' | 'default'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  if (variant === 'default') {
    return (
      <span
        className={cn('inline-block font-mono text-xs px-2.5 py-1 rounded-full border', className)}
        style={{
          borderColor: 'var(--page-card-border)',
          color: 'var(--page-muted)',
          background: 'var(--page-card-bg)',
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-block font-mono text-xs px-2.5 py-1 rounded-full border',
        variant === 'accent' && 'border-accent/40 text-accent bg-accent/10',
        variant === 'secondary' && 'border-secondary/40 text-secondary bg-secondary/10',
        variant === 'tertiary' && 'border-tertiary/40 text-tertiary bg-tertiary/10',
        className
      )}
    >
      {children}
    </span>
  )
}
