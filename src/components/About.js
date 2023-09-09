import React from 'react'
import styled from 'styled-components';
import TechnologySector from './TechnologySector';

const StyledAbout = styled.section`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ul {
  list-style-type: none;
  justify-content: center;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  }

  h3 {
    margin: 1.25rem 0 0.75rem 0;
  }

  ul, h3 {
    text-align: center;
  }
`

const About = () => {

  const skills = ['Javascript', 'HTML/CSS', 'SASS', 'React', 'Webpack', 'npm'];

  return (
    <StyledAbout>
      <p>
      I am a passionate and driven software developer with a strong foundation in computer science. With a keen interest in crafting innovative and user-friendly digital experiences, I have honed my skills through self-taught project experience and formal education, with an expected Bachelor's of Computer Science by June 2025. I thrive on the challenges and opportunities that the digital world offers and am dedicated to creating solutions that not only meet but exceed user expectations. My portfolio reflects my commitment to delivering high-quality, efficient, and aesthetically pleasing software solutions.
      </p>
      <div>
        <h3>Experience With</h3>
        <ul>
          <TechnologySector name='' />
          {skills.map(skill => {
           return <TechnologySector name={skill} key={skill} />
          })}
        </ul>
      </div>
    </StyledAbout>
  )
}

export default About