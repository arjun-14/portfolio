'use client'

import { motion } from 'framer-motion'
import { ConcentricRings } from '@/components/landing/ConcentricRings'
import { OrbitingParticles } from '@/components/landing/OrbitingParticles'
import { WatercolorClouds } from '@/components/landing/WatercolorClouds'
import { MenuNode } from '@/components/landing/MenuNode'
import { AmbientPlayer } from '@/components/landing/AmbientPlayer'

export default function Home() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #7B4FA0 0%, #3D5AAA 40%, #0090AA 75%, #00B8C8 100%)' }}
    >
      {/* Layer 0: Orbiting particles */}
      <OrbitingParticles />

      {/* Layer 5: Watercolor mist at bottom */}
      <WatercolorClouds />

      {/* Layer 10: Concentric rotating rings */}
      <ConcentricRings />

      {/* Layer 30: Four corner menu nodes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <MenuNode label="Experience" href="/experience" position="left"   />
        <MenuNode label="Projects"   href="/projects"   position="top"    />
        <MenuNode label="Media Log"  href="/media"      position="bottom" />
        <MenuNode label="Contact"    href="/contact"    position="right"  />
      </motion.div>

      {/* Ambient music player */}
      <AmbientPlayer />
    </div>
  )
}
