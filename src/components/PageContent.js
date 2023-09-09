import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import ContentSection from './ContentSection';
import Project from './Project';
import About from './About';
import Projects from './Projects';
import ContactForm from './ContactForm';
import ContentTitle from './ContentTitle';
import { Fade } from 'react-reveal';
import ResumeButton from './ResumeButton';

const StyledPageContent = styled.section`
  width: 85%;
  margin: 0 auto;

  .home {
    height: 75vh;
  }

  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      }
    100% {
      opacity: 1;
      }
  }


  .contact {
    max-width: 500px;
    margin: 0 auto;
  }
`

const PageContent = () => {

  const projects = [
    {
      title: 'Esports On Demand',
      liveLink: 'https://esports-on-demand.com/',
      githubLink: 'https://github.com/wyliemickelson/esport-vods',
      screenshotPath: './project-previews/esports-on-demand.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'A full stack and deployed web application for users to watch recent esports events in a spoiler-free environment.',
    },
    {
      title: 'LiquiScraper',
      liveLink: null,
      githubLink: 'https://github.com/wyliemickelson/liquiScraper',
      screenshotPath: null,
      technologies: ['Node.js', 'API', 'Promises' ],
      description: 'A web scraper to fetch esport tournament data using the liquipedia.net API and automatically parse, format and save the collected data to a MongoDB database.',
    },
    {
      title: 'Rate My Professor Helper',
      liveLink: 'https://chrome.google.com/webstore/detail/rate-my-professor-helper/hdblalhbknkmefefbkbpkonegomjeilo',
      githubLink: 'https://github.com/wyliemickelson/rate-my-prof-extension',
      screenshotPath: './project-previews/rmp.png',
      technologies: ['Javascript', 'Node.js', 'Webpack', 'GraphQL'],
      description: 'As a student, view your college professor ratings from ratemyprofessors.com directly in the same page you use to register for classes. Built to work across any college/university, while similar extensions only target a single school.',
    },

    {
      title: 'Entertainment App',
      liveLink: 'https://wyliemickelson.github.io/react-entertainment-web-app/',
      githubLink: 'https://github.com/wyliemickelson/react-entertainment-web-app',
      screenshotPath: './project-previews/entertainment.png',
      technologies: ['React', 'Styled-Components', 'Javascript' ],
      description: 'A front-end web app for streaming movies and television shows. Click on different tabs to show certain categories, and bookmark media that sounds interesting. Search for a specific show or movie using the bar at the top.',
    },
    {
      title: 'Pomodoro Timer',
      liveLink: 'https://wyliemickelson.github.io/pomodoro-app/',
      githubLink: 'https://github.com/wyliemickelson/pomodoro-app',
      screenshotPath: './project-previews/pomodoro.png',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: 'An easy to use and simple pomodoro timer app. Choose between three different modes, and open the settings page to edit the length of your timers. Users may also change the accent color and font to their liking.',
    },
    {
      title: 'Ecommerce Product Page',
      liveLink: 'https://wyliemickelson.github.io/ecommerce-product-page/',
      githubLink: 'https://github.com/wyliemickelson/ecommerce-product-page',
      screenshotPath: './project-previews/product-page.png',
      technologies: ['Vanilla JS', 'SASS', 'Webpack'],
      description: 'Browse through different product images and click on the main image to open up a lightbox for a better view. Add the product to your cart and view all items in the top right by clicking the icon.',
    },
  ]

  return (
    <StyledPageContent>
      <div className='home fadeIn'>
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
      <Fade>
      <ContentSection>
        <ResumeButton />
      </ContentSection>
      </Fade>
      <Fade>
      <div className='contact'>
        <ContentTitle title='Get In Touch' />
        <ContactForm />
      </div>
      </Fade>
    </StyledPageContent>
  )
}

export default PageContent