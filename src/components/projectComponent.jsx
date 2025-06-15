import React from "react";
import "../styling/project.css";

const ProjectComponent = ({ name, description, image, github, tags }) => (
  <div className="project">
    <img src={image} alt={name} className="project-image" />

    <div className="project-info">
      <h3>{name}</h3>
      <p className="project-description">{description}</p>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View Repo
        </a>
      )}

      {tags && tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ProjectComponent;
