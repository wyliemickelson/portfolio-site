import React from 'react'
import styled from 'styled-components';

const StyledHero = styled.section`
  text-align: center;
  margin-top: 20vh;
  h1 {
    font-size: clamp(37px, 8vw, 70px);
    white-space: nowrap;
  }
  .job-title {
    font-size: clamp(27px, 6vw, 50px);
    color: ${props => props.theme.colors.lightBlue};
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <p>Hello, my name is</p>
      <h1>Wylie Mickelson</h1>
      <h1 className='job-title'>Software Developer</h1>
    </StyledHero>
  )
}

export default Hero