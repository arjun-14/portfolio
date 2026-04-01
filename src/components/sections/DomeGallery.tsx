'use client'

import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useGesture } from '@use-gesture/react'
import { IconType } from 'react-icons'
import { LucideIcon } from 'lucide-react'
import './DomeGallery.css'

type AnyIcon = IconType | LucideIcon

export interface DomeTool {
  name: string
  category: string
  icon: AnyIcon
  color: string
}

interface ItemCoord {
  x: number
  y: number
  sizeX: number
  sizeY: number
}

interface DomeItem extends ItemCoord, DomeTool {}

const SEGMENTS = 35
// 90-degree arc: unit angle = 360/35/2 ≈ 5.14 deg; ±45 deg ≈ ±8 units
const MAX_HORIZONTAL_DEG = 45

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

function buildItems(tools: DomeTool[]): DomeItem[] {
  // Positions ordered left→right by category, with natural y variation
  // Languages (6) → Data Eng (9) → Cloud (4) → Analytics (3) → DevOps (3)
  const positions: Omit<ItemCoord, 'sizeX' | 'sizeY'>[] = [
    // Languages — far left
    { x: -8, y: -3 }, { x: -8, y:  2 },
    { x: -6, y: -1 }, { x: -6, y:  3 },
    { x: -4, y: -4 }, { x: -4, y:  1 },
    // Data Eng — center-left
    { x: -2, y: -3 }, { x: -2, y:  1 }, { x: -2, y:  4 },
    { x:  0, y: -4 }, { x:  0, y:  0 }, { x:  0, y:  3 },
    { x:  2, y: -2 }, { x:  2, y:  2 }, { x:  2, y: -5 },
    // Cloud — center-right
    { x:  4, y: -3 }, { x:  4, y: -1 }, { x:  4, y:  2 }, { x:  4, y:  4 },
    // Analytics — right
    { x:  6, y: -2 }, { x:  6, y:  1 }, { x:  6, y:  3 },
    // DevOps — far right
    { x:  8, y: -3 }, { x:  8, y:  0 }, { x:  8, y:  2 },
  ]

  return tools.map((tool, i) => ({ ...positions[i], sizeX: 2, sizeY: 2, ...tool }))
}

