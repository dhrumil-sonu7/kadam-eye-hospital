import React from 'react'

export default function DoctorCard({ name, qualification, description, image }) {
  const [imgError, setImgError] = React.useState(false)

  return (
    <div className="doctor-card apple-glass-card">
      <div className="doctor-card-image">
        <div className="doctor-avatar">
          {image && !imgError ? (
            <img src={image} alt={name} onError={() => setImgError(true)} />
          ) : (
            <div className="doctor-avatar-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="28" r="14" fill="rgba(0,180,216,0.3)" stroke="rgba(0,180,216,0.6)" strokeWidth="1.5"/>
                <path d="M12 68c0-15.464 12.536-28 28-28s28 12.536 28 28" fill="rgba(0,180,216,0.15)" stroke="rgba(0,180,216,0.4)" strokeWidth="1.5"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="doctor-card-content">
        <h3>{name}</h3>
        <p className="doctor-qualification">{qualification}</p>
        {description && <p className="doctor-description">{description}</p>}
      </div>
    </div>
  )
}
