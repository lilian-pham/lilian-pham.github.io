import React from 'react';
import './main.css';
import profilepic from './images/profilepic.jpg';

function MainPage() {
    return (
        <div className="main-page">

            <div className="text-content">
                <h2>Hi!</h2>
                <p>Hello! My name is Lilian</p>

                <h2>Education</h2>
                <p>Simon Fraser University</p>
                <p>Bachelor of Science, Computer Science</p>
            </div>
            <div class="images">
                <img src={profilepic} alt="Lilian Pham Profile Picture"></img>
            </div>  
        </div>
    );
}

export default MainPage;