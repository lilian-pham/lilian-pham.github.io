import React from 'react';
import './main.css';
import profilepic from '../../images/profilepic.jpg';
import resume from "./lilianpham_resume.pdf";

function MainPage() {
  return (
    <div className="main-page">
      <div className="text-content">
        <h1>Lilian Pham</h1>
        <h2>Overview</h2>
        <p>
          Hello! I'm a second-year Computer Science student at Simon Fraser University with a passion
          for using technology to make a meaningful impact. Outside of coding, I’ve spent years
          leading community-based youth initiatives focused on STEM education and accessibility for kids.
          These experiences have shaped how I approach problem-solving, communication, and collaboration.
          I strive to bring those same values into the tech space — through building software that help
          make people lives better.
        </p>

        <div className="nav-links">
          <a
            href="https://github.com/lilian-pham"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
          <a
            href={resume}
            download="lilianpham_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <a
            href="https://schulichleaders.com/scholars/lilian-pham/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Media Mentions
          </a>
        </div>
      </div>

      <div className="images">
        <img src={profilepic} alt="Lilian Pham Self-Photo for Bio" />
      </div>
    </div>
  );
}

export default MainPage;
