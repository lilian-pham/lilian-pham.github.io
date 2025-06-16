import React from 'react';
import sfu from "../images/sfu.webp"
import '../styling/education.css';

const EducationComponent = () => {
    const sfuLink = "https://www.sfu.ca/fas/computing.html";
    const schulichLink = "https://schulichleaders.com/";
    const rajanLink = "https://www.sfu.ca/students/financial-aid/entrance/regulations/rajan-family.html";
    const gradMedal = "https://stpats.bc.ca";

    return (
        <div className="education">
            <div>
                <img src={sfu} alt="Simon Fraser University logo" className="education-img" />
            </div>
            <div className="awards-container">
                <div>
                    <p className="study-description">
                    <a href={sfuLink} target="_blank" rel="noopener noreferrer" className="sfu-cs-link">
                            <strong>SFU - Bachelor of Science in Computer Science</strong>
                            <span className="arrow-icon"> →</span> 
                        </a>
                    </p>
                </div>
                <div>
                <p className="education-description">
                        <a href={schulichLink} target="_blank" rel="noopener noreferrer" className="scholarship-link">
                            <strong>Schulich Leader Scholarship of Canada</strong>
                            <span className="arrow-icon"> →</span>
                        </a>
                    </p>
                    <p className="subdescription">
                        Awarded Canada’s most prestigious STEM scholarship valued at <strong>$100,000</strong> for academic excellence, leadership, and entrepreneurship.
                    </p>
                </div>
                <div>
                    <p className="education-description">
                    <a href={rajanLink} target="_blank" rel="noopener noreferrer" className="scholarship-link">
                            <strong>Rajan Family Entrance Scholarship</strong>
                            <span className="arrow-icon"> →</span>
                        </a>
                    </p>
                    <p className="subdescription">
                        Offered a <strong>$40,000</strong> scholarship as the top female candidate entering SFU’s Computer Science program.
                    </p>
                </div>
                <div>
                    <p className="education-description">
                    <a href={gradMedal} target="_blank" rel="noopener noreferrer" className="scholarship-link">
                            <strong>St. Patrick Regional Graduation Medal</strong>
                            <span className="arrow-icon"> →</span>
                        </a>
                    </p>
                    <p className="subdescription">
                        Recognized as the top graduating student at St. Patrick Regional Secondary (99% average).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EducationComponent;