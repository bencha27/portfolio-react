import "./About.css";
import alliantShield from "../images/Alliant-International-University-Shield.png";
import berkeleyShield from "../images/University-of-California-Berkeley-Shield.png";
import denverShield from "../images/University-of-Denver-Shield.png";
import htmlLogo from "../images/HTML5-Logo.png";
import cssLogo from "../images/CSS3-Logo.png";
import jsLogo from "../images/JavaScript-ES6-Logo.jpg";
import bootstrapLogo from "../images/Bootstrap-Logo.png";
import jqueryLogo from "../images/jQuery-Logo.png";
import handlebarsLogo from "../images/Handlebars-Logo.png";
import pwaLogo from "../images/PWA-Logo.png";
import webpackLogo from "../images/Webpack-Logo.png";
import reactLogo from "../images/React-Logo.png";
import nodeLogo from "../images/Node-Logo.png";
import jestLogo from "../images/Jest-Logo.png";
import oopLogo from "../images/OOP-Logo.png";
import expressLogo from "../images/Express-Logo.png";
import mysqlLogo from "../images/MySQL-Logo.png";
import mvcLogo from "../images/MVC-Logo.png";
import mongodbLogo from "../images/MongoDB-Logo.png";
import graphqlLogo from "../images/GraphQL-Logo.png";
import mernLogo from "../images/MERN-Stack-Logo.png";
import restapiLogo from "../images/REST-API-Logo.png";

export default function About() {
  return (
    <div className="container-fluid about-container">
      <div className="row">
        {/* Heading */}
        <div className="about-heading col-2 text-end">
          <h1>About</h1>
          <h1>Me</h1>
        </div>

        {/* Experience, Education, Miscellaneous */}
        <div className="about-section col-7">
          <h3 className="about-section-heading">Experience</h3>
            <ul className="experience-list">
              <li>
                💻 Completed 12-week intensive focused on full stack web development
              </li>
              <li>
                👨🏻‍🏫 Supported 100s of students as a science educator for 7 years
              </li>
              <li>
                🚀 Looking to launch my career as a software engineer
              </li>
            </ul>
          <h3 className="about-section-heading">Education</h3>
            <ul>
              <li>
                <img src={denverShield} alt="University of Denver Shield"></img>
                Full Stack Coding Boot Camp • University of Denver
              </li>
              <li>
                <img src={alliantShield} alt="Alliant International University Shield"></img>
                M.A. Education • Alliant International University
              </li>
              <li>
                <img src={berkeleyShield} alt="University of California, Berkeley Shield"></img>
                B.A. Political Economy • University of California, Berkeley
              </li>
            </ul>
          <h3 className="about-section-heading">Miscellaneous</h3>
            <ul>
              <li>
                ⭐️ Organization • Problem-solving • Detail • Professional • Collaborative
              </li>
              <li>
                📍 Seoul, Korea ➡️ Los Angeles ➡️ San Francisco Bay Area ➡️ Colorado
              </li>
              <li>
                💙 Family 👨‍👩‍👧‍👦 • Cooking 🍝 • Gardening 🪴 • Reading 📖
              </li>
            </ul>
        </div>

        {/* Skills */}
        <div className="skills-section col-3">
          <h3 className="skills-section-heading">Skills</h3>
          <h5 className="skills-section-subheading">Front-End</h5>
          <ul>
            <li><img src={htmlLogo} alt="HTML5 Logo"></img>HTML5</li>
            <li><img src={cssLogo} alt="CSS3 Logo"></img>CSS3</li>
            <li><img src={jsLogo} alt="JS ES6 Logo"></img>JavaScript ES6</li>
            <li><img src={jqueryLogo} alt="jQuery Logo"></img>jQuery</li>
            <li><img src={bootstrapLogo} alt="Bootstrap Logo"></img>Bootstrap</li>
            <li><img src={reactLogo} alt="React Logo"></img>React</li>
            <li><img src={webpackLogo} alt="Webpack Logo"></img>Webpack</li>
            <li><img src={handlebarsLogo} alt="Handlebars Logo"></img>Handlebars</li>
            <li><img src={pwaLogo} alt="PWA Logo"></img>Progressive Web Apps</li>
          </ul>
          <h5 className="skills-section-subheading">Back-End</h5>
          <ul>
            <li><img src={nodeLogo} alt="Node Logo"></img>Node</li>
            <li><img src={expressLogo} alt="Express Logo"></img>Express</li>
            <li><img src={restapiLogo} alt="REST API Logo"></img>REST API</li>
            <li><img src={mysqlLogo} alt="MySQL Logo"></img>MySQL</li>
            <li><img src={mongodbLogo} alt="MongoDB Logo"></img>MongoDB</li>
            <li><img src={graphqlLogo} alt="GraphQL Logo"></img>GraphQL</li>
            <li><img src={mernLogo} alt="MERN Logo"></img>MERN Stack</li>
            <li><img src={jestLogo} alt="Jest Logo"></img>Jest</li>
            <li><img src={oopLogo} alt="OOP Logo"></img>Object-Oriented Programming</li>
            <li><img src={mvcLogo} alt="MVC Logo"></img>Model-View-Controller Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  )
}