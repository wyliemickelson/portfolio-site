import React from 'react'
import PageContent from './PageContent'
import NavBar from './NavBar'
import styled from 'styled-components';
import useWindowDimensions from './useWindowDimensions';

const StyledPage = styled.div`

`

const Page = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledPage>
      <NavBar screenWidth={width} />
      <PageContent />
    </StyledPage>
  )
}

export default Page