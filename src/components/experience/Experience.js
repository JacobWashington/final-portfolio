import { React, useState } from "react";
import "./Experience.css";
import { FaChevronDown } from "react-icons/fa";

const Experience = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  let bulletPoint = props.content.map((bulletPoint, index) => {
    return (
      <li className="li" key={index}>
        <p className="bullet-point">{bulletPoint}</p>
      </li>
    );
  });

  return (
    <div className={props.type === "edu" ? "experience-edu" : "experience-emp"}>
      {clicked ? (
        <div className="card back" onClick={handleClick}>
          <ul className="ul">{bulletPoint}</ul>
        </div>
      ) : (
        <div className="card" onClick={handleClick}>
          <div className="card-logo">
            <img src={props.logo} width="100%" />
          </div>
          <div className="card-headings">
            <p className="main">{props.main}</p>
            <p className="sub">{props.sub}</p>
          </div>
          <div className="arrow">
            <FaChevronDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
