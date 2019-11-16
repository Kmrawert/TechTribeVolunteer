import React from "react";
import "./style.css";
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/Home"> Community Connect </NavLink>
        <div className="navButtons">
          <NavLink className="navbar-brand" to="/Login"> Sign Up </NavLink>
          <NavLink className="navbar-brand" to="/Login"> Login </NavLink>
          <NavLink className="navbar-brand" to="/EventForm"> Create Event </NavLink>
          <NavLink className="navbar-brand" to="/Volunteer"> Volunteer </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
