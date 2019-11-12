import React, { Component } from "react";

import { Route } from 'react-router-dom'
import axios from 'axios'

import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ResultsList, ResultsListItem } from "./components/ResultsList";
import { Container, Row, Col } from "./components/Grid";

import { Router } from "react-router-dom"
import Home  from "./components/Home"
// import { Login } from "routes"
// import { Volunteer } from "routes"
// import { EventForm } from "routes"

class Main extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        console.log(res.data.items)
        this.setState({ recipes: res.data.items })})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        
        <Container>
          <Row>
            <Col size="md-12">
              <Login>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                     
                    </Col>
                    <Col size="xs-3 sm-2">
                    </Col>
                  </Row>
                </Container>
              </Login>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h4 className="text-center">No Volunteer Events to Display</h4>
              ) : (
                <ResultsList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <ResultsListItem
                        key={recipe.volumeInfo.title}
                        title={recipe.volumeInfo.title}
                        href={recipe.volumeInfo.previewLink}
                        ingredients={recipe.volumeInfo.description}
                        thumbnail={recipe.volumeInfo.imageLinks.thumbnail}
                      />
                    );
                  })}
                </ResultsList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


class Login extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  //issues with routes

  render() {
    return (
      <div className="App">
       {/* <Form
              updateUser={this.updateUser}
            /> */}
        {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        {/* <Route
          exact path="/"
          component={Home} /> */}
        {/* <Route
          path="/login"
          render={() =>
            <Form
              updateUser={this.updateUser}
            />}
        /> */}
        {/* <Route
          path="/signup"
          render={() =>
            <Signup />}
        /> */}

      </div>
    );
  }
}

function App() {
  return( 
  <div>
    {/* <Router>
    <div>
      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/eventform" component={EventForm} />
        <Route path="/volunteer" component={Volunteer} />
      </div>
  </Router> */} */}
    <Main />
    <LoginForm />
    </div>);
}

export default App;