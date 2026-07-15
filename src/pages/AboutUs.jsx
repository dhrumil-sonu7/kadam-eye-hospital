import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import DoctorCard from '../components/DoctorCard'
import './AboutUs.css'
import docSubhash from '../assets/doctors/Subhash.jpg'
import docSunita from '../assets/doctors/Sunita.jpg'
import docRanjit from '../assets/doctors/Ranjit.png'
import docManisha from '../assets/doctors/Manisha.jpg'
import useSEO from '../hooks/useSEO'

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

const highlights = [
  { icon: <Award size={28} />, title: 'F.R.C.S. Edinburgh', text: 'Fellowship from the prestigious Royal College of Surgeons, Edinburgh, UK' },
  { icon: <Star size={28} />, title: '1,00,000+ Surgeries', text: 'Over one lakh successful eye surgeries performed' },
  { icon: <BookOpen size={28} />, title: 'Since 1982', text: 'Serving the community for over four decades' },
  { icon: <GraduationCap size={28} />, title: 'Pioneer', text: 'First to introduce phacoemulsification in Vadodara' },
]

export default function AboutUs() {
  useSEO({
    title: 'About Kadam Eye Hospital | Expert Ophthalmologists in Vadodara',
    description: 'Learn about Kadam Eye Hospital, our legacy since 1982, and our highly experienced team of eye surgeons including Dr. Subhash Kadam and Dr. Sunita Kadam.',
    keywords: 'About Kadam Eye Hospital, eye surgeons Vadodara, Dr Subhash Kadam, ophthalmologists Gujarat'
  })

  return (
    <PageTransition>
      <div className="page-wrapper about-page">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Know our doctors and the legacy of Kadam Eye Hospital
            </motion.p>
          </div>
        </section>

        {/* About Content */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="about-intro glass-card" style={{ padding: '2.5rem' }}>
                <p>
                  Kadam Eye Hospital is a reputed Eye Hospital at Vadodara situated at the heart of the city, behind Railway Station. Established in 1982, the hospital has grown into one of the most trusted eye care institutions in Gujarat.
                </p>
                <p>
                  The hospital has a team of well qualified and experienced surgeons who undertake various kinds of Eye operations such as Cataract, Glaucoma, Retinal Detachments, Squint, Occuloplastic, Keratoplasty/cornea transplant, and other Eye Surgeries.
                </p>
                <p>
                  Strength of our hospital is the complete range of operations from simple to complex Eye problems. We believe that every patient visiting us is seeking for the best Eye treatment, and we ensure that they receive nothing less.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Highlights */}
        <section className="section highlights-section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Legacy</h2>
              </div>
            </AnimatedSection>
            <div className="highlights-grid">
              {highlights.map((item, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.1}>
                  <motion.div
                    className="highlight-card glass-card"
                  >
                    <div className="highlight-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Doctors</h2>
                <p>Meet the experts behind your care</p>
              </div>
            </AnimatedSection>

            <div className="about-doctors-grid">
              {doctors.map((doc, i) => (
                <DoctorCard
                  key={i}
                  name={doc.name}
                  qualification={doc.qualification}
                  description={doc.description}
                  image={doc.image}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
