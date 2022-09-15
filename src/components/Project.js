import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { ReactComponent as ExternalLinkIcon } from '../assets/icons/external-link.svg';
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg';
import TechnologySector from './TechnologySector';

const StyledProject = styled.div`
  position: relative;
  border: 1px solid black;
  padding: 1rem;
  max-width: 950px;
  margin: 0 auto;

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

  img {
    display: none;
  }

  @media only screen and (min-width: 800px) {
    border: none;
    padding-inline: 0;

    p {
      max-width: 60%;
      background-color: ${props => props.theme.colors.beige};
      border-radius: 5px;
      padding: 1rem;
    }

    img {
      border-radius: 5px;
      display: initial;
      position: absolute;
      width: 55%;
      max-width: 450px;
      top: 0;
      right: 0;
      z-index: -5;
      overflow: hidden;
    }
  }
`

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.'

const Project = ({ details }) => {

  return (
    <StyledProject background={details.screenshotPath}>
      <h3>{details.title}</h3>
      <p>{lorem}</p>
      <ul>{details.technologies.map(name => <TechnologySector name={name} />)}</ul>
      <div>
        <a href={details.liveLink} target="_blank" ><ExternalLinkIcon /></a>
        <a href={details.githubLink} target="_blank" ><GithubLogo /></a>
      </div>
      <img src={`${"" + details.screenshotPath}`} />
    </StyledProject>
  )
}

export default Project