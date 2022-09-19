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
        Hey there! My name is Wylie and I have an immense interest in programming and Web Development.
        I'm always on the hunt for challenges and to discover new technologies to learn. I recently
        obtained my Associate's Degree in Computer Science, and along with it a great amount of
        self-taught study. I consider myself a quick learner, able to grasp onto concepts very fast.
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