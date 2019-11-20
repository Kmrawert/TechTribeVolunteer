import React from "react";
import "./style.css";
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div>
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/Home"> Community Connect </a>
      <div className="navButtons">
      <a className="navbar-brand" href="/Login"> Login </a>
      <a className="navbar-brand" href="/EventForm"> Create Event </a>
      <a className="navbar-brand" href="/Volunteer"> Volunteer </a>
      <a className="navbar-brand" href="/UserProfile"> UserProfile </a>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
