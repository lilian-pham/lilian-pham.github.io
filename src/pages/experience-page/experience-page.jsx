import ExperienceComponent from "../../components/experienceComponent";
import icbc from "../../images/icbc.png";
import sfu from "../../images/sfu.webp";
import "./experience-page.css"

const ExperiencePage = () => {
    const experiences = [
        {
            company: "Insurance Corporation of British Columbia (ICBC)",
            title: "Software Engineer Intern",
            date: "January 2025 - April 2025",
            image: icbc,
            link: "https://www.icbc.com/",
            description: [
                "Developed new features for ICBC’s Claims applications using React and JavaScript, improving workflows for >725,000 annual claims, including a geolocation feature using Google APIs",
                "Assisted with database upgrades by creating PostgreSQL queries to transfer and validate data",
                "Created Jenkinsfiles to automate application onboarding, restarts, and updates from GitLab",
                "Wrote PowerShell scripts to generate HTML reports for LDAP auditing and Linux group automation",
              ],
        },
    ]

    return (
        <div>
            <h2 className="experience-page-title">Experience</h2>
            <div className="container">
                {experiences.map((experience, index) => (
                    <ExperienceComponent
                        company={experience.company}
                        title={experience.title}
                        date={experience.date}
                        image={experience.image}
                        link={experience.link}
                        description={experience.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperiencePage;