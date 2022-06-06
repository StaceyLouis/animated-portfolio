import * as React from "react"
import '../styles/Home.scss'
import styled from 'styled-components'

const Div = styled.div`
width: 100%;
margin: auto;
text-align: center;
`

const SvgComponent = (props) => (
  <Div>
  <svg
  className="home-logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={100}
    height={100}
    {...props}
  >
    <path d="M25 1.05c-.218 0-.434.07-.62.21l-23 17.95c-.43.34-.51.97-.17 1.41.34.43.97.51 1.41.17L4 19.71V46c0 .55.45 1 1 1h14V29h12v18h14c.55 0 1-.45 1-1V19.71l1.38 1.08c.19.14.4.21.62.21.3 0 .59-.13.79-.38a1.01 1.01 0 0 0-.17-1.41l-23-17.95a1.022 1.022 0 0 0-.62-.21zM35 5v1.05l6 4.68V5h-6z" />
  </svg>
  </Div>
)

export default SvgComponent
