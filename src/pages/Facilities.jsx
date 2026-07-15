import { motion } from 'framer-motion'
import { Eye, Zap, Activity, Microscope, Shield, Star, Heart, Stethoscope, Monitor, Scan } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './Facilities.css'
import useSEO from '../hooks/useSEO'

const equipment = [
  { icon: <Monitor size={28} />, name: 'Phaco Machine', desc: 'Latest phacoemulsification system for micro-incision cataract surgery' },
  { icon: <Zap size={28} />, name: 'Excimer Laser', desc: 'Advanced excimer laser for precise LASIK and refractive procedures' },
  { icon: <Scan size={28} />, name: 'OCT Scanner', desc: 'Optical Coherence Tomography for detailed retinal imaging' },
  { icon: <Microscope size={28} />, name: 'Operating Microscope', desc: 'High-end operating microscope with advanced optics' },
  { icon: <Eye size={28} />, name: 'Slit Lamp Biomicroscope', desc: 'For detailed examination of the anterior and posterior segments' },
  { icon: <Activity size={28} />, name: 'A-Scan & B-Scan', desc: 'Ultrasound biometry for IOL power calculation and ocular evaluation' },
  { icon: <Shield size={28} />, name: 'Visual Field Analyzer', desc: 'Automated perimetry for glaucoma detection and monitoring' },
  { icon: <Star size={28} />, name: 'YAG Laser', desc: 'For posterior capsulotomy and peripheral iridotomy procedures' },
]

const centres = [
  {
    icon: <Eye size={36} />,
    title: 'Phaco Centre',
    color: '#00b4d8',
    features: ['Micro-incision cataract surgery', 'Foldable IOL implantation', 'Topical anaesthesia', 'Stitchless surgery', 'Same-day discharge']
  },
  {
    icon: <Zap size={36} />,
    title: 'LASIK Centre',
    color: '#d4a853',
    features: ['Blade-free LASIK', 'Custom wavefront treatment', 'Spectacle freedom', 'Quick recovery', 'Latest excimer technology']
  },
  {
    icon: <Activity size={36} />,
    title: 'Retina Centre',
    color: '#2ecc71',
    features: ['Vitreo-retinal surgery', 'Diabetic retinopathy treatment', 'Retinal detachment repair', 'Macular degeneration care', 'Laser photocoagulation']
  },
  {
    icon: <Microscope size={36} />,
    title: 'Glaucoma Clinic',
    color: '#e74c3c',
    features: ['Glaucoma diagnosis', 'Medical management', 'Laser procedures', 'Trabeculectomy', 'Valve implant surgery']
  },
  {
    icon: <Shield size={36} />,
    title: 'Squint Clinic',
    color: '#9b59b6',
    features: ['Squint assessment', 'Orthoptic evaluation', 'Strabismus surgery', 'Amblyopia treatment', 'Pediatric eye care']
  },
  {
    icon: <Star size={36} />,
    title: 'Corneal Transplant Centre',
    color: '#f39c12',
    features: ['Full thickness keratoplasty', 'Lamellar keratoplasty', 'Corneal ulcer management', 'Post-transplant care', 'Eye banking coordination']
  },
  {
    icon: <Heart size={36} />,
    title: 'Contact Lens Clinic',
    color: '#1abc9c',
    features: ['Soft contact lenses', 'RGP lenses', 'Toric lenses', 'Cosmetic lenses', 'Contact lens fitting']
  },
  {
    icon: <Stethoscope size={36} />,
    title: 'Ocularist Centre',
    color: '#e84393',
    features: ['Custom prosthetic eyes', 'Scleral shells', 'Orbital implants', 'Natural appearance', 'Regular follow-up']
  },
]

export default function Facilities() {
  useSEO({
    title: 'World-Class Eye Care Facilities | Kadam Eye Hospital Vadodara',
    description: 'Explore the state-of-the-art facilities at Kadam Eye Hospital. Equipped with advanced technology for precise diagnostics, LASIK, and microscopic surgeries.',
    keywords: 'Eye care facilities Vadodara, advanced eye surgery tech, LASIK equipment, phaco centre'
  })

  return (
    <PageTransition>
      <div className="page-wrapper facilities-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Facilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              State-of-the-art equipment and speciality centres
            </motion.p>
          </div>
        </section>

        {/* Equipment */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Equipment</h2>
                <p>World-class technology for precise diagnostics and treatment</p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="equipment-grid">
              {equipment.map((item, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className="equipment-card glass-card"
                  >
                    <div className="equipment-icon">{item.icon}</div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Centres */}
        <section className="section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Centres &amp; Specialities</h2>
                <p>Dedicated centres for every aspect of eye care</p>
              </div>
            </AnimatedSection>

            <div className="facility-centres-grid">
              {centres.map((centre, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                  <motion.div
                    className="facility-centre-card glass-card"
                    whileHover={{
                      y: -6,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${centre.color}33`,
                    }}
                  >
                    <div className="facility-centre-header">
                      <div className="facility-centre-icon" style={{ background: `${centre.color}15`, color: centre.color }}>
                        {centre.icon}
                      </div>
                      <h3 style={{ color: centre.color }}>{centre.title}</h3>
                    </div>
                    <ul className="facility-features">
                      {centre.features.map((f, j) => (
                        <li key={j}>
                          <span className="feature-dot" style={{ background: centre.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
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
