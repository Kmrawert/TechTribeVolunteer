import React, { Component } from "react";
import axios from "axios";
// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }

class EventForm extends Component {
  constructor(props) {
    
    super(props);
    this.state = { 
      eventTitle: "",
      description: "",
      eventDate: "",
      eventTime: "",
      organization: "",
      experience: "",
      zipcode: "",
      volNum: "",
      link: ""
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value });

  }

  handleSubmit(event) {
    alert('fields submitted: ' + this.state.eventTitle);
    event.preventDefault();
    const userInput= {
      title: this.state.eventTitle, 
      description: this.state.description,
      eventdate: this.state.eventDate,
      eventtime: this.state.eventTime,
      organization: this.state.organization,
      experience: this.state.experience,
      zipcode: this.state.zipcode,
      numberofspots: this.state.volNum,
      link: this.state.link
    };

    axios.post("/api/events", { userInput })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Title:
                <input name="eventTitle" type="text" value={this.state.eventTitle} onChange={this.handleChange} />
          </label> <br />
          <label>
            Description:
                <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          </label> <br />
          <label>
            Event Date:
                <input name="eventDate" type="date" value={this.state.eventDate} onChange={this.handleChange} />
          </label> <br />
          <label>
            Event Time:
                <input name="eventTime" type="time" value={this.state.eventTime} onChange={this.handleChange} />
          </label> <br />
          <label>
            Organization:
                <input name="organization" type="text" value={this.state.organization} onChange={this.handleChange} />
          </label> <br />
          <label>
            Experience Needed or Required:
                <input name="experience" type="text" value={this.state.experience} onChange={this.handleChange} />
          </label> <br />
          <label>
            Zip Code:
                <input name="zipcode" type="text" value={this.state.zipcode} onChange={this.handleChange} />
          </label> <br />
          <label>
            Number of Volunteers Needed:
                <input name="volNum" type="text" value={this.state.volNum} onChange={this.handleChange} />
          </label> <br />
          <label>
            Link for more information:
                <input name="link" type="text" value={this.state.link} onChange={this.handleChange} />
          </label> <br />
          <input type="submit" value="Submit" style={{ float: "right", marginBottom: 10 }} />
        </form>
      </div>
    )
  }
}

export default EventForm; 
