import React from 'react';
import "./SocialMediaIcon.css"

const SocialMediaIcon = (props) => {
    return (
        <div className="socialmedia-icon">
            <a href={props.site} target="_blank">
                <img src={props.logo} className="socialmedia-logo" />
            </a>
        </div>
    );
}

export default SocialMediaIcon;
