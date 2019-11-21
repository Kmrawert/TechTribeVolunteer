import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
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

  handleFormLogin = event => {
    event.preventDefault();
    console.log(
      `Username: ${this.state.username}\nPassword: ${this.state.password}`
    );
    this.setState({ username: "", password: "" });

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
// USE this to pass back to user!!
          });
          this.setState({
            redirectTo: "/UserProfile"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  handleFormSignUp(event) {
    event.preventDefault();
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            redirectTo: "/UserProfile"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <form>
          <input
            type="text"
            placeholder="Username - Email"
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
          <button onClick={this.handleFormSignUp.bind(this)}>Sign Up</button>
          <button onClick={this.handleFormLogin.bind(this)}>Log In</button>
        </form>
      );
    }
  }
}

export default Form;
