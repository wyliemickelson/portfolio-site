import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ExternalLinkIcon } from '../assets/icons/external-link.svg';
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg';

const StyledProject = styled.div`
  border: 1px solid black;
  padding: 1rem;

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
`

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const Project = ({ details }) => {
  return (
    <StyledProject>
      <h3>{details.title}</h3>
      <p>{lorem}</p>
      <div>
        <a href={details.liveLink} target="_blank" ><ExternalLinkIcon /></a>
        <a href={details.githubLink} target="_blank" ><GithubLogo /></a>
      </div>
      
    </StyledProject>
  )
}

export default Project