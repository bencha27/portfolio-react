import { useState } from "react";
import { NavLink } from "react-router-dom";
import profilePhoto from "../Profile-Photo-Ben-Cha.jpg"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-md">
        <NavLink to="/" className="navbar-brand fw-semibold fs-2 me-0">
          <img
            src={profilePhoto}
            alt="Ben Cha Profile Photo"
            className="d-inline-block align-text-top me-2"
            width="40"
            height="40"
            style={{borderRadius: "50%"}}
          ></img>
          Ben Cha
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
          <div className="navbar-nav fs-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active mx-2" : "nav-link mx-2"}
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active mx-2" : "nav-link mx-2"}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active mx-2" : "nav-link mx-2"}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? "nav-link active mx-2" : "nav-link mx-2"}
            >
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}