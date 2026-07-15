import { motion } from 'framer-motion'
import { Eye, CheckCircle, AlertCircle, Heart } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './CorneaCentre.css'
import useSEO from '../hooks/useSEO'

const preOp = [
  'Detailed eye examination and corneal evaluation',
  'Blood tests and general health checkup',
  'Coordination with eye bank for donor cornea',
  'Counseling about the procedure, risks and benefits',
  'Discussion about post-operative care and follow-up',
]

const postOp = [
  'Regular use of prescribed eye drops (antibiotics, steroids)',
  'Eye protection with shield, especially at night',
  'Avoid rubbing or pressing the operated eye',
  'Regular follow-up visits as scheduled',
  'Avoid heavy lifting and strenuous activities',
  'Suture removal as advised by the surgeon',
  'Long-term monitoring for graft rejection signs',
]

const rejectionSigns = [
  'Redness of the eye',
  'Sensitivity to light',
  'Decrease in vision',
  'Pain in the eye',
]

export default function CorneaTransplant() {
  useSEO({
    title: 'Corneal Transplant (Keratoplasty) | Kadam Eye Hospital',
    description: 'Expert Corneal Transplant surgery (Keratoplasty) at Kadam Eye Hospital. Restoring vision with advanced surgical procedures and post-operative care.',
    keywords: 'Cornea transplant Vadodara, Keratoplasty surgery, eye donation, cornea grafting'
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
              Cornea Transplant Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Keratoplasty — restoring vision through corneal transplantation
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="cornea-intro glass-card" style={{ padding: '2.5rem' }}>
                <h3>Corneal Transplant (Keratoplasty)</h3>
                <p>
                  Corneal transplant, also known as keratoplasty, is a surgical procedure where a damaged or diseased cornea is replaced with healthy corneal tissue from a donor. The cornea is the clear front surface of the eye that helps focus light and is critical for clear vision.
                </p>
                <p>
                  At Kadam Eye Hospital, we have a dedicated Cornea Transplant Centre with experienced surgeons who perform both full-thickness (penetrating) and partial-thickness (lamellar) corneal transplants. We work with reputed eye banks to ensure the best quality donor tissue.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pre-op and Post-op */}
        <section className="section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <div className="procedures-grid">
              <AnimatedSection variant="fadeLeft">
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-teal-light)' }}>
                    <Eye size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Pre-Operative Guidelines
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {preOp.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--color-gray-300)' }}>
                        <CheckCircle size={16} style={{ color: '#2ecc71', flexShrink: 0, marginTop: '3px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeRight">
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-teal-light)' }}>
                    <Heart size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Post-Operative Care
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {postOp.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--color-gray-300)' }}>
                        <CheckCircle size={16} style={{ color: '#00b4d8', flexShrink: 0, marginTop: '3px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Rejection Warning */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '700px', margin: '0 auto', borderColor: 'rgba(231, 76, 60, 0.3)' }}>
                <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', marginBottom: '1rem', color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={22} />
                  Warning Signs of Graft Rejection
                </h3>
                <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                  If you experience any of the following symptoms after corneal transplant, contact your doctor immediately:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {rejectionSigns.map((sign, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'var(--color-gray-200)' }}>
                      <AlertCircle size={16} style={{ color: '#e74c3c', flexShrink: 0 }} />
                      {sign}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-gray-400)', fontStyle: 'italic' }}>
                  Remember: RSVP — Redness, Sensitivity, Vision loss, Pain. Report immediately to your doctor.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
