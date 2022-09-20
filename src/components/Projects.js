import React from 'react'
import styled from 'styled-components';

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Projects = ({ children }) => {
  return (
    <StyledProjects>{children}</StyledProjects>
  )
}

export default Projects