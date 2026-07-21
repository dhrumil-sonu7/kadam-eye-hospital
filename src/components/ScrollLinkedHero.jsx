import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Star } from 'lucide-react';
import './ScrollLinkedHero.css';

export default function ScrollLinkedHero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Hero Content Fades Out, then Fades Back In
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [1, 0, 0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 0.05, 0.85, 1], [0, -50, -50, 0]);
  
  // 1. Background Blur & Darken (Optimized: animating opacity instead of filter)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // Eye transitions rightward, scales up
  const eyeScale = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [1, 1.2, 1.2, 1]);
  const eyeX = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 50, 50, 0]);
  
  // Anatomy Texts Opacities
  // We offset the start slightly after hero fades out
  const text1Opacity = useTransform(scrollYProgress, [0.08, 0.15, 0.25, 0.3], [0, 1, 0, 0])
  const text1Y = useTransform(scrollYProgress, [0.08, 0.15, 0.25, 0.3], [50, 0, -50, -50])
  
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 0, 0])
  const text2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [50, 0, -50, -50])
  
  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [0, 1, 0, 0])
  const text3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.7], [50, 0, -50, -50])
  
  const text4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.8, 0.85], [0, 1, 1, 0])
  const text4Y = useTransform(scrollYProgress, [0.65, 0.75, 0.8, 0.85], [50, 0, 0, -50])

  // Anatomy Layers Transforms (reverts at the end)
  // Explodes out into Z-space with dynamic individual rotations
  const scleraScale = useTransform(scrollYProgress, [0.1, 0.8, 0.85, 1], [1, 1.5, 1.5, 1])
  const scleraOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.85, 1], [1, 0.2, 0.2, 1])
  
  const corneaOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.85, 1], [1, 1, 0, 0, 1])
  const corneaZ = useTransform(scrollYProgress, [0.15, 0.25, 0.85, 1], [0, 450, 450, 0])
  const corneaRotateX = useTransform(scrollYProgress, [0.15, 0.25, 0.85, 1], [0, -15, -15, 0])
  const corneaRotateY = useTransform(scrollYProgress, [0.15, 0.25, 0.85, 1], [0, 10, 10, 0])
  
  const irisScale = useTransform(scrollYProgress, [0.25, 0.4, 0.85, 1], [1, 1.1, 1.1, 1])
  const irisOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.85, 1], [1, 1, 0, 0, 1])
  const irisZ = useTransform(scrollYProgress, [0.25, 0.4, 0.85, 1], [0, 300, 300, 0])
  const irisRotateY = useTransform(scrollYProgress, [0.25, 0.4, 0.85, 1], [0, -10, -10, 0])
  const irisRotateX = useTransform(scrollYProgress, [0.25, 0.4, 0.85, 1], [0, 5, 5, 0])
  
  const lensScale = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 1], [1, 1.1, 1.1, 1])
  const lensOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65, 0.85, 1], [0, 0, 1, 1, 0, 0, 0])
  const lensZ = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 1], [0, 150, 150, 0])
  const lensRotateX = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 1], [0, 20, 20, 0])
  const lensRotateY = useTransform(scrollYProgress, [0.45, 0.6, 0.85, 1], [0, -15, -15, 0])
  
  const retinaScale = useTransform(scrollYProgress, [0, 0.65, 0.8, 0.85, 1], [1, 1, 1.2, 1.2, 1])
  const retinaOpacity = useTransform(scrollYProgress, [0, 0.65, 0.8, 0.85, 1], [0, 0, 1, 1, 0])
  const retinaZ = useTransform(scrollYProgress, [0, 0.65, 0.8, 0.85, 1], [0, 0, -150, -150, 0])
  const retinaRotateX = useTransform(scrollYProgress, [0, 0.65, 0.8, 0.85, 1], [0, 0, -10, -10, 0])

  // Extract static Math.random values to prevent re-renders (Performance)
  const particles = React.useMemo(() => {
    return [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      size: Math.random() * 15 + 10,
      color: ['rgba(0, 240, 255, 0.6)', 'rgba(255, 0, 85, 0.6)', 'rgba(255, 215, 0, 0.6)'][Math.floor(Math.random() * 3)]
    }))
  }, [])

  return (
    <div className="scroll-hero-container" ref={containerRef}>
      <motion.div className="sticky-wrapper">
        
        {/* Base Background (Static) */}
        <div className="hero-bg">
          <div className="hero-particles">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="particle"
                style={{
                  position: 'absolute',
                  left: p.left,
                  top: p.top,
                  willChange: 'transform, opacity'
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.5, 0.1],
                  scale: [0.8, 1.5, 0.8]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                }}
              >
                <Eye size={p.size} color={p.color} />
              </motion.div>
            ))}
          </div>
          <div className="bg-grid" />
        </div>

        {/* Blur Overlay (GPU Accelerated Fade) */}
        <motion.div 
          style={{ 
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(40px) brightness(0.2)',
            WebkitBackdropFilter: 'blur(40px) brightness(0.2)',
            opacity: bgOpacity,
            willChange: 'opacity',
            pointerEvents: 'none',
            zIndex: 1
          }} 
        />

        {/* SINGLE GRID WRAPPER */}
        <div className="container scroll-layers-wrapper">
          
          {/* LEFT SIDE: HERO CONTENT */}
          <motion.div 
            className="hero-text hero-content-left"
            style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroOpacity === 0 ? 'none' : 'auto' }}
          >
            <div className="hero-badge">
              <Star size={14} /> Since 1982 — Trusted Eye Care
            </div>
            <h1>
              Welcome To <br />
              <span className="gradient-text">Kadam Eye Hospital</span>
            </h1>
            <p className="hero-subtitle">
              A reputed Eye Hospital at Vadodara is situated at heart of the city, Behind Railway Station. The hospital has a team of well qualified and experienced surgeon.
            </p>
            <div className="hero-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/about-us" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* LEFT SIDE: ANATOMY TEXTS */}
          <div className="anatomy-texts-left">
            <motion.div className="anatomy-step" style={{ opacity: text1Opacity, y: text1Y }}>
              <h2 className="gradient-text">The Human Eye</h2>
              <p>A masterpiece of biological engineering. Scroll to explore its complex layers.</p>
            </motion.div>
            <motion.div className="anatomy-step" style={{ opacity: text2Opacity, y: text2Y }}>
              <h2 className="gradient-text">The Cornea</h2>
              <p>The eye's clear, protective outer layer that acts like a camera lens, bending light to help focus.</p>
            </motion.div>
            <motion.div className="anatomy-step" style={{ opacity: text3Opacity, y: text3Y }}>
              <h2 className="gradient-text">Iris & Lens</h2>
              <p>The iris controls light entry, while the crystalline lens fine-tunes the focus onto the retina.</p>
            </motion.div>
            <motion.div className="anatomy-step" style={{ opacity: text4Opacity, y: text4Y }}>
              <h2 className="gradient-text">Retina & Optic Nerve</h2>
              <p>Millions of photoreceptors convert light into electrical signals sent to the brain.</p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE EYE */}
          <motion.div className="hero-visual eye-content-right" style={{ scale: eyeScale, x: eyeX }}>
            <motion.div className="eye-layers-container">
              
              {/* High Performance CSS Glow (replaces SVG drop-shadow) */}
              <div 
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'transparent',
                  boxShadow: '0 0 50px 20px rgba(0, 180, 216, 0.25)',
                  zIndex: 0
                }}
              />
              
              {/* Layer 5: Retina (Hidden initially) */}
              <motion.div className="eye-layer" style={{ scale: retinaScale, opacity: retinaOpacity, z: retinaZ, rotateX: retinaRotateX, zIndex: 1 }}>
                <svg viewBox="0 0 200 100" className="anatomy-svg">
                  <circle cx="100" cy="50" r="30" fill="#0f172a" />
                  <circle cx="100" cy="50" r="28" fill="none" stroke="#ff0055" strokeWidth="1" strokeDasharray="2 2"/>
                  <path d="M100 50 Q120 30 130 50 T100 80" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
                  <path d="M100 50 Q80 70 70 50 T100 20" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
                  <circle cx="100" cy="50" r="8" fill="#ffd700" opacity="0.8" filter="blur(2px)" />
                </svg>
              </motion.div>

              {/* Layer 4: Lens (Hidden initially) */}
              <motion.div className="eye-layer" style={{ scale: lensScale, opacity: lensOpacity, z: lensZ, rotateX: lensRotateX, rotateY: lensRotateY, zIndex: 2 }}>
                <svg viewBox="0 0 200 100" className="anatomy-svg">
                  <ellipse cx="100" cy="50" rx="20" ry="30" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" strokeWidth="1" />
                  <ellipse cx="100" cy="50" rx="10" ry="20" fill="rgba(255, 255, 255, 0.4)" />
                </svg>
              </motion.div>

              {/* Layer 3: Iris & Pupil (Visible initially) */}
              <motion.div className="eye-layer" style={{ scale: irisScale, opacity: irisOpacity, z: irisZ, rotateX: irisRotateX, rotateY: irisRotateY, zIndex: 3 }}>
                <svg viewBox="0 0 200 100" className="anatomy-svg">
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="28"
                    fill="url(#irisGradient)"
                    initial={{ scale: 0, opacity: 0, filter: 'blur(6px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                  />
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
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="10"
                    fill="#050b14"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                  />
                  <defs>
                    <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="60%" stopColor="#ff0055" />
                      <stop offset="100%" stopColor="#050b14" />
                    </radialGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Layer 2: Cornea (Visible initially) */}
              <motion.div className="eye-layer" style={{ scale: scleraScale, opacity: corneaOpacity, z: corneaZ, rotateX: corneaRotateX, rotateY: corneaRotateY, zIndex: 4 }}>
                <svg viewBox="0 0 200 100" className="anatomy-svg">
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
                </svg>
              </motion.div>

              {/* Layer 1: Sclera & Outer Eye (Visible initially) */}
              <motion.div className="eye-layer" style={{ scale: scleraScale, opacity: scleraOpacity, zIndex: 5 }}>
                <svg viewBox="0 0 200 100" className="anatomy-svg">
                  <motion.path
                    d="M10 50 Q100 -10 190 50 Q100 110 10 50Z"
                    fill="none"
                    stroke="url(#eyeGradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ pathLength: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
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
              
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
