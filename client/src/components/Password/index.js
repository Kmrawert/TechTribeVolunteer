import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
 constructor() {
   super()
   this.state = {
     password: "",
     redirectTo: null
   };
 }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Password: ${this.state.password}`);
    this.setState({ password: "" });

    axios
    .post('/user/login', {
        password: this.state.password
    })
    .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
            // update App.js state
            this.props.updateUser({
                loggedIn: true,
                username: response.data.username
            })
            // update the state to redirect to home
            this.setState({
                redirectTo: '/'
            })
        }
    }).catch(error => {
        console.log('login error: ')
        console.log(error);
        
    })

  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
     } else {
      return (
        <form>
         
       
          
          <input
            type="password"
            placeholder="*******"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Change Password</button>
        </form>
      );
    }
  }
}

export default Form;
