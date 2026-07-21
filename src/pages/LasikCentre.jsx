import { motion } from 'framer-motion'
import { Eye, Shield, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './LasikCentre.css'
import useSEO from '../hooks/useSEO'

import imgLasikMachine from '../assets/lasik/lasik_machine.png'
import imgCorneaMap from '../assets/lasik/cornea_map.png'
import imgEyeDoctor from '../assets/lasik/eye_doctor.png'
import imgClearVision from '../assets/lasik/clear_vision.png'

const benefits = [
  'Blade-free, painless procedure',
  'Spectacle-free clear vision',
  'Quick recovery time (usually 24 hours)',
  'Customized wavefront treatment',
  'High precision and safety',
  'Long-lasting results',
]

const procedures = [
  { title: 'Blade-Free LASIK', desc: 'A femtosecond laser creates a precise flap, followed by an excimer laser that reshapes the cornea. Offers the highest safety and precision.' },
  { title: 'Customized Wavefront LASIK', desc: 'Uses advanced 3D mapping of the eye to create a highly personalized laser treatment plan, reducing glare and halos.' },
  { title: 'Epi-LASIK / PRK', desc: 'Flapless surface procedures ideal for patients with thin corneas or those involved in contact sports.' },
  { title: 'Refractive Lens Exchange', desc: 'An alternative for extreme refractive errors where LASIK is not suitable; replaces the natural lens with an advanced IOL.' },
]

export default function LasikCentre() {
  useSEO({
    title: 'LASIK Centre | Best Laser Vision Correction in Vadodara',
    description: 'Achieve spectacle-free vision with advanced, blade-free LASIK and wavefront customized treatments at Kadam Eye Hospital, Vadodara.',
    keywords: 'LASIK Vadodara, blade-free LASIK, laser eye surgery, remove glasses, wavefront LASIK, best eye hospital for LASIK'
  })

  return (
    <PageTransition>
      <div className="page-wrapper lasik-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LASIK Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              State-of-the-art laser vision correction for spectacle-free living
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="lasik-intro glass-card" style={{ padding: '2.5rem' }}>
                <h3>Freedom from Glasses and Contacts</h3>
                <p>
                  Kadam Eye Hospital’s dedicated LASIK Centre is equipped with the latest generation of Excimer and Femtosecond laser technologies, offering unmatched precision, safety, and visual outcomes.
                </p>
                <p>
                  Led by experienced refractive surgeons, including Dr. Ranjit Kadam and Dr. Manisha R. Kadam, our centre thoroughly evaluates each patient's eye health and corneal topography to determine the most suitable and safest vision correction procedure.
                </p>
                <p>
                  The procedure is an outpatient treatment that takes only 5–10 minutes per eye. With our blade-free approach, patients typically experience a fast and comfortable recovery, returning to their normal activities within a day.
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
                <h2>Advanced Laser Technology</h2>
              </div>
            </AnimatedSection>

            <div className="lasik-gallery-grid">
              <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgLasikMachine} alt="Advanced LASIK Machine" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Excimer Laser System</h4>
                    <p>State-of-the-art laser technology for ultra-precise and safe vision correction.</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection variant="fadeUp" delay={0.2}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgCorneaMap} alt="Corneal Topography" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>3D Corneal Mapping</h4>
                    <p>High-resolution wavefront mapping for fully customized personalized treatments.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.3}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgEyeDoctor} alt="Ophthalmologist examining" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Expert Consultation</h4>
                    <p>Thorough pre-operative evaluation by our highly experienced refractive surgeons.</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className="gallery-card glass-card">
                  <div className="gallery-img-container">
                    <img src={imgClearVision} alt="Clear Vision" loading="lazy" />
                  </div>
                  <div className="gallery-info">
                    <h4>Spectacle Freedom</h4>
                    <p>Enjoy life without the hassle of glasses or contact lenses with fast recovery.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Why Choose Our LASIK Centre?</h2>
              </div>
            </AnimatedSection>

            <div className="conditions-grid">
              {benefits.map((b, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.06}>
                  <motion.div className="condition-card glass-card">
                    <Zap size={20} className="condition-icon" />
                    <span>{b}</span>
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
                <h2>Vision Correction Options</h2>
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
