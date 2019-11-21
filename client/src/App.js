import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Volunteer from "./components/Volunteer";
import EventForm from "./components/EventForm";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import UserProfile from "../src/components/UserProfile";
import { ResultsList, ResultsListItem } from "./components/ResultsList";
import { Container, Row, Col } from "./components/Grid";
// import Details from "./components/Details";

class App extends Component {
  state = {
    volunteerEvents: [],
    eventInfo: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getAllEvents = () => {
    API.getEvents().then(res => this.setState({
      volunteerEvents: res.data
    })

    ).catch(() =>
      this.setState({
        volunteerEvents: []
      })
    )
  }

  handleEventDisplay = event => {
    event.preventDefault();
    this.getAllEvents();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveEvent(this.state.eventInfo)
      .then(res => {
        console.log(res.data.items)
        this.setState({ volunteerEvents: res.data.items })
      })
      .catch(err => console.log(err));

  };
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron >
            <Container>
              <Row>
                <Col size="md-12">
                  <form>
                    <Container>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="eventInfo"
                            value={this.state.eventInfo}
                            onChange={this.handleInputChange}
                            placeholder="Search by Zip Code for an Event"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type=""
                            className="input-lg">
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
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/EventForm" component={EventForm} />
                  <Route exact path="/Volunteer" component={Volunteer} />
                  <Route exact path="/UserProfile" component={UserProfile} />
                  {/* {/ <Route path="/" component={Login} /> */}
                </div>
                {/* <Details /> */}

                <ResultsList>
                  {this.state.volunteerEvents.map(volunteerEvent => {
                    return (
                      <ResultsListItem
                        key={volunteerEvent.id}
                        eventTitle={volunteerEvent.eventTitle}
                        eventDate={volunteerEvent.eventDate}
                      // description={volunteerEvent.description}
                      // eventTime={volunteerEvent.eventTime}
                      // organization={volunteerEvent.organization}
                      // experience={volunteerEvent.experience}
                      // zipcode={volunteerEvent.zipcode}
                      // volNum={volunteerEvent.volNum}
                      // link={volunteerEvent.link}
                      />
                    );
                  })}
                </ResultsList>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}
export default App;