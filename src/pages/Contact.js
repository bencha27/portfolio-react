import { NavLink } from "react-router-dom";
import "./Contact.css";
import githubLogo from "../images/GitHub-Logo.png";
import linkedinLogo from "../images/LinkedIn-Logo.png";

export default function Contact() {
  return (
    <div className="container-fluid page-container">
      <div className="row">
        {/* Heading */}
        <div className="page-heading col-2 text-end">
          <h1>Contact</h1>
          <h1>Me</h1>
        </div>

        {/* Form */}
        <div className="form-section col-5">
          <h3>Contact Form</h3>
          <form>
            <div className="mb-3">
              <label for="input-name" className="form-label">Name</label>
              <input type="text" className="form-control" id="input-name" placeholder="">
              </input>
            </div>

            <div className="mb-3">
              <label for="input-email" className="form-label">Email</label>
              <input type="email" className="form-control" id="input-email">
              </input>
            </div>

            <div className="mb-3">
              <label for="textarea-message" className="form-label">Message</label>
              <textarea className="form-control" id="textarea-message" rows={7}></textarea>
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>
        </div>

        {/* Links */}
        <div className="links-section col-5">
          <h3>Links</h3>
          <ul>
            <li className="links-list">
              <span className="icon">✉️ </span>
              <NavLink to="mailto:mrbenjamincha@gmail.com" target="_blank">
                mrbenjamincha@gmail.com
              </NavLink>
            </li>
            
            <li className="links-list">
              <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
              <NavLink to="https://github.com/bencha27" target="_blank">
                GitHub (bencha27)
              </NavLink>
            </li>

            <li className="links-list">
              <img className="logo" src={linkedinLogo} alt="LinkedIn Logo"></img>
              <NavLink to="https://www.linkedin.com/in/benjamin-cha/" target="_blank">
                LinkedIn
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}