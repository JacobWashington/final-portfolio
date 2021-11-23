import { useState } from "react";
import "./PortfolioProject.css";

const PortfolioProject = (props) => {

  let techArr = [];

  const mappedTech = props.sub.map((tech, index) => {
    techArr.push(tech.tech);
  });

  const onClickCard = () => {
    window.open(props.link, '_blank').focus();
  }

  return (
    <div className="project-card" onClick={onClickCard}>
    <h2>{props.main}</h2>
    <div>
      <p className="project-description">{props.description}</p>
    </div>
    <div className="tech-used">
      <p>Tech Used:</p>
      <p>{techArr.join(' | ')}</p>
    </div>
    </div>
  );
};

export default PortfolioProject;
