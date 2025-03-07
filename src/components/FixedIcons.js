import React from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const FixedIcons = () => {
  return (
   <>
    {/* Fixed icons */}
    <div className="fixed-icons">
        <a
          href="https://wa.me/+919922597496"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="mailto:shubhampatel1910@gmail.com

"
          className="email-icon"
        >
          <FaEnvelope size={22} />
        </a>
      </div>
   </>
  )
}

export default FixedIcons