'use client'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { ReactNode, useEffect } from 'react'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion'

const COLORS_TOP = ['#13C6FF', '#1E67C6', '#8484CF', '#3366DD']

export const Hero = ({ children }: { children: ReactNode }) => {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [color])

  const backgroundImage = useMotionTemplate`radial-gradient(145% 145% at 50% 0%, #020617 60%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-gray-950 px-4 py-28 text-gray-200"
    >
      {children}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  )
}
export default Hero
