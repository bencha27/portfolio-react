import { NavLink } from "react-router-dom";
import "./Projects.css";
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
            <div className="col-5">
            </div>
            <div className="col-5">
              <h3><NavLink to="https://radiant-lowlands-09888.herokuapp.com/" target="_blank">Virtual Book Club</NavLink></h3>
              <ul className="project-description-list">
                <li>Social media app where users can post reviews and comments on books</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, Bootstrap, Node, Express, MongoDB, React, GraphQL, JWT, GitHub, Heroku</li>
                <li><NavLink to="https://github.com/bencha27/virtual-book-club" target="_blank"><img className="logo" src={githubLogo} alt="GitHub Logo"></img>GitHub repo link</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
            </div>
            <div className="col-5">
              <h3><NavLink to="https://guardian-guide-1222.herokuapp.com" target="_blank">Guardian Guide</NavLink></h3>
              <ul className="project-description-list">
                <li>Task management app for members of households to keep track of their tasks and events in one place</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, jQuery, Node, Express, MySQL, REST API, Handlebars, Materialize, GitHub, Heroku</li>
                <li><NavLink to="https://github.com/bencha27/Guardian-Guide" target="_blank"><img className="logo" src={githubLogo} alt="GitHub Logo"></img>GitHub repo link</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-5">
            </div>
            <div className="col-5">
              <h3><NavLink to="https://bencha27.github.io/prepUrself" target="_blank">prepUrself</NavLink></h3>
              <ul className="project-description-list">
                <li>Meal planning app to search recipes by criteria and save them to a weekly calendar</li>
                <li id="project-tech">🛠 HTML5, CSS3, JavaScript ES6, jQuery, Bootstrap, Google Fonts, GitHub</li>
                <li><NavLink to="https://github.com/bencha27/prepUrself" target="_blank"><img className="logo" src={githubLogo} alt="GitHub Logo"></img>GitHub repo link</NavLink></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}