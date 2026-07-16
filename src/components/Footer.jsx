import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Eye, ArrowUp } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import './Footer.css'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/facilities', label: 'Facilities' },
  { path: '/milestones', label: 'Milestones' },
  { path: '/patient-information', label: 'Patient Information' },
  { path: '/contact-us', label: 'Contact Us' },
]

const centres = [
  { path: '/cornea-centre', label: 'Cornea Centre' },
  { path: '/ocularist-centre', label: 'Ocularist Centre' },
  { path: '/cornea-transplant', label: 'Cornea Transplant Centre' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-bg-pattern" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <AnimatedSection variant="fadeUp" className="footer-col">
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <Eye size={24} />
              </div>
              <div>
                <h3 className="footer-brand-name">KADAM</h3>
                <span className="footer-brand-sub">EYE HOSPITAL</span>
              </div>
            </div>
            <p className="footer-desc">
              A reputed Eye Hospital in Vadodara providing world-class eye care services with state-of-the-art technology and experienced surgeons since 1982.
            </p>
            <div className="footer-social">
              <a href="mailto:kadameyehospital@yahoo.com" className="social-link" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:+910265-2794454" className="social-link" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection variant="fadeUp" delay={0.1} className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Centres */}
          <AnimatedSection variant="fadeUp" delay={0.2} className="footer-col">
            <h4 className="footer-heading">Our Centres</h4>
            <ul className="footer-links">
              {centres.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection variant="fadeUp" delay={0.3} className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>B/H Railway Station, Sayajigunj, Vadodara - 390020</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+910265-2794454" style={{ color: 'inherit', textDecoration: 'none' }}>+91-0265-2794454</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kadameyehospital@yahoo.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>kadameyehospital@yahoo.com</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kadam Eye Hospital, Vadodara. All Rights Reserved.</p>
          <p className="footer-credit">
            Designed By: <strong>Dhrumil Somani</strong>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        className="scroll-top-btn"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
