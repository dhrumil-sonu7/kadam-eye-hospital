import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function DoctorCard({ name, qualification, description, delay = 0, image }) {
  const cardRef = useRef(null)
  
  // Track pointer position relative to the card's center
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Apple Design rule: Use springs (damping 1.0 = no overshoot, critically damped)
  const mouseXSpring = useSpring(x, { damping: 1, stiffness: 300, restDelta: 0.001 })
  const mouseYSpring = useSpring(y, { damping: 1, stiffness: 300, restDelta: 0.001 })

  // Map mouse position to tilt angles (subtle rotation)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])
  
  // Map mouse position to highlight position
  const highlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const highlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handlePointerMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate normalized coordinates (-0.5 to 0.5) from center
    const pctX = (e.clientX - rect.left) / rect.width - 0.5
    const pctY = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(pctX)
    y.set(pctY)
  }

  const handlePointerLeave = () => {
    // Snap back to 0
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="doctor-card apple-glass-card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        // Use Apple-like spring for entry
        type: 'spring', 
        damping: 1, 
        stiffness: 100, 
        delay 
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200
      }}
      whileHover={{ scale: 1.02 }} // Apple Rule: direct response to hover
      whileTap={{ scale: 0.98 }} // Apple Rule: immediate tap feedback
    >
      {/* Interactive Glare overlay tied to pointer tracking */}
      <motion.div 
        className="card-glare"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          left: highlightX,
          top: highlightY,
          position: 'absolute',
          width: '200%',
          height: '200%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10
        }}
      />

      <div className="doctor-card-image">
        <div className="doctor-avatar">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="doctor-avatar-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="28" r="14" fill="rgba(0,180,216,0.3)" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5"/>
                <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" fill="rgba(0,180,216,0.15)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="doctor-card-content">
        <h3>{name}</h3>
        <p className="doctor-qualification">{qualification}</p>
        {description && <p className="doctor-description">{description}</p>}
      </div>
    </motion.div>
  )
}
