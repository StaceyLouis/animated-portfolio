import '../styles/Contact.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MobileContact } from '../subComponents/MobileContact'

const Contact = () => {
  const [desktop, setDesktop] = useState(window.innerWidth)
  const updateMedia = ()=>{
    setDesktop(window.innerWidth > 640 )
  }

  useEffect(()=>{
    window.addEventListener("resize", updateMedia)
    return ()=> window.removeEventListener("resize", updateMedia)
  })
  return (
    <>
 <MobileContact />
 
    </>
  )
}

export default Contact