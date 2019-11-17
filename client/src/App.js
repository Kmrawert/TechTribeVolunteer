
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Volunteer from "./components/Volunteer"
import EventForm from "./components/EventForm"
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import UserProfile from "../src/components/UserProfile"
import { ResultsList, ResultsListItem } from "./components/ResultsList";
import { Container, Row, Col } from "./components/Grid";
class App extends Component {
 state = {
  results: [
    {
      postedate: "10/11/19",
      eventdate: "11/20/19",
      title: "test",
      description: "work",
      organization: "chruch",
      experience: "school",
      zipcode: "60657",
      numberofspots: "10",
      link: "www.",
      image: "pic",
      eventtime: "14:00"

    },
    {
      postedate: "10/11/19",
      eventdate: "11/20/19",
      title: "test",
      description: "work",
      organization: "chruch",
      experience: "school",
      zipcode: "60657",
      numberofspots: "10",
      link: "wwww.",
      image: "pic",
      eventtime: "14:00"

    }

  ],
   eventSearch: ""
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
   API.getEvents(this.state.eventSearch)
     .then(res => {
       console.log(res.data)
      //  this.setState({ results: res.data.items })
      // commented out 
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
                           name="eventSearch"
                           value={this.state.eventSearch}
                           onChange={this.handleInputChange}
                           placeholder="Search Zipcode"
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
               <Route exact path="/" component={() => <Home events={this.state.results}/>} />
               <Route exact path="/Login" component={Login} />
               <Route exact path="/EventForm" component={EventForm} />
               <Route exact path="/Volunteer" component={Volunteer} />
               <Route exact path="/UserProfile" component={UserProfile} />
               {/* {/ <Route path="/" component={Login} /> */} 
             </div>
               {/* {!this.state.recipes.length ? (
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
                 )} */}

</Col>
           </Row>
         </Container>
       </div>
     </Router>
   );
 }
}
export default App;