import React from "react";
import "./Contact.css";

import Logo from "../../components/logo/Logo";
import contactData from "./contactData";
import SocialMediaIcon from "../../components/socialMediaIcon/SocialMediaIcon";

const Contact = (props) => {
  let mappedContact = contactData.map((contact, index) => {
    return (
      <SocialMediaIcon site={contact.url} logo={contact.logo} key={index} />
    );
  });

  return (
    <div className="section" id="contact">
      <div className="container contact">
        <Logo class="footer-logo" />
        <div className="motto">
          <p className="footer">
            Learning, lifting others, and leveling up one day at a time.
          </p>
        </div>
        <div className="social-media">
            {mappedContact}
        </div>
        <div className="copyright">
            <p className="footer last">
                Handcrafted by me © jacobwashington
            </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
