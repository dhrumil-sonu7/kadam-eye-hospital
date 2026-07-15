import { motion } from 'framer-motion'
import { Eye, CheckCircle, Heart, Users } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './OcularistCentre.css'
import bf1 from '../assets/results/bf1.jpg'
import af1 from '../assets/results/af1.jpg'
import bf2 from '../assets/results/bf2.jpg'
import af2 from '../assets/results/af2.jpg'
import bf3 from '../assets/results/bf3.jpg'
import af3 from '../assets/results/af3.jpg'
import bf4 from '../assets/results/bf4.jpg'
import af4 from '../assets/results/af4.jpg'
import useSEO from '../hooks/useSEO'

const resultsData = [
  { bf: bf1, af: af1 },
  { bf: bf2, af: af2 },
  { bf: bf3, af: af3 },
  { bf: bf4, af: af4 },
]

const services = [
  'Custom-made prosthetic eyes',
  'Scleral shells for phthisical eyes',
  'Conformers after enucleation/evisceration',
  'Stock eye prosthesis',
  'Motility implants',
  'Regular follow-up and polishing of prosthetic eyes',
  'Replacement of old prosthetic eyes',
  'Cosmetic improvement for disfigured eyes',
]

const benefits = [
  { icon: <Eye size={24} />, title: 'Natural Appearance', desc: 'Each prosthetic eye is custom-painted to match the other eye perfectly in color, size and shape.' },
  { icon: <Heart size={24} />, title: 'Comfort', desc: 'Prosthetic eyes are designed for comfort and can be worn throughout the day.' },
  { icon: <Users size={24} />, title: 'Confidence', desc: 'Helps restore confidence and self-esteem by providing a natural cosmetic appearance.' },
  { icon: <CheckCircle size={24} />, title: 'Expert Care', desc: 'Our experienced ocularist provides personalized care and regular follow-up.' },
]

export default function OcularistCentre() {
  useSEO({
    title: 'Custom Prosthetic Eyes | Kadam Ocularist Centre Vadodara',
    description: 'The Kadam Ocularist Centre specializes in custom-made prosthetic eyes and scleral shells for a natural appearance. See our incredible before and after transformation results.',
    keywords: 'Ocularist Vadodara, artificial eye, prosthetic eye Gujarat, scleral shell'
  })

  return (
    <PageTransition>
      <div className="page-wrapper ocularist-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ocularist Centre
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Custom prosthetic eye services for natural appearance
            </motion.p>
          </div>
        </section>

        {/* About Ocularist */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="ocularist-intro glass-card" style={{ padding: '2.5rem' }}>
                <h3>What is an Ocularist?</h3>
                <p>
                  An Ocularist is a specialist who fabricates and fits custom-made prosthetic eyes (artificial eyes) for patients who have lost an eye due to trauma, disease, or congenital conditions.
                </p>
                <p>
                  At Kadam Eye Hospital, our Ocularist Centre provides comprehensive prosthetic eye services. Each prosthetic eye is individually crafted and hand-painted to match the patient&apos;s other eye, ensuring the most natural appearance possible.
                </p>
                <p>
                  The prosthetic eye is made from medical-grade acrylic material and is designed to fit comfortably in the eye socket. Regular follow-up visits ensure the prosthesis remains comfortable and maintains its natural appearance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Benefits</h2>
              </div>
            </AnimatedSection>

            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1} className="benefit-card glass-card">
                  <div className="benefit-icon">{b.icon}</div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Services</h2>
              </div>
            </AnimatedSection>

            <div className="services-list">
              {services.map((service, i) => (
                <AnimatedSection key={i} variant="fadeLeft" delay={i * 0.06} className="service-item glass-card">
                  <CheckCircle size={20} className="service-check" />
                  <span>{service}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After Results */}
        <section className="section" style={{ background: 'var(--color-navy-deep)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Transformation Results</h2>
                <p>Hover over the cards to reveal the incredible after-results.</p>
              </div>
            </AnimatedSection>

            <div className="results-grid">
              {resultsData.map((res, i) => (
                <AnimatedSection key={i} variant="scaleUp" delay={i * 0.1} className="result-card glass-card">
                  <div className="result-image-container">
                    <img src={res.bf} alt={`Before ${i+1}`} className="result-image bf-image" />
                    <img src={res.af} alt={`After ${i+1}`} className="result-image af-image" />
                  </div>
                  <div className="result-labels">
                    <span className="label-bf">Before</span>
                    <span className="label-af">After</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
