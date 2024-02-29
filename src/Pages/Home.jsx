import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import React from 'react';
import './Projects.css'

function Home() {

  useEffect(() => {
    const content = document.querySelector('.home-page-content');
    if (content) {
      window.scrollTo({ top: content.offsetTop, behavior: 'smooth' });
    }
  }, []);

  const scrollToContent = () => {
    const content = document.querySelector('.about-content'); // Adjust selector to match your content
    content.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent1 = () => {
    const content = document.querySelector('.home-page-content'); // Adjust selector to match your content
    content.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent2 = () => {
    const content = document.querySelector(".home-projects"); // Adjust selector to match your content
    content.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent3 = () => {
    const content = document.querySelector(".home-contact"); // Adjust selector to match your content
    content.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        <h1 className="title">Hello, <br></br>
        I'm João Pedro Silva, <br></br>
        <span className="wd-home">Web Developer</span></h1>
        <div className="home-page-parts">
          <h3 className="home-page-text">Web Developer based in Lisbon. <br></br>
          I'm a recent graduate of the Web Development Bootcamp at Ironhack, where I developed Full Stack skills and my passion for technology.</h3>
          <div className="pentagons">
            <div className="pentagon1"></div>
            <div className="pentagon2"></div>
            <div className="pentagon3"></div>
          </div>
        </div>
      </div>
      <div onClick={scrollToContent} className="arrow-zone1">
      <img src="/images/arrow-2.png" alt="Scroll Down" className="arrow-down1" />
      </div>
      <div className="about-content">
        <img src="/images/fotoport.png" alt="My Image" className="home-foto" /> 
        <h3 className="home-about-text">Hello, I'm João Pedro Silva, a 27-year-old Full Stack Developer based in Lisbon. My academic journey began with a Bachelor’s degree in Marketing and Advertising, followed by a post-graduation in the Digital Marketing area. <br></br>
        Recently I completed a Web Development bootcamp at Ironhack, where I learned various Front-end and Back-end tools and languages, honing my passion for technology.  My commitment to continuous learning and growth has been essential in my evolution as a developer, enabling me to overcome different challenges and look forward to new ones.</h3>
      </div>
      <div onClick={scrollToContent2} className="arrow-zone2">
      <img src="/images/arrow-2.png" alt="Scroll Down" className="arrow-down2" />
      </div>
      <div className="home-projects">
        <h1 className="projects-title">PROJECTS</h1>
        <div className="projects-list">
            <div className='earth-card'>
                <img src="/images/earthimg.png" alt="My Image" className="earth-img" />
                <div className='overlay'>
                    <p className='earth-text'>‘Earth Savior’, a game about aiming and shooting meteors to help protect our planet.
                    Developed using Javascript, Object-Oriented Programming (OOP) and DOM Manipulation.</p>
                    <Link
                        to="https://glowinzero.github.io/game-project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-e"
                    >
                        Visit Website 
                    </Link>
                </div>
            </div>
            <div className='memes-card'>
                <img src="/images/memes-img.png" alt="My Image" className="memes-img" />
                <div className='overlay'>
                <p className='memes-text'>‘Memezard’, a Memes journey that had the goal of creating something creative and user interactive. React project fetching and presenting data via REST API.</p>
                    <Link
                        to="https://memezard.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-m"
                    >
                        Visit Website
                    </Link>
                </div>
            </div>
            <div className='upet-card'>
                <img src="/images/upet-img.png" alt="My Image" className="upet-img" />
                <div className='overlay'>
                  <p className='upet-text'>MERN stack project dedicated to managing your pets' information and supporting animals in need from APAMG, an Animal Protection Association from Marinha Grande.</p>
                    <Link
                      to="https://u-pet.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-u">
                      Visit Website
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <div onClick={scrollToContent3} className="arrow-zone3">
        <img src="/images/arrow-2.png" alt="Scroll Down" className="arrow-down3" />
      </div>
      <div className="home-contact">
        <h1 className="title-home-contact">Contact</h1>
        <div className="contact-page-content">
          <div className="contact-page-grid">
            <div className="contact-page-parts"> <div className="icons-box"><img src="/images/emailcon.png" alt="icon" className="icons" /></div><h3 className="info">joaosilvapedro357@gmail.com</h3></div>
            <div className="contact-page-parts"> <div className="icons-box"><img src="/images/phicon.png" alt="icon" className="icons" /></div><h3 className="info">+351 912600488</h3></div>
            <div className="contact-page-parts"> <div className="icons-box"><img src="/images/homecon.png" alt="icon" className="icons" /></div><h3 className="info">Cascais, Lisbon, Portugal</h3></div>
            <div className="contact-page-parts">
            <div className="icons-box"><img src="/images/linkcon.webp" alt="icon" className="icons" /></div>
              <Link to="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-5a413719a/" target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </Link>
            </div>
            <div className="contact-page-parts">
            <div className="icons-box"><img src="/images/gitcon.png" alt="icon" className="icons" /></div>
              <Link to="https://github.com/joaosilvapedro357" target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div onClick={scrollToContent1} className="arrow-zoneup">
      <img src="/images/arrow-up.png" alt="Scroll Down" className="arrow-up" />
      </div>
    </div>

  );
}

export default Home;
