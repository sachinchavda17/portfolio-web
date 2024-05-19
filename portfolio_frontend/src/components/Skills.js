import React from 'react'
import "../css/SkillsStyle.css"
import skillsData from '../data/SkillData';

const Skills = () => {

  return (
    <div className={"container"} id="Skills">
      <div className={"wrapper"}>
        <h1 className={"title"}>Skills</h1>
        <div className={"skillsContainer"}>
          {skillsData.map((skill, index) => (
            <div className={"skill"} key={`skill-${index}`}>
              <div className={"skillTitle"}>{skill.title}</div>
              <div className={"skillList"}>
                {skill.skills.map((item, index_x) => (
                  <div className={"skillItem"} key={`skill-x-${index_x}`}>
                    <img src={item.image} alt={item.name} className={"skillImage"} />
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
