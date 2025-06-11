import React from 'react';
import '../styling/experience.css';

const ExperienceComponent = ({ company, title, date, descriptions }) => {
    return (
        <div className="experience">
            {/* <img src={image} alt={company} className="experience-img"/> */}
            <div className="experience-info">
                <h3>{company}</h3>
                <div className="date-title">
                    <h4>{title}</h4>
                    <h5>{date}</h5>
                </div> {/* Close this div */}
                
                {descriptions && descriptions.length > 0 && (
                    <div className="experience-details">
                        {descriptions.map((description, index) => (
                            <span className="details" key={index}>• {description}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

{/* // function Experience() {
//     return (
//         <>
//         <div className="experience-page">

//         <h2>Experience</h2>
//         <h3>Software Engineer Intern — ICBC </h3>
//         <p><em>January 2025 - April 2025</em></p>

//         <h3>Software Engineer Intern — ICBC </h3>
//         <p><em>January 2025 - April 2025</em></p>


//         </div>
        
//         </>
//     );
// } */}

export default ExperienceComponent;