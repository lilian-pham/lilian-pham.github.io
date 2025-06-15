import React from 'react';
import '../styling/experience.css';

const ExperienceComponent = ({ company, title, date, image, link, description }) => {
    return (
        <div className="experience">
            <img src={image} alt={company} className="experience-img" />
            <div className="experience-info">
                <h3>
                    <a
                        href="https://www.icbc.com/"
                        className="company-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Insurance Corporation of British Columbia (ICBC) →
                    </a>
                </h3>

                <div className="date-title">
                    <h4>{title}</h4>
                    <h5>{date}</h5>
                </div>
                <ul className="description-list">
                    {description && description.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceComponent;