import { useState } from "react";
import { Link } from "react-router-dom";
import { send } from "@emailjs/browser";
import "./Contact.css";
import githubLogo from "../images/GitHub-Logo.png";
import linkedinLogo from "../images/LinkedIn-Logo.png";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    // EmailJS service
    send(
      "portfolio_contact_serv",
      "portfolio_contact_form",
      input,
      "RNjDbyUQJlsrDkJVv"
    )
    .then((response) => {
      console.log("Success!", response.status, response.text);
    })
    .catch((error) => {
      console.log("Failed...", error);
    });

    alert("Thanks for contacting me! I will get in touch with you shortly. 🙂");

    setInput({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="container-fluid page-container">
      <div className="row">
        {/* Heading */}
        <div className="page-heading col-2 text-end">
          <h1>Contact Me</h1>
        </div>

        {/* Form */}
        <div className="form-section col-5">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="input-name" className="form-label">Name</label>
              <input type="text" name="name" value={input.name} className="form-control" id="input-name" onChange={handleChange} required>
              </input>
            </div>

            <div className="mb-3">
              <label for="input-email" className="form-label">Email</label>
              <input type="email" name="email" value={input.email} className="form-control" id="input-email" onChange={handleChange} required>
              </input>
            </div>

            <div className="mb-3">
              <label for="textarea-message" className="form-label">Message</label>
              <textarea name="message" value={input.message} className="form-control" id="textarea-message" rows={7} onChange={handleChange} required></textarea>
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
              <Link to="mailto:mrbenjamincha@gmail.com" target="_blank">
                mrbenjamincha@gmail.com
              </Link>
            </li>
            
            <li className="links-list">
              <img className="logo" src={githubLogo} alt="GitHub Logo"></img>
              <Link to="https://github.com/bencha27" target="_blank">
                GitHub (bencha27)
              </Link>
            </li>

            <li className="links-list">
              <img className="logo" src={linkedinLogo} alt="LinkedIn Logo"></img>
              <Link to="https://www.linkedin.com/in/benjamin-cha/" target="_blank">
                LinkedIn
              </Link>
            </li>

            <li className="links-list">
              <span className="icon">📄 </span>
              <Link to="https://drive.google.com/file/d/1Y4SHBwy60f_RzMC3k5x1aQr8C9ua84Fe/view?usp=share_link" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}