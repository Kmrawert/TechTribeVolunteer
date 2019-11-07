import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

import Form from "./components/Login/Form";
// import Signup from './components/sign-up'
// import Navbar from './components/navbar'
// import Home from './components/home'

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
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
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
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.volumeInfo.title}
                        title={recipe.volumeInfo.title}
                        href={recipe.volumeInfo.previewLink}
                        ingredients={recipe.volumeInfo.description}
                        thumbnail={recipe.volumeInfo.imageLinks.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function App() {
  return( <div>
    <Main />
    <Form />
    </div>);
}

export default App;


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loggedIn: false,
//       username: null
//     }

//     this.getUser = this.getUser.bind(this)
//     this.componentDidMount = this.componentDidMount.bind(this)
//     this.updateUser = this.updateUser.bind(this)
//   }

//   componentDidMount() {
//     this.getUser()
//   }

//   updateUser(userObject) {
//     this.setState(userObject)
//   }

//   getUser() {
//     axios.get('/user/').then(response => {
//       console.log('Get user response: ')
//       console.log(response.data)
//       if (response.data.user) {
//         console.log('Get User: There is a user saved in the server session: ')

//         this.setState({
//           loggedIn: true,
//           username: response.data.user.username
//         })
//       } else {
//         console.log('Get user: no user');
//         this.setState({
//           loggedIn: false,
//           username: null
//         })
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">

//         <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
//         {/* greet user if logged in: */}
//         {this.state.loggedIn &&
//           <p>Join the party, {this.state.username}!</p>
//         }
//         {/* Routes to different components */}
//         <Route
//           exact path="/"
//           component={Home} />
//         <Route
//           path="/login"
//           render={() =>
//             <LoginForm
//               updateUser={this.updateUser}
//             />}
//         />
//         <Route
//           path="/signup"
//           render={() =>
//             <Signup />}
//         />

//       </div>
//     );
//   }
// }

// export default App;


