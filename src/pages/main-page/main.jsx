import React from 'react';
import './main.css';
import profilepic from '../../images/profilepic.jpg';

function MainPage() {
    return (
      <>
        <div className="main-page">
  
          <div className="text-content">
            <h1>Lilian Pham</h1>
            <h2>Bio/Overview:</h2>
            <p>I'm a second-year Computer Science student at Simon Fraser University with a passion
            for using technology to make a meaningful impact. Outside of coding, I’ve spent years
            leading community-based youth initiatives focused on STEM education and accessibility for kids.
            These experiences have shaped how I approach problem-solving, communication, and collaboration.
            Now, I bring those same values into the tech space — building full-stack web and mobile
            applications through internships and personal projects that aim to make a difference.
            </p>

          </div>
          <div className="images">
            <img src={profilepic} alt="Lilian Pham Profile Picture" />
          </div>  
  
        </div>

      </>
    );
  }


export default MainPage;