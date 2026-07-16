import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import './ContactUs.css'
import useSEO from '../hooks/useSEO'

const branches = [

  {
    name: 'Lasik Centre — Akota',
    address: '8, Urmi Society, Productivity Road, Akota, Vadodara, Gujarat, India',
    phone: ['+91 8000041394'],
    appointments: '+91 9375288817',
    email: 'kadameyelasikcentre@gmail.com',
    timing: 'Mon-Sat: 9:00 AM - 1:00 PM & 4:00 PM - 7:00 PM',
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kadam+Eye+Hospital+Akota+Vadodara',
    color: '#ff0055',
  },
  {
    name: 'Branch — Dandia Bazar',
    address: '101, Alankar Apartments, Dandia Bazar, Vadodara, Gujarat, India',
    phone: ['+91 (0265) 2431028'],
    appointments: '+91 8905541958',
    email: 'kadameyehospital@yahoo.com',
    timing: 'Mon-Sat: 9:00 AM - 1:00 PM & 4:00 PM - 7:00 PM',
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kadam+Eye+Hospital+Dandia+Bazar+Vadodara',
    color: '#ffd700',
  },
  {
    name: 'Branch — Nizampura',
    address: 'A1, Indraprastha Cx., Nizampura Main Road, Vadodara, Gujarat, India',
    phone: ['+91 (0265) 2760906'],
    appointments: '+91 9624248001',
    email: 'kadameyehospital@yahoo.com',
    timing: 'Mon-Sat: 9:00 AM - 1:00 PM & 4:00 PM - 7:00 PM',
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kadam+Eye+Hospital+Nizampura+Vadodara',
    color: '#00f0ff',
  },
]

export default function ContactUs() {
  const [showMapMenu, setShowMapMenu] = useState(false)

  useSEO({
    title: 'Contact Kadam Eye Hospital | Book an Appointment in Vadodara',
    description: 'Get in touch with Kadam Eye Hospital. Find addresses, phone numbers, and directions for our Akota, Dandia Bazar, and Nizampura branches in Vadodara.',
    keywords: 'Contact Kadam Eye Hospital, eye hospital appointment Vadodara, Akota eye clinic, Nizampura eye clinic'
  })

  return (
    <PageTransition>
      <div className="page-wrapper contact-page">
        <section className="page-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Visit us at any of our branches in Vadodara
            </motion.p>
          </div>
        </section>

        {/* Branches */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Our Branches</h2>
                <p>We have multiple locations across Vadodara for your convenience</p>
              </div>
            </AnimatedSection>

            <div className="branches-grid">
              {branches.map((branch, i) => (
                <AnimatedSection key={i} variant="fadeUp" delay={i * 0.15}>
                  <motion.div
                    className="branch-card glass-card"
                    whileHover={{ y: -8, boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${branch.color}33` }}
                  >
                    <div className="branch-header" style={{ borderBottomColor: `${branch.color}33` }}>
                      <div className="branch-pin" style={{ background: `${branch.color}15`, color: branch.color }}>
                        <MapPin size={24} />
                      </div>
                      <h3 style={{ color: branch.color }}>{branch.name}</h3>
                    </div>

                    <div className="branch-details">
                      <div className="branch-detail">
                        <MapPin size={16} />
                        <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="address-link">
                          {branch.address}
                        </a>
                      </div>
                      {branch.phone.map((ph, j) => (
                        <div key={j} className="branch-detail">
                          <Phone size={16} />
                          <a href={`tel:${ph}`}>{ph}</a>
                        </div>
                      ))}
                      {branch.appointments && (
                        <div className="branch-detail">
                          <Phone size={16} style={{ color: 'var(--color-magenta)' }} />
                          <a href={`tel:${branch.appointments}`}>Appt: {branch.appointments}</a>
                        </div>
                      )}
                      <div className="branch-detail">
                        <Mail size={16} />
                        <a href={`mailto:${branch.email}`}>{branch.email}</a>
                      </div>
                      <div className="branch-detail">
                        <Clock size={16} />
                        <span>{branch.timing}</span>
                      </div>
                    </div>

                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline branch-map-btn"
                      style={{ borderColor: branch.color, color: branch.color }}
                    >
                      <Navigation size={16} /> Get Directions
                    </a>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Map Embed */}
        <section className="section map-section" style={{ background: 'var(--color-navy)' }}>
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="section-title">
                <h2>Find Us</h2>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="scaleUp">
              <div className="map-container glass-card" style={{ position: 'relative' }}>
                {!showMapMenu && (
                  <div 
                    style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }}
                    onClick={() => setShowMapMenu(true)}
                    title="Click to get directions"
                  />
                )}

                <iframe
                  title="Kadam Eye Hospital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1!2d73.2!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiA3M8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Summary */}
        <section className="section">
          <div className="container">
            <AnimatedSection variant="fadeUp">
              <div className="contact-summary glass-card">
                <div className="contact-summary-item">
                  <Phone size={32} className="contact-summary-icon" />
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:+910265-2794454" style={{ color: 'inherit', textDecoration: 'none' }}>+91-0265-2794454</a></p>
                    <p><a href="tel:+910265-2794455" style={{ color: 'inherit', textDecoration: 'none' }}>+91-0265-2794455</a></p>
                  </div>
                </div>
                <div className="contact-summary-divider" />
                <div className="contact-summary-item">
                  <Mail size={32} className="contact-summary-icon" />
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:kadameyehospital@yahoo.com" style={{ color: 'inherit', textDecoration: 'none' }}>kadameyehospital@yahoo.com</a></p>
                  </div>
                </div>
                <div className="contact-summary-divider" />
                <div className="contact-summary-item">
                  <Clock size={32} className="contact-summary-icon" />
                  <div>
                    <h4>Visiting Hours</h4>
                    <p>Mon - Sat: 9 AM - 7 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {showMapMenu && (
        <div className="map-menu-overlay">
          <div className="map-menu-content">
            <h3>Get Directions</h3>
            <p>Which branch would you like to visit?</p>
            <div className="map-menu-buttons">
              {branches.map(b => (
                <a 
                  key={b.name} 
                  href={b.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                  style={{ borderColor: b.color, color: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  onClick={() => setShowMapMenu(false)}
                >
                  <Navigation size={16} /> {b.name}
                </a>
              ))}
            </div>
            <button className="btn map-menu-close" onClick={() => setShowMapMenu(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </PageTransition>
  )
}
