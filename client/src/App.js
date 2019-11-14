import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
  import Home  from "./components/Home"
  import Login from "./components/Login"
  import Volunteer from "./components/Volunteer"
  import EventForm from "./components/EventForm"
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ResultsList, ResultsListItem } from "./components/ResultsList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
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
      <Router>
      <div>
    
          <Nav />
          <Jumbotron />
          <Container>
   
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/EventForm" component={EventForm} />
        <Route path="/Volunteer" component={Volunteer} />
        <Route path="*" component={Login} />
      </div>
 
            {/* <Col size="xs-12">
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
          </Row> */}
        </Container>
      </div>
      </Router> 
    );
  }
}
export default App;