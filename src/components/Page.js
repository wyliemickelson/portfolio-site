import React from 'react'
import PageContent from './PageContent'
import SideMenu from './SideMenu'
import NavBar from './NavBar'
import styled from 'styled-components';

const StyledPage = styled.div`

`

const Page = () => {

  return (
    <StyledPage>
      <SideMenu/>
      <NavBar/>
      <PageContent />
    </StyledPage>
  )
}

export default Page