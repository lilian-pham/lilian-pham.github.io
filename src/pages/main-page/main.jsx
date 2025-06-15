import React from 'react';
import './main.css';
import profilepic from '../../images/profilepic.jpg';
import resume from "./lilianpham_resume.pdf";

function MainPage() {
    return (
      <>
        <div className="main-page">
  
          <div className="text-content">
            

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
    </>
  );
}

export default MainPage;
