import React from "react";
import "./Skills.css";
import TechIcon from "../../components/techIcon/TechIcon";
import skillsData from "./skillsData";

const Skills = (props) => {
  let mappedSkill = skillsData.map((skill, index) => {
    return <TechIcon tech={skill} key={index} />;
  });

  return (
    <div className="section" id="skills">
      <div className="section-title">
        <h2 className="tech-title">Dev Tools</h2>
      </div>
      <div className="container skills">{mappedSkill}</div>
    </div>
  );
};

export default Skills;
