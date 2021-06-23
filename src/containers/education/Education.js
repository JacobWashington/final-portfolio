import React from "react";
import "./Education.css";
import Experience from "../../components/experience/Experience";
import educationData from "./educationData";

const Education = (props) => {
  let mappedExperience = educationData.map((exp, index) => {
    return (
      <Experience
        type="edu"
        logo={exp.logo}
        main={exp.focus}
        sub={exp.school}
        content={exp.bullets}
        key={index}
      />
    );
  });

  return (
    <div className="section" id="education">
      <div className="section-title">
        <h2 className="edu-title">My Training & Education</h2>
      </div>
      <div className="container education">{mappedExperience}</div>
    </div>
  );
};

export default Education;
