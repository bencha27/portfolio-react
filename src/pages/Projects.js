import { Link } from "react-router-dom";
import "./Projects.css";
import basicCalculatorScreenshot from "../images/screenshot-basic-calculator.png";
import virtualBookClubScreenshot from "../images/Screenshot-Virtual-Book-Club.png";
import guardianGuideScreenshot from "../images/Screenshot-Guardian-Guide.png";
import prepUrselfScreenshot from "../images/Screenshot-prepUrself.png";
import githubLogo from "../images/GitHub-Logo.png";

export default function Projects() {
  return (
    <div className="container-fluid page-container">
      <div className="row">
        {/* Heading */}
        <div className="page-heading col-2 text-end">
          <h1>My Projects</h1>
        </div>

        {/* Projects */}
        <div className="projects-section col-10">
          <div className="row">
            <div className="col-6">
              <img
                className="project-screenshot"
                src={basicCalculatorScreenshot}
                alt="Screenshot of Basic Calculator app"
              ></img>
            </div>
            <div className="col-5">
              <h3>
                <Link to="https://bencha27.github.io/basic-calculator/" target="_blank">
                  Basic Calculator
                </Link>
              </h3>
              <ul className="project-description-list">
                <li>A simple four-function calculator with some helpful features</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, React</li>
                <li>
                  <Link to="https://github.com/bencha27/basic-calculator" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
                    GitHub repo link
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                className="project-screenshot"
                src={virtualBookClubScreenshot}
                alt="Screenshot of Virtual Book Club app"
              ></img>
            </div>
            <div className="col-5">
              <h3>
                <Link to="https://virtual-book-club.herokuapp.com/" target="_blank">
                  Virtual Book Club
                </Link>
              </h3>
              <ul className="project-description-list">
                <li>Social media app where users can post reviews and comments on books</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, Bootstrap, Node, Express, MongoDB, React, GraphQL, JWT, GitHub, Heroku</li>
                <li>
                  <Link to="https://github.com/bencha27/virtual-book-club" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
                    GitHub repo link
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                  className="project-screenshot"
                  src={guardianGuideScreenshot}
                  alt="Screenshot of Guardian Guide app"
                ></img>
            </div>
            <div className="col-5">
              <h3>
                <Link to="https://guardian-guide-1222.herokuapp.com" target="_blank">
                  Guardian Guide
                </Link>
              </h3>
              <ul className="project-description-list">
                <li>Task management app for members of households to keep track of their tasks and events in one place</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, jQuery, Node, Express, MySQL, REST API, Handlebars, Materialize, GitHub, Heroku</li>
                <li>
                  <Link to="https://github.com/bencha27/Guardian-Guide" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
                    GitHub repo link
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <img
                  className="project-screenshot"
                  src={prepUrselfScreenshot}
                  alt="Screenshot of prepUrself app"
                ></img>
            </div>
            <div className="col-5">
              <h3>
                <Link to="https://bencha27.github.io/prepUrself" target="_blank">
                  prepUrself
                </Link>
              </h3>
              <ul className="project-description-list">
                <li>Meal planning app to search recipes by criteria and save them to a weekly calendar</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, jQuery, Bootstrap, Google Fonts, GitHub</li>
                <li>
                  <Link to="https://github.com/bencha27/prepUrself" target="_blank">
                    <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
                    GitHub repo link
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}