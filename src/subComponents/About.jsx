import '../styles/About.scss'
import profile from '../assets/images/profile.jpg'


const Home = () => {
  return (
    <div className='about'>
       <h1>About Me</h1>
      <div>
     
       <p className='jumbotron'>
          I am passionate about <span>coding! </span> I spend my days practicing my <span>skills </span> 
           and building more experience as a <span>Developer</span>. <br/>
           I currently work as a <span>MERN Stack Instructor</span> at <a href='https://www.nucamp.co' target='_blank'>Nucamp Co.</a>           
           </p>
           <img src={profile}/>
          </div>
        

           <div className='skills'>
             <h2>Skills</h2>
           <ul>
              <div>
              <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                </div><div>
                <li>Redux</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Redux</li>
                </div><div>
                <li>SASS</li>
                <li>Git</li>
                <li>Jest</li>
                <li>Node</li>
                
              </div>
             </ul>
           </div>
    </div>
  )
}

export default Home