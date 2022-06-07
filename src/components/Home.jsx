import { Link } from 'react-router-dom'
import '../styles/Home.scss'
import SvgComponent from '../subComponents/HomeButton'
import Resume from '../subComponents/Resume'
import '../styles/mobileHome.css'
import profile from '../assets/images/profile.jpg'
import { useEffect, useState } from 'react'


const Home = () => {
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
      {isDesktop?(
        <div className='home-container'>          
        <div className='home' id='home'>
            <h1 className='main-title'>Stacey Louis</h1>
            <h3>Web Developer </h3>
            <div className='mid'></div>
            <ul>
            <li ><Link to='/about'>About</Link></li>
                <hr/>
                <li ><Link to='/work'>Work</Link></li>
                <hr/>
                <li ><Link to='/contact'>Contact</Link></li>
            </ul>
            
            </div>
            
            </div>
      ): (
        <div className='mobile-home'>
          <h2>Stacey Louis</h2>
          <h3>Web Developer </h3>
          <div className='mid'></div>
            <ul>
              
                <li ><Link to='/about' className='links'>About</Link></li>
                <hr/>
                <li><Link to='/work'  className='links'>Work</Link></li>
                <hr/>
                <li ><Link to='/contact' className='links'>Contact</Link></li>
               
            </ul>

            <div className='foot'>
              <span>Designed and Developed by <a href='https://github.com/staceyLouis' target="_blank"><img src={profile} /> </a></span>
            </div>
        </div>
      )}
      </>
  )
}

export default Home