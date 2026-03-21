'use client'

import { useState, useEffect } from 'react'

function computeR() {
  const smaller = Math.min(window.innerWidth, window.innerHeight)
  return Math.min(Math.max(Math.round(smaller * 0.40), 130), 330)
}

export function useRadius() {
  const [r, setR] = useState(330) // SSR-safe default
  useEffect(() => {
    setR(computeR())
    const onResize = () => setR(computeR())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return r
}
