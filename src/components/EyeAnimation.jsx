import { motion } from 'framer-motion'

export default function EyeAnimation() {
  return (
    <div className="eye-animation-container">
      <svg viewBox="0 0 200 100" className="eye-svg">
        {/* Outer eye shape */}
        <motion.path
          d="M10 50 Q100 -10 190 50 Q100 110 10 50 Z"
          fill="none"
          stroke="url(#eyeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0, filter: 'blur(4px)' }}
          animate={{ pathLength: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        
        {/* Iris outer */}
        <motion.circle
          cx="100"
          cy="50"
          r="28"
          fill="url(#irisGradient)"
          initial={{ scale: 0, opacity: 0, filter: 'blur(6px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Prismatic Iris pattern rings */}
        {[22, 16, 10].map((r, i) => (
          <motion.circle
            key={i}
            cx="100"
            cy="50"
            r={r}
            fill="none"
            stroke={i % 2 === 0 ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 0, 85, 0.8)"}
            strokeWidth="0.8"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 1 + i * 0.2, duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            style={{ originX: '100px', originY: '50px' }}
          />
        ))}
        
        {/* Pupil */}
        <motion.circle
          cx="100"
          cy="50"
          r="10"
          fill="#050b14"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Light reflection - Gold & Cyan */}
        <motion.circle
          cx="108"
          cy="42"
          r="5"
          fill="#ffd700"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8], scale: [1, 1.2, 1] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="92"
          cy="56"
          r="3"
          fill="#00f0ff"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6], scale: [1, 1.5, 1] }}
          transition={{ delay: 2.2, duration: 1.5, repeat: Infinity }}
        />

        {/* Glow pulse - Magenta/Cyan shift */}
        <motion.circle
          cx="100"
          cy="50"
          r="32"
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth="2"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ originX: '100px', originY: '50px' }}
        />

        {/* Prismatic Gradient definitions */}
        <defs>
          <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#ff0055" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
          <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="60%" stopColor="#ff0055" />
            <stop offset="100%" stopColor="#050b14" />
          </radialGradient>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#ff0055" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
