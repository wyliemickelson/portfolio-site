import React, {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components';
import MenuItem from './MenuItem';

const SideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 20;

.bm-menu {
  background: ${props => props.theme.colors.beige};
  font-size: 1.15em;
}

.bm-item-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 2rem;
  padding-top: 30vh;
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 5%;
  top: 30px;
}

.bm-burger-bars {
  background: ${props => props.theme.colors.blue};
}

.bm-cross-button {
  position: absolute;
  height: 40px;
  width: 40px;
  right: 5%;
  top: 30px;
}

.bm-cross {
  background: ${props => props.theme.colors.red};
}
`

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stateChangeHandler = (newState) => { setIsOpen(newState.isOpen) }

  const menuItems = ['About Me', 'Projects', 'Contact Me', 'Resume'];

  const closeMenu = () => {
    setIsOpen(false);
  }
  
  return (
    <SideMenuContainer>
      <Menu right={true} width={250} isOpen={isOpen} onStateChange={(state) => stateChangeHandler(state)} >
        {menuItems.map(item => <MenuItem name={item} onClick={closeMenu} key={item} />)}
      </Menu>
    </SideMenuContainer>
  )
}

export default SideMenu