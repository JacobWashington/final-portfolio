import React from "react";
import "./Home.css";
import avatar from "../../images/Avatar-Maker.svg";
import coding from "../../images/freelance.svg";

const Home = (props) => {
  return (
    <div className="section" id="home">
      <div className="container home">
        <p className="home-title">Jacob Washington</p>
        <p className="home-subtitle">Full Stack Developer</p>
        <p className="home-heading">
          I create beautiful, simple applications from front to back.
        </p>
        <img className="avatar" src={avatar} alt="avatar" />
        <img className="coding" src={coding} alt="coding" />
      </div>
    </div>
  );
};

export default Home;
