import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
position: fixed;
right: 0;
transform: rotate(-90deg);

`
const Btn = styled.span`

background-color: transparent;
color: var(--text);
font-family: var(--font);
&:hover{
    border: none;
    color: black;
    background-color: white;
}
`
const Hr = styled.hr`
    transform: rotate(90deg);
  
`
const Container = styled.div`
display: flex;

`

const Email = () => {
  return (
    <Container>
    <Div>
      <Btn>stacey@staceylouis.com</Btn>
    </Div>
    <Hr />
    </Container>
  )
}

export default Email