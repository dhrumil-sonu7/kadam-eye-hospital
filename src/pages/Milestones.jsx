import { motion } from 'framer-motion'
import { Calendar, Trophy, Award, Star, TrendingUp } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './Milestones.css'
import useSEO from '../hooks/useSEO'

const milestones = [
  { year: '1982', title: 'Hospital Established', desc: 'Kadam Eye Hospital founded by Dr. Nitin Kadam in Vadodara, Gujarat, with a vision to provide quality eye care.', icon: <Star size={20} /> },
  { year: '1985', title: 'First IOL Implantation', desc: 'Among the first in Vadodara to perform Intraocular Lens (IOL) implantation after cataract surgery.', icon: <Award size={20} /> },
  { year: '1990', title: 'F.R.C.S. Edinburgh', desc: 'Dr. Nitin Kadam awarded Fellowship of the Royal College of Surgeons, Edinburgh (U.K.).', icon: <Trophy size={20} /> },
  { year: '1995', title: 'Phaco Surgery Introduced', desc: 'Pioneer in introducing phacoemulsification (stitchless cataract surgery) in Vadodara.', icon: <TrendingUp size={20} /> },
  { year: '2000', title: 'LASIK Centre Launched', desc: 'Established the LASIK centre with state-of-the-art excimer laser technology.', icon: <Star size={20} /> },
  { year: '2005', title: 'Retina Centre', desc: 'Expanded services with dedicated Vitreo-Retinal surgery centre.', icon: <Award size={20} /> },
  { year: '2008', title: 'Cornea Transplant Centre', desc: 'Launched the Corneal Transplant Centre for keratoplasty procedures.', icon: <Trophy size={20} /> },
  { year: '2010', title: '50,000 Surgeries', desc: 'Milestone of 50,000 successful eye surgeries achieved.', icon: <TrendingUp size={20} /> },
  { year: '2012', title: 'Ocularist Centre', desc: 'Established the Ocularist Centre for custom prosthetic eye services.', icon: <Star size={20} /> },
  { year: '2015', title: 'Hospital Modernization', desc: 'Major upgrade of all surgical equipment and diagnostic facilities.', icon: <Award size={20} /> },
  { year: '2018', title: 'Multiple Branches', desc: 'Expanded with branches at Manjalpur and other locations in Vadodara.', icon: <Trophy size={20} /> },
  { year: '2022', title: '1,00,000 Surgeries', desc: 'Crossed the remarkable milestone of 1,00,000 successful eye surgeries.', icon: <TrendingUp size={20} /> },
]

export default function Milestones() {
  useSEO({
    title: 'Our Journey & Milestones | Kadam Eye Hospital',
    description: 'Discover the milestones of Kadam Eye Hospital. Decades of excellence in eye care, pioneering surgical treatments in Vadodara since 1982.',
    keywords: 'Kadam Eye Hospital history, eye care milestones, trusted eye clinic Vadodara'
  })

  return (
    <PageTransition>
      <div className="page-wrapper milestones-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MilesTones
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our journey of excellence in eye care
            </motion.p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="timeline">
              <div className="timeline-line" />
              {milestones.map((ms, i) => (
                <AnimatedSection
                  key={i}
                  variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                  delay={i * 0.08}
                  className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                >
                  <motion.div
                    className="timeline-card glass-card"
                  >
                    <div className="timeline-year">
                      <Calendar size={14} />
                      {ms.year}
                    </div>
                    <h3>{ms.title}</h3>
                    <p>{ms.desc}</p>
                  </motion.div>
                  <div className="timeline-dot">
                    {ms.icon}
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
