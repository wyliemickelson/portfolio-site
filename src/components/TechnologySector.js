import React from 'react'
import styled from 'styled-components';

const StyledTechSector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .divider {
    display: block;
    width: 100%;
    height: 15px;
    border-right: 1px solid ${props => props.theme.colors.red};
  }
`

const TechnologySector = ({ name }) => {
  return (
    <StyledTechSector>
      <li>{name}</li>
      <div className='divider'></div>
    </StyledTechSector>
  )
}

export default TechnologySector