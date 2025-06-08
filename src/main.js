import React from 'react';
import './main.css';
import profilepic from './images/profilepic.jpg';

function MainPage() {
    return (
      <>
        <div className="main-page">
  
          <div className="text-content">
            <h1>Lilian Pham</h1>
            <p>About me</p>
  
            <h2>Education</h2>
            <p>Simon Fraser University</p>
            <p>Bachelor of Science, Computer Science</p>
          </div>
  
          <div className="images">
            <img src={profilepic} alt="Lilian Pham Profile Picture" />
          </div>  
  
        </div>

      </>
    );
  }


export default MainPage;