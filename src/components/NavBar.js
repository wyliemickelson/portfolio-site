import React from 'react'
import styled from 'styled-components';
import SideMenu from './SideMenu';
import MenuItem from './MenuItem';

const StyledNavBar = styled.nav`
  z-index: 99;
  background-color: ${props => props.theme.colors.beige};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.3rem 7.5%;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${props => props.theme.colors.blue};

  > div {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
`

const NavBar = ({ screenWidth }) => {

  const menuItems = ['About Me', 'Projects', 'Contact Me', 'Resume'];
  const isMobile = screenWidth < 850;

  return (
    <StyledNavBar>
      <h1>WM</h1>
      <div>
       {!isMobile && menuItems.map(item => <MenuItem name={item} key={'nav' + item} />) }
      </div>
      {isMobile && <SideMenu menuItems={menuItems} />}
    </StyledNavBar>
  )
}

export default NavBar