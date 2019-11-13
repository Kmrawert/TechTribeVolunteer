import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="title card text-center w-100 ">
        <div className="card-body">
          <h1>Sign up to Today! </h1>
          {props.children}

          
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;
