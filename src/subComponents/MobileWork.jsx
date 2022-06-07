import {useState} from 'react'
import data from '../assets/data'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  height: 15rem;
  border-radius: 1rem;
  border: 1px solid white;
  background-color: rgb(242, 222, 196);
  h2{
    font-size: 3rem;
    font-family: "Bugaki";
  }
  .proj-icons{
    display: flex;
    justify-content: center;
    a{
      color: white;
      .proj-icons{
        font-size: 4rem;
        text-align: center;
        margin: 1rem;
        
      }

  }
 
  }
`
const Container = styled.div`
  width: 80vw;
  margin: auto;
`

const MobileWork = () => {
    const [projects, setProjects] = useState(data)
    const list= projects.map(i=>{
      return(
        <Div key={i.id} className="projects-card">
          <h2>{i.title}</h2>
          <p>{i.desc}</p>
          <div className='proj-icons'>
          <a href={i.url}><FontAwesomeIcon icon={faSquare} className="proj-icons"/></a>
          <a href={i.url}><FontAwesomeIcon icon={faGithubAlt} className="proj-icons"/></a>
          </div>
        </Div>
      )
    } )
  return (
    <Container>
    {list}
    </Container>
    )
}
 
export default MobileWork 