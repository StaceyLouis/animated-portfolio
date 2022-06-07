import {useEffect, useState} from 'react'
import About from '../subComponents/About'
import MobileAbout from '../subComponents/MobileAbout'

const AboutDisplay = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth)

  const updateMedia= () =>{
    setDesktop(window.innerWidth > 640)
  }
  useEffect(()=>{
    window.addEventListener("resize", updateMedia)
    return()=> window.removeEventListener("resize", updateMedia)
  })
  return (
    <>
    {isDesktop? (
      <About />
    ): (
        <MobileAbout/>
    )}
    </>
  )
}

export default AboutDisplay