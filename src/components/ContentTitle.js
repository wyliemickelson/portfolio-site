import React from 'react'
import styled from 'styled-components';

const StyledContentTitle = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 5%, 3rem);
  margin-bottom: 1rem;
  max-width: 500px;

  h2 {
    color: ${props => props.theme.colors.red};
    white-space: nowrap;
  }

  div {
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${props => props.theme.colors.beige};
  }
`

const ContentTitle = ({ title }) => {
  return (
    <StyledContentTitle id={title}>
      <h2>{title}</h2>
      <div></div>
    </StyledContentTitle>
  )
}

export default ContentTitle