export function DomeGallery({
  tools,
  overlayBlurColor = 'var(--page-bg, #1a0d2e)',
  maxVerticalRotationDeg = 5,
  dragSensitivity = 20,
  dragDampening = 2,
  fit = 0.55,
  minRadius = 500,
}: {
  tools: DomeTool[]
  overlayBlurColor?: string
  maxVerticalRotationDeg?: number
  dragSensitivity?: number
  dragDampening?: number
  fit?: number
  minRadius?: number
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const sphereRef = useRef<HTMLDivElement>(null)

  const rotationRef = useRef({ x: 0, y: 0 })
  const startRotRef = useRef({ x: 0, y: 0 })
  const startPosRef = useRef<{ x: number; y: number } | null>(null)
  const draggingRef = useRef(false)
  const movedRef = useRef(false)
  const inertiaRAF = useRef<number | null>(null)

  const [hovered, setHovered] = useState<DomeTool | null>(null)

  const items = useMemo(() => buildItems(tools), [tools])

  const applyTransform = useCallback((xDeg: number, yDeg: number) => {
    const el = sphereRef.current
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect
      const w = Math.max(1, cr.width)
      const h = Math.max(1, cr.height)
      const aspect = w / h
      const basis = aspect >= 1.3 ? w : Math.min(w, h)
      let radius = basis * fit
      const heightGuard = h * 1.35
      radius = Math.min(radius, heightGuard)
      radius = Math.max(radius, minRadius)
      root.style.setProperty('--radius', `${Math.round(radius)}px`)
      root.style.setProperty('--overlay-blur-color', overlayBlurColor)
      applyTransform(rotationRef.current.x, rotationRef.current.y)
    })
    ro.observe(root)
    return () => ro.disconnect()
  }, [fit, minRadius, overlayBlurColor, applyTransform])

  useEffect(() => {
    applyTransform(0, 0)
  }, [applyTransform])

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current)
      inertiaRAF.current = null
    }
  }, [])

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4
      let vX = clamp(vx, -MAX_V, MAX_V) * 80
      let vY = clamp(vy, -MAX_V, MAX_V) * 80
      let frames = 0
      const d = clamp(dragDampening ?? 0.6, 0, 1)
      const frictionMul = 0.94 + 0.055 * d
      const stopThreshold = 0.015 - 0.01 * d
      const maxFrames = Math.round(90 + 270 * d)
      const step = () => {
        vX *= frictionMul
        vY *= frictionMul
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null
          return
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null
          return
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg)
        const nextY = clamp(rotationRef.current.y + vX / 200, -MAX_HORIZONTAL_DEG, MAX_HORIZONTAL_DEG)
        rotationRef.current = { x: nextX, y: nextY }
        applyTransform(nextX, nextY)
        inertiaRAF.current = requestAnimationFrame(step)
      }
      stopInertia()
      inertiaRAF.current = requestAnimationFrame(step)
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia, applyTransform]
  )

  useGesture(
    {
      onDragStart: ({ event }) => {
        stopInertia()
        const evt = event as MouseEvent
        if (mainRef.current) mainRef.current.style.cursor = 'grabbing'
        draggingRef.current = true
        movedRef.current = false
        startRotRef.current = { ...rotationRef.current }
        startPosRef.current = { x: evt.clientX, y: evt.clientY }
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (!draggingRef.current || !startPosRef.current) return
        const evt = event as MouseEvent
        const dxTotal = evt.clientX - startPosRef.current.x
        const dyTotal = evt.clientY - startPosRef.current.y
        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal
          if (dist2 > 16) movedRef.current = true
        }
        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        )
        const nextY = clamp(startRotRef.current.y + dxTotal / dragSensitivity, -MAX_HORIZONTAL_DEG, MAX_HORIZONTAL_DEG)
        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY }
          applyTransform(nextX, nextY)
        }
        if (last) {
          if (mainRef.current) mainRef.current.style.cursor = 'grab'
          draggingRef.current = false
          const [vMagX, vMagY] = velocity as number[]
          const [dirX, dirY] = direction as number[]
          let vx = vMagX * dirX
          let vy = vMagY * dirY
          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement as number[]
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2)
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2)
          }
          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy)
          movedRef.current = false
        }
      },
    },
    { target: mainRef, eventOptions: { passive: true } }
  )

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        ['--segments-x' as string]: SEGMENTS,
        ['--segments-y' as string]: SEGMENTS,
        ['--overlay-blur-color' as string]: overlayBlurColor,
      }}
    >
      <main ref={mainRef} className="sphere-main" style={{ cursor: 'grab' }}>
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => {
              const Icon = it.icon
              return (
                <div
                  key={`${it.x},${it.y},${i}`}
                  className="item"
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={{
                    ['--offset-x' as string]: it.x,
                    ['--offset-y' as string]: it.y,
                    ['--item-size-x' as string]: it.sizeX,
                    ['--item-size-y' as string]: it.sizeY,
                  }}
                >
                  <div
                    className="item__icon"
                    onMouseEnter={() => { setHovered(it) }}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Icon
                      size={32}
                      style={{ color: it.color, filter: `drop-shadow(0 0 5px ${it.color}99)` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
      </main>

      {/* Hover tooltip — bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 32,
          zIndex: 20,
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
      >
        {hovered && (
          <>
            <p
              className="font-serif text-base font-semibold"
              style={{ color: hovered.color, textShadow: `0 0 12px ${hovered.color}88` }}
            >
              {hovered.name}
            </p>
            <p
              className="font-mono text-[10px] tracking-widest uppercase mt-0.5"
              style={{ color: 'var(--page-muted)' }}
            >
              {hovered.category}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
