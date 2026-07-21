import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './EyeAnatomyScroll.css'

export default function EyeAnatomyScroll() {
  const containerRef = useRef(null)
  
  // Track scroll progress within the container (which we'll make very tall)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // --- Transform Logic for 2.5D Depth ---
  
  // 1. Text overlays (Fading in and out based on scroll)
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [1, 1, 0, 0])
  const text1Y = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  
  const text2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.45, 1], [0, 0, 1, 0, 0])
  const text2Y = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [50, 0, -50])
  
  const text3Opacity = useTransform(scrollYProgress, [0, 0.4, 0.55, 0.65, 1], [0, 0, 1, 0, 0])
  const text3Y = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [50, 0, -50])
  
  const text4Opacity = useTransform(scrollYProgress, [0, 0.6, 0.75, 1], [0, 0, 1, 1])
  const text4Y = useTransform(scrollYProgress, [0.6, 0.75, 1], [50, 0, 0])

  // 2. Anatomy Layers Transformations
  // Sclera & Outer Eye
  const scleraScale = useTransform(scrollYProgress, [0, 0.25], [1, 2.5])
  const scleraOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0])
  
  // Cornea
  const corneaZ = useTransform(scrollYProgress, [0, 0.35], [0, 300])
  const corneaOpacity = useTransform(scrollYProgress, [0.25, 0.4], [1, 0])
  
  // Iris & Pupil
  const irisScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.8, 1, 2.5])
  const irisOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0])
  const irisZ = useTransform(scrollYProgress, [0.25, 0.5], [0, 400])

  // Lens
  const lensScale = useTransform(scrollYProgress, [0, 0.4, 0.65], [0.6, 0.8, 2])
  const lensOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1])
  const lensZ = useTransform(scrollYProgress, [0.4, 0.65], [0, 500])

  // Retina & Optic Nerve
  const retinaScale = useTransform(scrollYProgress, [0, 0.6, 0.85], [0.5, 0.8, 1.2])
  const retinaOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1])
  const retinaZ = useTransform(scrollYProgress, [0.6, 0.85], [0, 200])

  // Fade out entire scene at the end
  const containerOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0])

  return (
    <div ref={containerRef} className="eye-scroll-container">
      {/* Sticky wrapper for the visualizer */}
      <motion.div className="eye-sticky-wrapper" style={{ opacity: containerOpacity }}>
        
        {/* TEXT CONTENT */}
        <div className="anatomy-text-overlay">
          <motion.div className="anatomy-step" style={{ opacity: text1Opacity, y: text1Y }}>
            <h2 className="gradient-text">The Human Eye</h2>
            <p>A masterpiece of biological engineering. Scroll to explore its complex layers.</p>
          </motion.div>
          
          <motion.div className="anatomy-step" style={{ opacity: text2Opacity, y: text2Y, pointerEvents: 'none' }}>
            <h2>The Cornea</h2>
            <p>The clear front surface that lets light in and provides most of the eye's focusing power.</p>
          </motion.div>
          
          <motion.div className="anatomy-step" style={{ opacity: text3Opacity, y: text3Y, pointerEvents: 'none' }}>
            <h2>Iris & Lens</h2>
            <p>The iris controls light entry, while the lens fine-tunes the focus onto the retina.</p>
          </motion.div>
          
          <motion.div className="anatomy-step" style={{ opacity: text4Opacity, y: text4Y, pointerEvents: 'none' }}>
            <h2>Retina & Optic Nerve</h2>
            <p>Millions of photoreceptors convert light into electrical signals sent to the brain.</p>
          </motion.div>
        </div>

        {/* 3D LAYERED SVG VISUALIZER */}
        <div className="eye-layers-container">
          
          {/* Layer 5: Retina & Optic Nerve (Back) */}
          <motion.div 
            className="eye-layer"
            style={{ 
              scale: retinaScale, 
              opacity: retinaOpacity, 
              z: retinaZ,
              zIndex: 1
            }}
          >
            <svg viewBox="0 0 200 100" className="anatomy-svg">
              {/* Stylized Retina network matched to new center */}
              <circle cx="100" cy="50" r="30" fill="#0f172a" />
              <circle cx="100" cy="50" r="28" fill="none" stroke="#ff0055" strokeWidth="1" strokeDasharray="2 2"/>
              <path d="M100 50 Q120 30 130 50 T100 80" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
              <path d="M100 50 Q80 70 70 50 T100 20" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
              <circle cx="100" cy="50" r="8" fill="#ffd700" opacity="0.8" filter="blur(2px)" />
            </svg>
          </motion.div>

          {/* Layer 4: Lens */}
          <motion.div 
            className="eye-layer"
            style={{ 
              scale: lensScale, 
              opacity: lensOpacity, 
              z: lensZ,
              zIndex: 2
            }}
          >
            <svg viewBox="0 0 200 100" className="anatomy-svg">
              <ellipse cx="100" cy="50" rx="20" ry="30" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" strokeWidth="1" />
              <ellipse cx="100" cy="50" rx="10" ry="20" fill="rgba(255, 255, 255, 0.4)" />
            </svg>
          </motion.div>

          {/* Layer 3: Iris & Pupil (From EyeAnimation) */}
          <motion.div 
            className="eye-layer"
            style={{ 
              scale: irisScale, 
              opacity: irisOpacity, 
              z: irisZ,
              zIndex: 3
            }}
          >
            <svg viewBox="0 0 200 100" className="anatomy-svg">
              <circle cx="100" cy="50" r="28" fill="url(#irisGradient)" />
              {[22, 16, 10].map((r, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy="50"
                  r={r}
                  fill="none"
                  stroke={i % 2 === 0 ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 0, 85, 0.8)"}
                  strokeWidth="0.8"
                />
              ))}
              <circle cx="100" cy="50" r="10" fill="#050b14" />
              
              <defs>
                <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="60%" stopColor="#ff0055" />
                  <stop offset="100%" stopColor="#050b14" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Layer 2: Cornea (Reflections from EyeAnimation) */}
          <motion.div 
            className="eye-layer"
            style={{ 
              scale: scleraScale, 
              opacity: corneaOpacity, 
              z: corneaZ,
              zIndex: 4
            }}
          >
            <svg viewBox="0 0 200 100" className="anatomy-svg">
              <circle cx="108" cy="42" r="5" fill="#ffd700" opacity="0.8" />
              <circle cx="92" cy="56" r="3" fill="#00f0ff" opacity="0.6" />
            </svg>
          </motion.div>

          {/* Layer 1: Sclera & Outer Eye (From EyeAnimation) */}
          <motion.div 
            className="eye-layer"
            style={{ 
              scale: scleraScale, 
              opacity: scleraOpacity,
              zIndex: 5
            }}
          >
            <svg viewBox="0 0 200 100" className="anatomy-svg">
              <path
                d="M10 50 Q100 -10 190 50 Q100 110 10 50 Z"
                fill="rgba(15, 23, 42, 0.8)"
                stroke="url(#eyeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="100"
                cy="50"
                r="32"
                fill="none"
                stroke="url(#pulseGradient)"
                strokeWidth="2"
                opacity="0.8"
              />
              <defs>
                <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="50%" stopColor="#ff0055" />
                  <stop offset="100%" stopColor="#ffd700" />
                </linearGradient>
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#ff0055" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  )
}
