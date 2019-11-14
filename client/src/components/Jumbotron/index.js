import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="title card text-center w-100 ">
        <div className="card-body">
          <h1>Community Connect </h1>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;
