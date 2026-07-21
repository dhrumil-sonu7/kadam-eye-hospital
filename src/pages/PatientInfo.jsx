import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './PatientInfo.css'
import useSEO from '../hooks/useSEO'

import imgCataract from '../assets/patient/cataract.png'
import imgSquint from '../assets/patient/squint.png'
import imgCornealTransplant from '../assets/patient/corneal_transplant.jpg'

const sections = [
  {
    id: 'cataract',
    title: 'Cataract',
    color: '#00b4d8',
    content: [
      'Cataract is the most common cause of decrease of vision in elderly person. The clear natural lens inside the eye becomes cloudy, causing blurred vision.',
      'Cataract surgery is the most commonly performed eye surgery. In this procedure, the cloudy lens is removed and replaced with a clear artificial lens (IOL - Intraocular Lens).',
      'At Kadam Eye Hospital, we perform the latest Phacoemulsification (Phaco) surgery — a stitchless, painless procedure with quick recovery.',
    ],
    symptoms: ['Blurred or dim vision', 'Sensitivity to light and glare', 'Difficulty seeing at night', 'Seeing halos around lights', 'Fading of colours', 'Frequent changes in spectacle power'],
    treatments: ['Phacoemulsification (Phaco) surgery', 'Foldable IOL implantation', 'Multifocal IOL', 'Toric IOL for astigmatism', 'Micro-incision cataract surgery (MICS)'],
    image: imgCataract
  },
  {
    id: 'squint',
    title: 'Squint',
    color: '#9b59b6',
    content: [
      'Squint (Strabismus) is a condition where the eyes do not look in the same direction. One eye may turn inwards, outwards, upwards or downwards while the other eye looks straight ahead.',
      'Squint can occur in children and adults. In children, it may lead to lazy eye (amblyopia) if not treated early.',
      'Treatment includes spectacles, exercises, prism glasses, and surgery depending on the type and severity of squint.',
    ],
    symptoms: ['Eyes pointing in different directions', 'Double vision', 'Head tilting', 'Difficulty judging distances', 'Eye strain or fatigue'],
    treatments: ['Corrective spectacles', 'Orthoptic exercises', 'Prism glasses', 'Squint surgery', 'Botox injection (in select cases)'],
    image: imgSquint
  },
  {
    id: 'corneal-transplant',
    title: 'Corneal Transplant',
    color: '#f39c12',
    content: [
      'Corneal transplant (Keratoplasty) is a surgical procedure in which a damaged or diseased cornea is replaced with healthy donor corneal tissue.',
      'The cornea is the clear, dome-shaped front surface of the eye. When it becomes cloudy or scarred due to disease, infection or injury, a corneal transplant may be needed to restore vision.',
      'Kadam Eye Hospital has a dedicated Corneal Transplant Centre with experienced surgeons performing both full-thickness and lamellar keratoplasty.',
    ],
    symptoms: ['Cloudy or opaque cornea', 'Severe corneal scarring', 'Corneal ulcer not responding to treatment', 'Keratoconus (advanced)', 'Corneal dystrophy', 'Failed previous corneal transplant'],
    treatments: ['Penetrating keratoplasty (full thickness)', 'Lamellar keratoplasty (partial thickness)', 'DSAEK / DMEK (endothelial transplant)', 'Post-operative medical management', 'Long-term follow-up care'],
    image: imgCornealTransplant
  },
]

export default function PatientInfo() {
  useSEO({
    title: 'Patient Information & Cashless Mediclaim | Kadam Eye Hospital',
    description: 'Important patient information, timings, and cashless mediclaim facilities at Kadam Eye Hospital. We partner with major insurance TPAs for hassle-free treatments.',
    keywords: 'Cashless eye surgery Vadodara, mediclaim eye hospital, patient guide Kadam Eye Hospital'
  })

  return (
    <PageTransition>
      <div className="page-wrapper patient-info-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Patient Information
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Understanding your eye condition and treatment options
            </motion.p>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="quick-nav-section">
          <div className="container">
            <div className="quick-nav">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="quick-nav-item" style={{ borderColor: s.color, color: s.color }}>
                  <ChevronRight size={16} /> {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className="section patient-section" style={{ background: i % 2 === 0 ? 'var(--color-navy-deep)' : 'var(--color-navy)' }}>
            <div className="container">
              <AnimatedSection variant="fadeUp">
                <div className="section-title">
                  <h2 style={{ color: section.color }}>{section.title}</h2>
                </div>
              </AnimatedSection>

              <div className="patient-content-grid">
                <AnimatedSection variant="fadeLeft" className="patient-text">
                  {section.image && (
                    <div className="patient-img-container">
                      <img src={section.image} alt={section.title} className="patient-img glass-card" loading="lazy" />
                    </div>
                  )}
                  {section.content.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </AnimatedSection>

                <div className="patient-side">
                  <AnimatedSection variant="fadeRight" delay={0.1}>
                    <div className="info-card glass-card">
                      <h4>
                        <AlertCircle size={18} style={{ color: section.color }} />
                        Symptoms
                      </h4>
                      <ul>
                        {section.symptoms.map((s, j) => (
                          <li key={j}>
                            <span className="dot" style={{ background: section.color }} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection variant="fadeRight" delay={0.2}>
                    <div className="info-card glass-card">
                      <h4>
                        <CheckCircle size={18} style={{ color: '#2ecc71' }} />
                        Treatment Options
                      </h4>
                      <ul>
                        {section.treatments.map((t, j) => (
                          <li key={j}>
                            <span className="dot" style={{ background: '#2ecc71' }} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageTransition>
  )
}
