import { useState } from "react";
import "./PortfolioProject.css";

const PortfolioProject = (props) => {
  const [clicked, setClicked] = useState(false);

  const mappedTech = props.sub.map((tech, index) => {
    return (
    <li className="tech-image" key={index}>
        <img src={tech.tech.logo} width="100%" />
    </li>
    )
  });
  return (
    <div className="project-card">
      {!clicked ? (
        <div className="project-headings">
          <p className="p-main">{props.main}</p>
          <ul className="p-sub">{mappedTech}</ul>
        </div>
      ) : (
        <div className="screenshot">
          <img src={props.screenshot} width="100%" />
        </div>
      )}
    </div>
  );
};

export default PortfolioProject;
