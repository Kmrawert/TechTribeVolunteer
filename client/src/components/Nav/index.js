import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Community Connect 
      </a>
      <div className="navButtons">
      <a className="navbar-brand" href="/">
        Sign Up
      </a>
      <a className="navbar-brand" href="/">
        Login 
      </a>
      <a className="navbar-brand" href="/">
        Create Event
      </a>
      <a className="navbar-brand" href="/">
        Volunteer
      </a>
      </div>
    </nav>
  );
}

export default Nav;
