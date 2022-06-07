import React from 'react'
import styled from "styled-components"

const Box = styled.div`
    width: 75%;
    padding: 5%;
    margin: auto;
    height: 60vh;
    border: 8px solid white;
    p{
        
        color: rgb(242, 222, 196);
        font-size: 2rem;
        span{
            color: rgb(49,9,9);
        }
        a{
            text-decoration: none;
            color: white;
        }
    }
  ul{
      display: flex;
      margin: 2rem 0;

      li{
          font-size: 1.5rem;
          margin: 1rem;
          list-style-type: square;
          color: rgb(49, 9, 9);
      }
  }
`
const Title = styled.h1`
    font-size: 4rem;
    font-family: "Bugaki";
    position: fixed;
    top: 9rem;
    left: 1.5rem;
    color:  rgb(39, 8, 4);

`
const Container = styled.div`
    disply: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 5rem;
`
const MobileAbout = () => {
  return (
    <Container>
        <Title>About Me</Title>
        <Box>
            <p>
            I am passionate about <span>coding</span>! I spend my days practicing my <span>skills</span> 
           and building more experience as a <span>Developer</span>. <br/>
           I currently work as a <span>MERN Stack Instructor</span> at <a href='https://www.nucamp.co' target='_blank'>Nucamp Co.</a>
            </p>
            <hr/>
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
                </div><div>
                
                
                </div>
             </ul>
            </Box>
    </Container>
  )
}

export default MobileAbout