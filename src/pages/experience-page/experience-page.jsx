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
            <h2>Experience</h2>
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
            <h2 className="title">Education</h2>
            <div className="education">
                <div>
                    <img src={sfu} alt="education" className="education-img"/>
                    <h3 className="education-title">Simon Fraser University</h3>
                    <span className="education-description">Expected Graduation: May 2027</span>
                </div>
                <div className="awards-container">
                    <div>
                        <p className="education-description"><strong>Schulich Leader Scholarship of Canada</strong><br/></p>
                        <p className="subdescription">Awarded Canada’s most prestigious STEM scholarship valued at <strong>$100,000 </strong>for academic excellence, leadership, and
entrepreneurship. Selected out of 300,000 candidates and 1500 nominees nationally - one of two 2023 Leaders at SFU</p>
                    </div>
                    <div>
                        <p className="education-description"><strong>Rajan Family Scholarship in Computing Science</strong></p>
                        <p className="subdescription">Offered a <strong>$40,000</strong> scholarship as the top female candidate entering SFU’s Computer Science program</p>
                    </div>
                    <div>
                        <p className="education-description"><strong>Governor General Bronze Medal of Canada</strong></p>
                        <p className="subdescription">Recognized as the top graduating student at the bronze level (99% average)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage;