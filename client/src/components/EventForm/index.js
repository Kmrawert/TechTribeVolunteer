import React from "react";
import "./style.css";
import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];


function EventForm() {
    return (
        console.log(formdata)
    )
}

export default EventForm;