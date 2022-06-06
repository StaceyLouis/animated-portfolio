import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
position: fixed;
bottom: 1;
right: 0;
transform: rotate(-90deg);


`
const Btn = styled.button`
background-color: transparent;
color: var(--text);
font-family: var(--font);
border: 0.1rem solid var(--text);
padding: 0.5rem;
margin: 0.1rem;
&:hover{
    border: none;
    color: black;
    background-color: white;
}
`
const Hr = styled.hr`
    transform: rotate(90deg);
  
`

const Resume = () => {
  return (
    <Div className='res-btn'>
        <Btn> Resume </Btn>
    </Div>
  )
}

export default Resume