import React from 'react'
import '../styles/Nav.scss'
import logo from '../assets/images/logo.png'

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='logo'>
           <img src={logo}/>
        </div>
        <div className='nav-items'>
            <a href='#home' className='item'>Home</a>
            <a href='#about' className='item'>About</a>
            <a href='#work' className='item'>Work</a>
            <a href='#contact' className='item'>Contact</a>
            
        </div>

        </nav>
  )
}

export default Nav