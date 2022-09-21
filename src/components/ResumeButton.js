import React from 'react'
import styled from 'styled-components';
import resume from './Wylie-Mickelson-Resume.pdf'

const StyledResumeButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: white;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border-radius: 10px;
  margin: 0 auto;
  border: none;
  margin-top: 5rem;

  &:hover {
    cursor: pointer;
  }
`

const ResumeButton = () => {
  return (
    <form action={resume} target='_blank'>
      <StyledResumeButton>
        {'Resume'}
      </StyledResumeButton>
    </form>
  )
}

export default ResumeButton