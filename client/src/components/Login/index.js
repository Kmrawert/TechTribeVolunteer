import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Form extends Component {
 constructor() {
   super()
   this.state = {
     username: "",
     password: "",
     redirectTo: null
   };
 }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });

    axios
    .post('/user/login', {
        username: this.state.username,
        password: this.state.password
    })
    .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
            this.props.updateUser({
                loggedIn: true,
                username: response.data.username
            })
            this.setState({
                redirectTo: '/Volunteer'
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
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Signup</button>
          <button onClick={this.handleFormSubmit}>Login</button>
        </form>
      );
    }
  }
}

export default Form;
