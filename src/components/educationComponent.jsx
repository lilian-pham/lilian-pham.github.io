import React from 'react';
import sfu from "../images/sfu.webp"
import '../styling/education.css';

const EducationComponent = () => {
    return (
      <div className="education">
        <div>
          <img src={sfu} alt="Simon Fraser University logo" className="education-img" />
          <h3 className="education-title">Simon Fraser University</h3>
          <span className="education-description">Expected Graduation: May 2027</span>
        </div>
        <div className="awards-container">
          <div>
            <p className="education-description">
              <strong>Schulich Leader Scholarship of Canada</strong>
            </p>
            <p className="subdescription">
              Awarded Canada’s most prestigious STEM scholarship valued at <strong>$100,000</strong> for academic excellence, leadership, and entrepreneurship.
            </p>
          </div>
          <div>
            <p className="education-description">
              <strong>Rajan Family Scholarship in Computing Science</strong>
            </p>
            <p className="subdescription">
              Offered a <strong>$40,000</strong> scholarship as the top female candidate entering SFU’s Computer Science program.
            </p>
          </div>
          <div>
            <p className="education-description">
              <strong>Governor General Bronze Medal of Canada</strong>
            </p>
            <p className="subdescription">
              Recognized as the top graduating student at the bronze level (99% average).
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EducationComponent;