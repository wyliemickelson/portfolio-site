import React from 'react'
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: fixed;
  top: 38px;
  left: 10%;
`

const NavBar = () => {

  return (
    <StyledNavBar>
      <p>WM</p>
    </StyledNavBar>
  )
}

export default NavBar