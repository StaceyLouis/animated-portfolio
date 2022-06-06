import { Link } from 'react-router-dom'
import '../styles/Home.scss'
import SvgComponent from '../subComponents/HomeButton'
import Resume from '../subComponents/Resume'
import '../styles/mobileHome.css'
const Home = () => {
  return (
      <div className='home-container'>          
    <div className='home' id='home'>
        <h1 className='main-title'>Stacey Louis</h1>
        <div className='mid'></div>
        <ul>
            <li className='links'><Link to='/about'>About</Link></li>
            <hr/>
            <li className='links'><Link to='/work'>Work</Link></li>
            <hr/>
            <li className='links'><Link to='/contact'>Contact</Link></li>
        </ul>
        
        </div>
        
        </div>
  )
}

export default Home