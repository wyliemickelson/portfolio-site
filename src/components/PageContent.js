import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import ContentSection from './ContentSection';
import Project from './Project';
import About from './About';

const StyledPageContent = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-top: 10rem;

  @media only screen and (min-width: 600px) {
    width: 75%;
  }
`

const PageContent = () => {

  const projects = [
    // {
    //   title: '',
    //   liveLink: '',
    //   githubLink: '',
    //   screenshotPath: '',
    //   technologies: [],
    //   description: '',
    // },
    {
      title: 'Entertainment App',
      liveLink: 'https://wyliemickelson.github.io/react-entertainment-web-app/',
      githubLink: 'https://github.com/wyliemickelson/react-entertainment-web-app',
      screenshotPath: '',
      technologies: ['React', 'Styled-Components', 'Javascript' ],
      description: '',
    },
    {
      title: 'Pomodoro Timer',
      liveLink: 'https://wyliemickelson.github.io/pomodoro-app/',
      githubLink: 'https://github.com/wyliemickelson/pomodoro-app',
      screenshotPath: '',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: '',
    },
    {
      title: 'Ecommerce Product Page',
      liveLink: 'https://wyliemickelson.github.io/ecommerce-product-page/',
      githubLink: 'https://github.com/wyliemickelson/ecommerce-product-page',
      screenshotPath: '',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: '',
    },
  ]

  return (
    <StyledPageContent>
      <Hero />
      <ContentSection title='About Me' width='700px'>
        <About />
      </ContentSection>
      <ContentSection title='Projects'>
        {projects.map(project => <Project details={project} />)}
      </ContentSection>
      <ContentSection title='Contact Me'>

      </ContentSection>
    </StyledPageContent>
  )
}

export default PageContent