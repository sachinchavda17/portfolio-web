import React from "react";
import "./SkillsStyle.css";
import skillsData from "../../data/SkillData";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={"container"} id="Skills">
      <div className="wrapper">
        <h2 className="section-title">
          <FaCode className="section-icon" /> Skills & Technologies
        </h2>
        <div className={"skillsContainer"}>
          {skillsData.map((skill, index) => (
            <div className={"skill"} key={`skill-${index}`}>
              <div className={"skillTitle"}>{skill.title}</div>
              <div className={"skillList"}>
                {skill.skills.map((item, index_x) => (
                  <div className={"skillItem"} key={`skill-x-${index_x}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={"skillImage"}
                    />
                    &nbsp; {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
