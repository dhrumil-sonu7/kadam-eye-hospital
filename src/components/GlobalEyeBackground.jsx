import React from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

const colors = [
  'rgba(0, 240, 255, 0.25)', // Cyan
  'rgba(255, 0, 85, 0.2)',   // Magenta
  'rgba(255, 215, 0, 0.2)',  // Gold
]

export default function GlobalEyeBackground() {
  // 24 background eyes
  const eyeCount = 24

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {[...Array(eyeCount)].map((_, i) => {
        // Randomize initial positioning and animation variables
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100
        const duration = Math.random() * 10 + 10 // 10 to 20 seconds
        const delay = Math.random() * 5
        const size = Math.random() * 24 + 16 // 16 to 40px
        const color = colors[Math.floor(Math.random() * colors.length)]

        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${initialX}%`,
              top: `${initialY}%`,
              color: color,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              // Drift slowly
              x: [0, (Math.random() * 200 - 100), (Math.random() * -200 + 100), 0],
              y: [0, (Math.random() * 200 - 100), (Math.random() * -200 + 100), 0],
              opacity: [0.1, 0.6, 0.1, 0.7, 0.1],
              scale: [0.8, 1.2, 0.8, 1.1, 0.8],
              // Rotate slightly over time
              rotate: [0, 45, -45, 0],
              // "Blink" effect: scaleY down to 0 momentarily
              scaleY: [1, 1, 1, 0, 1, 1, 1]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <Eye size={size} strokeWidth={1.5} />
          </motion.div>
        )
      })}
    </div>
  )
}
