import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ExternalLinkIcon } from '../assets/icons/external-link.svg';
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg';
import TechnologySector from './TechnologySector';

const StyledProjectDetails = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;

svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a:hover {
    cursor: pointer;
  }

  > div {
    display: flex;
    gap: 1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 0.5rem;
    white-space: nowrap;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 850px) {

    p {
      background-color: ${props => props.theme.colors.beige};
      border-radius: 5px;
      padding: 1rem;
    }
  }
`

const ProjectDetails = ({ details }) => {

  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.'


  return (
    <StyledProjectDetails>
      <h3>{details.title}</h3>
      <p>{lorem}</p>
      <ul>{details.technologies.map(name => <TechnologySector name={name} key={name} />)}</ul>
      <div>
        <a href={details.liveLink} target="_blank" rel="noreferrer" ><ExternalLinkIcon /></a>
        <a href={details.githubLink} target="_blank" rel="noreferrer" ><GithubLogo /></a>
      </div>
    </StyledProjectDetails>
  )
}

export default ProjectDetails