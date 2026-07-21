import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, Stethoscope, Microscope, Heart, Users, Award, ArrowRight, Star, Zap, Shield, Activity } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollLinkedHero from '../components/ScrollLinkedHero'
import DoctorCard from '../components/DoctorCard'
import CentresBento from '../components/CentresBento'
import './Home.css'
import docSubhash from '../assets/doctors/Subhash.jpg'
import docSunita from '../assets/doctors/Sunita.jpg'
import docRanjit from '../assets/doctors/Ranjit.png'
import docManisha from '../assets/doctors/Manisha.jpg'
import useSEO from '../hooks/useSEO'

const centres = [
  { icon: <Eye size={32} />, title: 'Phaco Centre', desc: 'Advanced phacoemulsification cataract surgery with foldable IOL implantation', color: '#00b4d8' },
  { icon: <Zap size={32} />, title: 'LASIK Centre', desc: 'State-of-the-art laser vision correction for spectacle-free living', color: '#d4a853', path: '/lasik-centre' },
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
        {/* ======= SCROLL LINKED HERO ======= */}
        <ScrollLinkedHero />

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
            <AnimatedSection variant="fadeUp" className="apple-glass-sheet">
              <div className="section-title apple-section-title">
                <h2>Welcome To Kadam Hospital</h2>
                <p>World-class eye care in the heart of Vadodara</p>
              </div>

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
            </AnimatedSection>
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
        <CentresBento />

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
