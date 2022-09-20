import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import ContentSection from './ContentSection';
import Project from './Project';
import About from './About';
import Projects from './Projects';
import ContactForm from './ContactForm';

const StyledPageContent = styled.section`
  width: 85%;
  margin: 0 auto;

  .home {
    height: 75vh;
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
      screenshotPath: './project-previews/entertainment.png',
      technologies: ['React', 'Styled-Components', 'Javascript' ],
      description: '',
    },
    {
      title: 'Pomodoro Timer',
      liveLink: 'https://wyliemickelson.github.io/pomodoro-app/',
      githubLink: 'https://github.com/wyliemickelson/pomodoro-app',
      screenshotPath: './project-previews/pomodoro.png',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: '',
    },
    {
      title: 'Ecommerce Product Page',
      liveLink: 'https://wyliemickelson.github.io/ecommerce-product-page/',
      githubLink: 'https://github.com/wyliemickelson/ecommerce-product-page',
      screenshotPath: './project-previews/product-page.png',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: '',
    },
  ]

  return (
    <StyledPageContent>
      <div className='home'>
        <Hero />
        <ContentSection title='About Me' width='700px'>
          <About />
        </ContentSection>
      </div>
      <ContentSection title='Projects' className='projects'>
        <Projects>
          {projects.map(project => <Project details={project} key={project} />)}
        </Projects>
      </ContentSection>
      <ContentSection title='Contact Me'>
        <ContactForm />
      </ContentSection>
    </StyledPageContent>
  )
}

export default PageContent