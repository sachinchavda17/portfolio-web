// In ExperiencePage.js
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroImg2 from "../../components/HeroImg2";
import experienceImg from "../../assets/experience.jpg";
import { FaBriefcase } from "react-icons/fa";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2022 - Present",
      description: [
        "Developed responsive web applications using React.js",
        "Collaborated with cross-functional teams to deliver high-quality products",
        "Optimized application performance and improved load times by 40%",
        "Implemented new features and fixed bugs in existing applications",
      ],
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Redux", "Git"],
    },
    {
      id: 2,
      role: "UI/UX Designer",
      company: "Creative Studio",
      duration: "2020 - 2022",
      description: [
        "Designed intuitive user interfaces and created engaging user experiences",
        "Created wireframes, prototypes, and high-fidelity mockups",
        "Conducted user research and usability testing",
        "Worked closely with developers to implement designs",
      ],
      skills: ["Figma", "UI/UX", "Prototyping", "User Research", "Adobe XD"],
    },
    {
      id: 3,
      role: "UI/UX Designer",
      company: "Creative Studio",
      duration: "2020 - 2022",
      description: [
        "Designed intuitive user interfaces and created engaging user experiences",
        "Created wireframes, prototypes, and high-fidelity mockups",
        "Conducted user research and usability testing",
        "Worked closely with developers to implement designs",
      ],
      skills: ["Figma", "UI/UX", "Prototyping", "User Research", "Adobe XD"],
    },
  ];

  return (
    <div className="experience-page">
      <Navbar />
      <HeroImg2
        heading="EXPERIENCE"
        text="My Professional Journey"
        img={experienceImg}
      />

      <div className="experience-container">
        <h2 className="section-title">
          <FaBriefcase className="section-icon" /> Work Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
