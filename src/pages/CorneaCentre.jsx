import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './CorneaCentre.css'
import useSEO from '../hooks/useSEO'

import imgKerato from '../assets/cornea/Kerato.jpg'
import imgOrbscanI from '../assets/cornea/OrbscanI.jpg'
import imgCorntransplant from '../assets/cornea/corntransplant.jpg'
import imgIntacsplacement from '../assets/cornea/Intacsplacement.jpg'

const conditions = [
  'Corneal ulcers and infections',
  'Keratoconus',
  'Corneal dystrophies',
  'Corneal degenerations',
  'Corneal scars from injury or infection',
  'Bullous keratopathy',
  'Chemical injuries of the cornea',
  'Failed corneal grafts',
]

const procedures = [
  { title: 'Penetrating Keratoplasty (PKP)', desc: 'Full-thickness corneal transplant — the damaged cornea is entirely replaced with healthy donor tissue.' },
  { title: 'Lamellar Keratoplasty', desc: 'Partial-thickness transplant — only the diseased layer is replaced, preserving healthy corneal tissue.' },
  { title: 'DSAEK / DMEK', desc: 'Endothelial keratoplasty — selective replacement of the innermost corneal layer for faster recovery.' },
  { title: 'Therapeutic Keratoplasty', desc: 'Emergency transplant performed to treat severe corneal infections or perforations.' },
]

export default function CorneaCentre() {
  useSEO({
    title: 'Cornea Centre | Treatment for Corneal Disorders in Vadodara',
    description: 'Comprehensive diagnostics and treatments for corneal conditions including Keratoconus, corneal ulcers, and dry eye at Kadam Eye Hospital.',
    keywords: 'Cornea specialist Vadodara, Keratoconus treatment, dry eye clinic, corneal disorders'
  })

  return (
    <PageTransition>
      <div className="page-wrapper cornea-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cornea Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive corneal care and transplant services
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="cornea-intro glass-card" style={{ padding: '2.5rem' }}>
                <h3>About Our Cornea Centre</h3>
                <p>
                  The Cornea Centre at Kadam Eye Hospital is dedicated to the diagnosis and management of all corneal diseases. The cornea is the clear, dome-shaped front surface of the eye that plays a crucial role in focusing vision.
                </p>
                <p>
                  Our centre provides comprehensive medical and surgical treatment for a wide range of corneal conditions. We work closely with reputed eye banks to ensure timely availability of quality donor corneal tissue for transplant procedures.
                </p>
                <p>
                  With experienced corneal surgeons and modern diagnostic equipment, we offer the best possible outcomes for our patients with corneal diseases.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Equipment & Gallery */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Advanced Diagnostics & Care</h2>
              </div>
            </AnimatedSection>

            <div className="cornea-gallery-grid">
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgKerato} alt="Keratoconus Evaluation" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Keratoconus Management</h4>
                    <p>Advanced diagnostic tools to evaluate and monitor Keratoconus progression accurately.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection variant="fadeUp" delay={0.2}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgOrbscanI} alt="Orbscan Topography" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Corneal Topography</h4>
                    <p>High-resolution mapping of the cornea for precise surgical planning and disease detection.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgCorntransplant} alt="Corneal Transplant" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Corneal Transplants</h4>
                    <p>State-of-the-art surgical treatments including PKP, DALK, and endothelial keratoplasty.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgIntacsplacement} alt="Intacs Ring Placement" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Intacs Ring Segments</h4>
                    <p>Minimally invasive surgical options for correcting irregular corneas and improving vision.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Conditions We Treat</h2>
              </div>
            </AnimatedSection>

            <div className="conditions-grid">
              {conditions.map((c, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.06}>
                  <motion.div className="condition-card glass-card">
                    <Eye size={20} className="condition-icon" />
                    <span>{c}</span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Procedures */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Surgical Procedures</h2>
              </div>
            </AnimatedSection>

            <div className="procedures-grid">
              {procedures.map((p, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                  <motion.div
                    className="procedure-card glass-card"
                  >
                    <div className="procedure-number">{String(i + 1).padStart(2, '0')}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
