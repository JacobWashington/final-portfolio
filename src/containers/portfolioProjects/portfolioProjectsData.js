import jargonScreenshot from "../../images/screenshots/jargon.PNG";
import express from "../../images/logos/express.svg";
import firebase from "../../images/logos/firebase.svg";
import heroku from "../../images/logos/heroku.svg";
import html from "../../images/logos/html5.svg";
import js from "../../images/logos/javascript.svg";
import mongoDB from "../../images/logos/mongodb-icon.svg";
import node from "../../images/logos/nodejs.svg";
import pg from "../../images/logos/postgresql.svg";
import react from "../../images/logos/react.svg";
import css from "../../images/logos/css.svg";
import jwt from "../../images/logos/jwt.svg";
import mongoose from "../../images/logos/mongoose.svg";
import passport from "../../images/logos/passport.svg";
import ejs from "../../images/logos/ejs.svg";
import axios from "../../images/logos/axios.svg";


const portfolioProjectsData = [
  {
    title: "My Portfolio",
    techUsed: [
      {
        tech: "React",
        logo: react,
      },
      {
        tech: "JavaScript",
        logo: js,
      },
      {
        tech: "HTML5",
        logo: html,
      },
      {
        tech: "CSS",
        logo: css,
      },
      {
        tech: "Firebase",
        logo: firebase,
      },
    ],
    link: "",
    github: {
      frontend: "",
      backend: "",
    },
    screenshot: "",
  },
  {
    title: "Swirv",
    techUsed: [
      {
        tech: "Express",
        logo: express,
      },
      {
        tech: "JWT",
        logo: jwt,
      },
      {
        tech: "React",
        logo: react,
      },
      {
        tech: "Passport",
        logo: passport,
      },
      {
        tech: "Mongoose",
        logo: mongoose,
      },
      {
        tech: "Axios",
        logo: axios,
      },
      {
          tech: "NodeJS",
          logo: node,
      }
    ],
    link: "https://swirv-application.herokuapp.com/",
    github: {
      frontend: "https://github.com/JacobWashington/swirv-frontend-application",
      backend: "https://github.com/JacobWashington/swirv-api",
    },
    screenshot: "",
  },
  {
    title: "Flak Attack",
    techUsed: [
      {
        tech: "HTML5",
        logo: html,
      },
      {
        tech: "JavaScript",
        logo: js,
      },
      {
        tech: "CSS",
        logo: css,
      },
    ],
    link: "https://jacobwashington.github.io/Flak-Attack-Game/",
    github: {
      frontend: "https://github.com/JacobWashington/Flak-Attack-Game",
      backend: "",
    },
    screenshot: "",
  },
  {
    title: "jargon",
    techUsed: [
      {
        tech: "JavaScript",
        logo: js,
      },
      {
        tech: "EJS",
        logo: ejs,
      },
      {
        tech: "HTML5",
        logo: html,
      },
      {
        tech: "CSS",
        logo: css,
      },
      {
        tech: "Axios",
        logo: axios,
      },
      {
        tech: "Express",
        logo: express,
      },
      {
        tech: "Passport",
        logo: passport,
      },
      {
        tech: "PostgreSQL",
        logo: pg,
      },
    ],
    link: "https://jargon-application.herokuapp.com/",
    github: {
      frontend: "https://github.com/JacobWashington/jargon",
      backend: "",
    },
    screenshot: jargonScreenshot,
  },
];

export default portfolioProjectsData;
