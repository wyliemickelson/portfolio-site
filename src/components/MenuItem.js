import React from 'react'
import styled from 'styled-components';
import resume from './Wylie-Mickelson-Resume.pdf'

const StyledMenuItem = styled.a`
div {
  padding-bottom: 0.3rem;
  width: fit-content;
  font-weight: 600;
}

  &:hover {
    cursor: pointer;
  }
 
  .hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.lightBlue};
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`

const MenuItem = ({ name, onClick }) => {

  const isResume = name === 'Resume';
  const href = isResume ? resume : `#${name}`
  const target = isResume ? '_blank' : '';

  return (
    <>
    <StyledMenuItem href={href} onClick={onClick} target={target}>
      <div className='hover-underline-animation'>{name}</div>
    </StyledMenuItem>
    </>
  )
}

export default MenuItem