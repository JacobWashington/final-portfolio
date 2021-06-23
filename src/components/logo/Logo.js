import React from 'react';
import "./Logo.css"

const Logo = (props) => {
    return (
        <div className={`my-logo ${props.class}`}>
            <a href="/" className="logo-link">
                <p className="brand">j.Dev</p>
            </a>
        </div>
    );
}

export default Logo;
