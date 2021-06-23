import React from "react";
import "./WorkHistory.css";
import Experience from "../../components/experience/Experience";
import workHistoryData from "./workHistoryData";

const WorkHistory = (props) => {
  let mappedExperience = workHistoryData.map((exp, index) => {
    return (
      <Experience
        type="emp"
        logo={exp.logo}
        main={exp.role}
        sub={exp.employer}
        content={exp.bullets}
        key={index}
      />
    );
  });

  return (
    <div className="section" id="workHistory">
      <div className="section-title">
        <h2 className="work-title">My Work History</h2>
      </div>
      <div className="container workHistory">{mappedExperience}</div>
    </div>
  );
};

export default WorkHistory;
