import "./About.css";
import alliantShield from "../images/Alliant-International-University-Shield.png";
import berkeleyShield from "../images/University-of-California-Berkeley-Shield.png";
import denverShield from "../images/University-of-Denver-Shield.png";

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
                <img
                  src={denverShield}
                  alt="University of Denver Shield"
                  width="20"
                  height="20"
                  style={{marginRight: 5}}
                ></img>
                Full Stack Coding Boot Camp • University of Denver
              </li>
              <li>
                <img
                  src={alliantShield}
                  alt="Alliant International University Shield"
                  width="20"
                  height="20"
                  style={{marginRight: 5}}
                ></img>
                M.A. Education • Alliant International University
              </li>
              <li>
                <img
                  src={berkeleyShield}
                  alt="University of California, Berkeley Shield"
                  width="20"
                  height="20"
                  style={{marginRight: 5}}
                ></img>
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
          <h4 className="skills-section-subheading">Front-End</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>AJAX</li>
            <li>Handlebars</li>
            <li>PWA</li>
            <li>Webpack</li>
            <li>React</li>
          </ul>
          <h4 className="skills-section-subheading">Back-End</h4>
          <ul>
            <li>Node</li>
            <li>Jest</li>
            <li>OOP (JS)</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>MERN</li>
          </ul>
        </div>
      </div>
    </div>
  )
}