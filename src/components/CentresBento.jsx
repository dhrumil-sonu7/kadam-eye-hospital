import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, Stethoscope, Microscope, Heart, Users, Award, ArrowRight, Star, Zap, Shield, Activity } from 'lucide-react'
import './CentresBento.css'

const centres = [
  { 
    icon: <Eye size={36} />, 
    title: 'Phaco Centre', 
    desc: 'Advanced phacoemulsification cataract surgery with foldable IOL implantation', 
    color: '#0ea5e9'
  },
  { 
    icon: <Zap size={32} />, 
    title: 'LASIK Centre', 
    desc: 'State-of-the-art laser vision correction for spectacle-free living', 
    color: '#f59e0b', 
    path: '/lasik-centre'
  },
  { 
    icon: <Activity size={28} />, 
    title: 'Retina Centre', 
    desc: 'Vitreo-retinal surgery and treatment for retinal disorders', 
    color: '#10b981'
  },
  { 
    icon: <Star size={28} />, 
    title: 'Corneal Transplant', 
    desc: 'Cornea transplantation and management of corneal disorders', 
    color: '#8b5cf6'
  },
  { 
    icon: <Microscope size={28} />, 
    title: 'Glaucoma Clinic', 
    desc: 'Comprehensive glaucoma diagnosis, treatment and surgery', 
    color: '#f43f5e'
  },
  { 
    icon: <Shield size={28} />, 
    title: 'Squint Clinic', 
    desc: 'Treatment and surgical correction of squint/strabismus', 
    color: '#d946ef'
  },
  { 
    icon: <Heart size={28} />, 
    title: 'Contact Lens Clinic', 
    desc: 'Expert fitting and management of all types of contact lenses', 
    color: '#14b8a6'
  },
  { 
    icon: <Stethoscope size={28} />, 
    title: 'Ocularist Centre', 
    desc: 'Custom-made prosthetic eyes for natural appearance', 
    color: '#ec4899'
  }
]

function BentoCard({ item }) {
  const cardContent = (
    <div className={`bento-card ${item.colSpan || ''} ${item.rowSpan || ''} apple-glass-card`}>
      <div className="bento-card-bg-gradient" style={{ background: `radial-gradient(circle at top left, ${item.color}22 0%, transparent 70%)` }} />
      <div className="bento-icon" style={{ color: item.color }}>
        {item.icon}
      </div>
      <div className="bento-content">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
      {item.path && (
        <div className="bento-arrow">
          <ArrowRight size={20} color={item.color} />
        </div>
      )}
    </div>
  )

  if (item.path) {
    return (
      <Link to={item.path} className={`bento-link-wrapper ${item.colSpan || ''} ${item.rowSpan || ''}`}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default function CentresBento() {
  return (
    <section className="section centres-bento-section">
      <div className="container">
        <div className="section-title apple-section-title">
          <h2>Specialized Care</h2>
          <p>Comprehensive eye treatment across eight dedicated centres of excellence.</p>
        </div>

        <div className="bento-grid">
          {centres.map((centre, i) => (
            <BentoCard key={i} item={centre} />
          ))}
        </div>
      </div>
    </section>
  )
}
