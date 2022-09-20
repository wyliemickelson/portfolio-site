import styled from 'styled-components';
import ProjectDetails from './ProjectDetails';

const StyledProject = styled.div`
  position: relative;
  border: 1px solid black;
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  img {
    display: none;
  }

  @media only screen and (min-width: 850px) {
    border: none;
    padding-inline: 0;

    display: grid;
    align-items: center;
    grid-template-columns: 4.5fr 75px 5.5fr;

    img {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
      border-radius: 5px;
      display: initial;
      z-index: -5;
    }
  }
`


const Project = ({ details }) => {

  return (
    <StyledProject background={details.screenshotPath}>
      <ProjectDetails details={details} />
      <img src={`${"" + details.screenshotPath}`} alt={'Project preview'} />
    </StyledProject>
  )
}

export default Project