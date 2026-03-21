import { cn } from '@/lib/cn'

interface InkBlotProps {
  color?: 'accent' | 'secondary' | 'tertiary'
  className?: string
  id: string
}

const colorMap = {
  accent:    '#C9847A',
  secondary: '#7BAAB3',
  tertiary:  '#B8A9D9',
}

/**
 * Organic SVG ink blot using feTurbulence to distort an ellipse.
 * Replaces the generic `rounded-full blur-3xl` pattern.
 */
export function InkBlot({ color = 'accent', className, id }: InkBlotProps) {
  const fill = colorMap[color]
  const filterId = `inkblot-${id}`

  return (
    <svg
      aria-hidden="true"
      className={cn('absolute pointer-events-none overflow-visible', className)}
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.035"
            numOctaves="4"
            seed={id.charCodeAt(0)}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <ellipse
        cx="100"
        cy="80"
        rx="80"
        ry="60"
        fill={fill}
        opacity="0.10"
        filter={`url(#${filterId})`}
      />
    </svg>
  )
}

// Keep old name as alias so existing imports don't break
export { InkBlot as WatercolorBlob }
