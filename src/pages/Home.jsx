import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, Stethoscope, Microscope, Heart, Users, Award, ArrowRight, Star, Zap, Shield, Activity } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'
import EyeAnimation from '../components/EyeAnimation'
import DoctorCard from '../components/DoctorCard'
import './Home.css'
import docSubhash from '../assets/doctors/Subhash.jpg'
import docSunita from '../assets/doctors/Sunita.jpg'
import docRanjit from '../assets/doctors/Ranjit.png'
import docManisha from '../assets/doctors/Manisha.jpg'
import useSEO from '../hooks/useSEO'

const centres = [
  { icon: <Eye size={32} />, title: 'Phaco Centre', desc: 'Advanced phacoemulsification cataract surgery with foldable IOL implantation', color: '#00b4d8' },
  { icon: <Zap size={32} />, title: 'LASIK Centre', desc: 'State-of-the-art laser vision correction for spectacle-free living', color: '#d4a853' },
  { icon: <Activity size={32} />, title: 'Retina Centre', desc: 'Vitreo-retinal surgery and treatment for retinal disorders', color: '#2ecc71' },
  { icon: <Microscope size={32} />, title: 'Glaucoma Clinic', desc: 'Comprehensive glaucoma diagnosis, treatment and surgery', color: '#e74c3c' },
  { icon: <Shield size={32} />, title: 'Squint Clinic', desc: 'Treatment and surgical correction of squint/strabismus', color: '#9b59b6' },
  { icon: <Star size={32} />, title: 'Corneal Transplant Centre', desc: 'Cornea transplantation and management of corneal disorders', color: '#f39c12' },
  { icon: <Heart size={32} />, title: 'Contact Lens Clinic', desc: 'Expert fitting and management of all types of contact lenses', color: '#1abc9c' },
  { icon: <Stethoscope size={32} />, title: 'Ocularist Centre', desc: 'Custom-made prosthetic eyes for natural appearance', color: '#e84393' },
]

const doctors = [
  {
    name: 'Dr. Subhash P. Kadam',
    qualification: 'MS(Ophth.)Bom, DOMS',
    description: 'Phacosurgeon and Oculoplastic Surgeon.',
    image: docSubhash
  },
  {
    name: 'Dr. Sunita S. Kadam',
    qualification: 'MBBS',
    description: 'Contact-Lens Specialist.',
    image: docSunita
  },
  {
    name: 'Dr. Ranjit S. Kadam',
    qualification: 'FRCS(Ed., U.K.), DNB(Opth.), DO',
    description: 'Phacosurgeon and Glaucoma Specialist. Specialist in LASIK.',
    image: docRanjit
  },
  {
    name: 'Dr. Manisha R. Kadam',
    qualification: 'FCPS(Ophth.)Bom, DOMS',
    description: 'Fellow of L V Prasad Eye Institute, Hyderabad. Phacosurgeon & Cornea Specialist. Specialist in LASIK.',
    image: docManisha
  }
]

