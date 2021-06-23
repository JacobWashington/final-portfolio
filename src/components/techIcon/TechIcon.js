import React from 'react';
import "./TechIcon.css";

const TechIcon = (props) => {
    return (
        <div className="tech-icon">
            <img src={props.tech.logo} className="tech-logo" />
        </div>
    );
}

export default TechIcon;
