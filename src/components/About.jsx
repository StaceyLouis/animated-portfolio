import '../styles/About.scss'
import profile from '../assets/images/profile.jpg'


const Home = () => {
  return (
    <div className='about'>
      <div>
       <p className='jumbotron'>
         I am passionate about coding! I spend my days practicing my skills
          and building more experience as a Developer. <br/>
           I currently work as a MERN Stack Instructor at <a href='https://www.nucamp.co' target='_blank'>Nucamp</a>
           
           </p>
          </div>
        

           <div className='skills'>
             <h2>Skills</h2>
           <ul>
               <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Material UI</li>
                <li>Bootstrap</li>
                <li>Redux</li>
                <li>SASS</li>
                <li>Git</li>
                <li>Jest</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Express</li>
             </ul>
           </div>
    </div>
  )
}

export default Home