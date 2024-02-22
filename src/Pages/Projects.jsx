import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {

  return (
    <div className="projects">
        <div className="projects-content">
            <h1 className="projects-title">PROJECTS</h1>
            <h3 className="projects-descr">Select a project to check it out</h3>
            <div className="projects-list">
                <div className='earth-card'>
                    <img src="/public/images/earthimg.png" alt="My Image" className="earth-img" />
                    <div className='overlay'>
                        <h2 className="project-link-e">
                        <Link
                            to="https://glowinzero.github.io/game-project/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-e"
                        >Earth Savior</Link>
                        </h2>
                        <p className='earth-text'>‘Earth Savior’, a game about aiming and shooting meteors to help protect our planet.
                        Developed using Javascript, Object-Oriented Programming (OOP) and DOM Manipulation.</p>
                    </div>
                </div>
                <div className='memes-card'>
                    <img src="/public/images/memes-img.png" alt="My Image" className="memes-img" />
                    <div className='overlay'>
                        <h2 className="project-link-m">
                        <Link
                            to="https://memezard.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-m"
                        >
                            Memezard
                        </Link>
                        </h2>
                        <p className='memes-text'>‘Memezard’, a Memes journey that had the goal of creating something creative and user interactive. React project fetching and presenting data via REST API.</p>
                    </div>
                </div>
                <div className='upet-card'>
                    <img src="/public/images/upet-img.png" alt="My Image" className="upet-img" />
                    <div className='overlay'>
                        <h2 className="project-link-u">
                        <Link
                            to="https://effulgent-rugelach-8d767c.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-u">
                            Upet
                        </Link>
                        </h2>
                        <p className='upet-text'>A MERN stack project dedicated to managing your pets' information and supporting animals in need.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
