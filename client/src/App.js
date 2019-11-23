import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import EventForm from "./components/EventForm";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import UserProfile from "../src/components/UserProfile";
import { Container, Row, Col } from "./components/Grid";
// import Details from "./components/Details";

class App extends Component {
  state = {
    volunteerEvents: [],
    zipcode: 0,
    zipcodeString: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  };

  getAllEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          volunteerEvents: res.data
        })
      )
      .catch(() =>
        this.setState({
          volunteerEvents: []
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveEvent(this.state.eventInfo)
    this.setState({zipcode: Number(this.state.zipcodeString)})
    console.log('zipcode', this.state.zipcode)
  };

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron>
            <Container>
              <Row>
                <Col size="md-12">
                  <form>
                    <Container>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="zipcodeString"
                            value={this.state.zipcodeString}
                            onChange={this.handleInputChange}
                            placeholder="Search by Zip Code for an Event"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type=""
                            className="input-lg"
                          >
                            Search
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </form>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
          <Container>
            <Row>
              <Col size="xs-12">
                <div id='routes'>
                  <Route exact path="/" component={() => <Home zipcode={this.state.zipcode} />} />
                  <Route path="/login" render={() => <Login updateUser={this.updateUser} />} />
                  {/* <Route exact path="/Login" component={Login} /> */}
                  <Route exact path="/EventForm" component={EventForm} />
                  {/* <Route exact path="/UserProfile" component={UserProfile} /> */}
                  <Route
                    exact
                    path="/UserProfile"
                    render={() => (
                      <UserProfile
                        updateUser={this.updateUser}
                        loggedIn={this.state.loggedIn}
                        userInfo={this.userInfo}
                      />
                    )}
                    {...this.state.loggedIn && (
                      <div id="username"> testing</div>
                    )}
                  />

                  {/* component={UserProfile} /> */}

                  {/* <UserProfile
                    updateUser={this.updateUser}
                    loggedIn={this.state.loggedIn}
                  />
                  {this.state.loggedIn && (
                    <div id="molly"> {this.state.username}!</div>
                  )} */}

                  {/* {/ <Route path="/" component={Login} /> */}
                </div>

              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;
