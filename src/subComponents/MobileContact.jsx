import '../styles/Contact.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGithubAlt, faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export const MobileContact = () => {
  return (
    <div className='mobile-contact'>
        <h1>Get in touch</h1>
        <button>Email Me</button>
        <div className='mobile-icons'>
            <FontAwesomeIcon icon={faGithubAlt} className="mobile-icon"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="mobile-icon" />
        </div>
    </div>
  )
}
