import { motion } from 'framer-motion'

export default function DoctorCard({ name, qualification, description, delay = 0, image }) {
  return (
    <motion.div
      className="doctor-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="doctor-card-image">
        <div className="doctor-avatar">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="doctor-avatar-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="28" r="14" fill="rgba(0,180,216,0.3)" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5"/>
                <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" fill="rgba(0,180,216,0.15)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
              </svg>
            </div>
          )}
        </div>
        <motion.div 
          className="doctor-card-glow"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>
      <div className="doctor-card-content">
        <h3>{name}</h3>
        <p className="doctor-qualification">{qualification}</p>
        {description && <p className="doctor-description">{description}</p>}
      </div>
    </motion.div>
  )
}
