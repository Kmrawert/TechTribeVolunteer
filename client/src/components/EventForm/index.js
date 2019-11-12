import React, { Component } from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

class EventForm extends Component {
    render() {
        return (
            <div> 
            <h1>Event Form!!!!!!!!!!!!!!!</h1>
            <Input />
            <TextArea />
            <FormBtn />
            </div>
        )
    } 
}

export default EventForm; 
