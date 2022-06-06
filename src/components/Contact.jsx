import '../styles/Contact.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [desktop, setDesktop] = useState(window.innerWidth)
  return (
    <>
    <motion.div
  initial={{ opacity: "10%" }}
  animate={{ opacity: "100%" }}
  transition={{ delay: 1}}
  
    className='contact-container'
  > 
        <div>
          <h1>Get in touch</h1>
        <button className='contact-btn'>Email Me</button>
        </div>
    </motion.div>
    </>
  )
}

export default Contact