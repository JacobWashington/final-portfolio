import React from "react";
import "./PortfolioProjects.css";
import PortfolioProject from "../../components/portfolioProject/PortfolioProject";
import portfolioProjectsData from "./portfolioProjectsData";

const PortfolioProjects = (props) => {
  let mappedProject = portfolioProjectsData.map((project, index) => {
    return (
      <PortfolioProject
        main={project.title}
        description={project.description}
        sub={project.techUsed}
        screenshot={project.screenshot}
        key={index}
      />
    );
  });

  return (
    <div className="section" id="portfolioProjects">
      <div className="section-title">
        <h2 className="pp-title">My Recent Work</h2>
      </div>
      <div className="section-heading">
        <p className="pp-heading">
          Here are a few projects I've worked on recently. Want to see more?{" "}
          <a href="mailto:jacobwashington.dev@gmail.com">Email me.</a>
        </p>
      </div>
      <div className="container pp">{mappedProject}</div>
    </div>
  );
};

export default PortfolioProjects;