export default function Home() {
  useSEO({
    title: "Kadam Eye Hospital Vadodara | Top Phaco, LASIK & Cornea Centre",
    description: "Welcome to Kadam Eye Hospital, Vadodara's trusted eye care centre since 1982. We specialize in Phaco, LASIK, Glaucoma, Cornea Transplants, and Ocular prosthetics.",
    keywords: "Eye Hospital Vadodara, Kadam Eye Hospital, LASIK Vadodara, Phaco surgery, Best eye specialist Vadodara"
  })

  return (
    <PageTransition>
      <div className="page-wrapper home-page">
        {/* ======= HERO SECTION ======= */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-particles">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    willChange: 'transform, opacity'
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.1, 0.5, 0.1],
                    scale: [0.8, 1.5, 0.8]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  <Eye 
                    size={Math.random() * 15 + 10} 
                    color={['rgba(0, 240, 255, 0.6)', 'rgba(255, 0, 85, 0.6)', 'rgba(255, 215, 0, 0.6)'][Math.floor(Math.random() * 3)]} 
                  />
                </motion.div>
              ))}
            </div>
            <div className="bg-grid" />
          </div>

          <div className="container hero-content">
            <div className="hero-text">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-badge"
              >
                <Star size={14} /> Since 1982 — Trusted Eye Care
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Welcome To <br />
                <span className="gradient-text">Kadam Eye Hospital</span>
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A reputed Eye Hospital at Vadodara is situated at heart of the city, Behind Railway Station. The hospital has a team of well qualified and experienced surgeon.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link to="/contact-us" className="btn btn-primary">
                  Book Appointment <ArrowRight size={18} />
                </Link>
                <Link to="/about-us" className="btn btn-outline">
                  Learn More
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <EyeAnimation />
            </motion.div>
          </div>

          <motion.div
            className="hero-scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
          </motion.div>
        </section>

        {/* ======= STATS SECTION ======= */}
        <section className="stats-section">
          <div className="container stats-grid">
            <AnimatedCounter end={40} suffix="+" label="Years Experience" />
            <AnimatedCounter end={100000} suffix="+" label="Surgeries Performed" />
            <AnimatedCounter end={8} label="Speciality Centres" />
            <AnimatedCounter end={500000} suffix="+" label="Patients Treated" />
          </div>
        </section>

        {/* ======= WELCOME SECTION ======= */}
        <section className="section welcome-section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Welcome To Kadam Hospital</h2>
                <p>World-class eye care in the heart of Vadodara</p>
              </div>
            </AnimatedSection>

            <div className="welcome-content">
              <AnimatedSection variant="fadeUp" className="welcome-text">
                <p>
                  A reputed Eye Hospital at Vadodara is situated at heart of the city, Behind Railway Station. The hospital has a team of well qualified and experienced surgeon.
                </p>
                <p>
                  Kadam Eye Hospital undertakes various kinds of Eye operations such as Cataract, Glaucoma, Retinal Detachments, Squint, Occuloplastic, Keratoplasty/cornea transplant, and other Eye Surgeries.
                </p>
                <p>
                  Strength of our hospital is complete range of operation from simple to complex Eye problems. We believe that every patient visiting us, seeking for the best Eye treatment.
                </p>
                <p>
                  The hospital ensures that a patient who visits is well treated and given an optimum cure. Patient can get best spectacle correction and can get best Phaco and LASIK treatment with best IOL lens, affordable cost making the hospital a preferred choice for all patients.
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" className="welcome-features" delay={0.2}>
                <div className="feature-card glass-card">
                  <Eye size={28} className="feature-icon" />
                  <div>
                    <h4>Advanced Eye Care</h4>
                    <p>Complete range of operations from simple to complex eye problems</p>
                  </div>
                </div>
                <div className="feature-card glass-card">
                  <Users size={28} className="feature-icon" />
                  <div>
                    <h4>Expert Surgeons</h4>
                    <p>Team of well-qualified and experienced ophthalmologists</p>
                  </div>
                </div>
                <div className="feature-card glass-card">
                  <Award size={28} className="feature-icon" />
                  <div>
                    <h4>Affordable Care</h4>
                    <p>Best Phaco and LASIK treatments at affordable costs</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ======= DOCTORS SECTION ======= */}
        <section className="section doctors-section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Doctors</h2>
                <p>Experienced ophthalmologists dedicated to your vision</p>
              </div>
            </AnimatedSection>

            <div className="doctors-grid">
              {doctors.map((doctor, i) => (
                <DoctorCard
                  key={i}
                  name={doctor.name}
                  qualification={doctor.qualification}
                  description={doctor.description}
                  image={doctor.image}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ======= CENTRES / SPECIALITIES ======= */}
        <section className="section centres-section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Centres &amp; Specialities</h2>
                <p>Comprehensive eye care across all specialities</p>
              </div>
            </AnimatedSection>

            <div className="centres-grid">
              {centres.map((centre, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                  <motion.div
                    className="centre-card glass-card"
                  >
                    <div className="centre-icon" style={{ background: `${centre.color}15`, color: centre.color }}>
                      {centre.icon}
                    </div>
                    <h4>{centre.title}</h4>
                    <p>{centre.desc}</p>
                    <div className="centre-line" style={{ background: centre.color }} />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ======= CTA SECTION ======= */}
        <section className="cta-section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="cta-card">
                <div className="cta-bg" />
                <div className="cta-content">
                  <h2>Your Vision, Our Mission</h2>
                  <p>Book an appointment today and experience world-class eye care at Kadam Eye Hospital, Vadodara.</p>
                  <Link to="/contact-us" className="btn btn-gold">
                    Contact Us <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
