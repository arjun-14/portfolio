'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

export function AmbientPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const started = useRef(false)
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function fadeIn(audio: HTMLAudioElement) {
    if (fadeRef.current) clearInterval(fadeRef.current)
    audio.volume = 0
    fadeRef.current = setInterval(() => {
      audio.volume = Math.min(audio.volume + 0.02, 0.10)
      if (audio.volume >= 0.10 && fadeRef.current) {
        clearInterval(fadeRef.current)
        fadeRef.current = null
      }
    }, 40) // reaches 0.75 in ~3 seconds
  }

  function fadeOut(audio: HTMLAudioElement, onDone: () => void) {
    if (fadeRef.current) clearInterval(fadeRef.current)
    fadeRef.current = setInterval(() => {
      audio.volume = Math.max(audio.volume - 0.025, 0)
      if (audio.volume <= 0 && fadeRef.current) {
        clearInterval(fadeRef.current)
        fadeRef.current = null
        onDone()
      }
    }, 40) // reaches 0 in ~1.2 seconds
  }

  function startAudio() {
    const audio = audioRef.current
    if (!audio || started.current) return
    started.current = true
    audio.play().then(() => fadeIn(audio)).catch(() => { started.current = false })
  }

  function toggle() {
    const audio = audioRef.current
    if (!audio) return

    if (!started.current) {
      // First interaction via the button itself
      startAudio()
      setIsPlaying(true)
      return
    }

    if (isPlaying) {
      fadeOut(audio, () => audio.pause())
      setIsPlaying(false)
    } else {
      audio.play().then(() => fadeIn(audio)).catch(() => { /* autoplay blocked */ })
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const audio = new Audio('/ambient.mp3')
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    // Start on first interaction anywhere except the ambient button itself
    const handler = (e: PointerEvent) => {
      if (buttonRef.current?.contains(e.target as Node)) return
      startAudio()
      window.removeEventListener('pointerdown', handler)
    }
    window.addEventListener('pointerdown', handler)

    // Pause when tab loses focus, resume when it comes back
    const onVisibility = () => {
      const audio = audioRef.current
      if (!audio || !started.current) return
      if (document.hidden) {
        audio.pause()
      } else {
        audio.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.removeEventListener('pointerdown', handler)
      document.removeEventListener('visibilitychange', onVisibility)
      if (fadeRef.current) clearInterval(fadeRef.current)
      audio.pause()
      audioRef.current = null
      started.current = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-7 left-7 z-40"
    >
      <button
        ref={buttonRef}
        onClick={toggle}
        className="flex items-center gap-2.5"
        aria-label={isPlaying ? 'Pause ambient' : 'Play ambient'}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying && (
            <motion.div
              className="absolute rounded-full border border-white/30"
              animate={{ width: [18, 32], height: [18, 32], opacity: [0.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          <motion.div
            animate={{ opacity: isPlaying ? 0.85 : 0.35 }}
            whileHover={{ opacity: 0.85 }}
            style={{ color: '#fff' }}
          >
            {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </motion.div>
        </div>

        <motion.span
          className="font-mono text-[10px] tracking-[0.2em] uppercase"
          animate={{ opacity: isPlaying ? 0.6 : 0.25 }}
          whileHover={{ opacity: 0.6 }}
          style={{ color: '#fff' }}
        >
          {isPlaying ? 'ambient' : 'muted'}
        </motion.span>
      </button>
    </motion.div>
  )
}
