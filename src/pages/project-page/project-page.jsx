import React from "react";
import ProjectComponent from "../../components/projectComponent";
import personalWebsite from "../../images/personalwebsite.png";
import "./project-page.css"

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Lilian Pham Portfolio",
      description: "This is a personal website with an overview that explains more about my biography, work experience, education, and projects. This website was built using React (CMPT 276 Summer 2025).",
      image: personalWebsite,
      github: "https://github.com/lilian-pham/lilian-pham.github.io",
      tags: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
      ]
    },
  ];

  return (
    <div>
      <h2 className="projects-page-title">Technical Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectComponent
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;