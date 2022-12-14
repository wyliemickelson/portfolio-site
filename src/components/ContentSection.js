import React from 'react'
import ContentTitle from './ContentTitle'
import styled from 'styled-components';

const StyledContentSection = styled.div`
  max-width: ${props => props.width};
  margin: 0 auto;
  width: fit-content;
`

const ContentSection = ({ title, children, width }) => {
  return (
    <StyledContentSection width={width}>
     {title && <ContentTitle title={title} />}
      {children}
    </StyledContentSection>
  )
}

export default ContentSection