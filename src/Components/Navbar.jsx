import './Navbar.css';
import React from 'react';


function Navbar() {

    const scrollToContent1 = () => {
        const content = document.querySelector('.home-page-content'); // Adjust selector to match your content
        content.scrollIntoView({ behavior: 'smooth' });
      };

    const scrollToContent = () => {
        const content = document.querySelector('.about-content'); // Adjust selector to match your content
        content.scrollIntoView({ behavior: 'smooth' });
      };

    const scrollToContent2 = () => {
        const content = document.querySelector(".home-contact"); // Adjust selector to match your content
        content.scrollIntoView({ behavior: 'smooth' });
      };

      const scrollToContent3 = () => {
        const content = document.querySelector(".home-projects"); // Adjust selector to match your content
        content.scrollIntoView({ behavior: 'smooth' });
      };

    

  return (
    <nav className="navbar">
        <div className="navbar-links">
            <button onClick={scrollToContent1} className="home-button">Home</button>
            <button onClick={scrollToContent} className="about-button">About</button>
            <button onClick={scrollToContent3} className="projects-button">Projects</button>
            <button onClick={scrollToContent2} className="contact-button">Contact</button>
            {/*<Link to="/projects" className="projects-link"> Projects </Link>*/}
        </div>
        <div className="navbar-logo">
            <img src="/public/images/logopent.png" alt="My Image" className="logo" /> 
        </div>
    </nav>
  );
}

export default Navbar;