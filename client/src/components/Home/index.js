import React, { Component } from "react";
import * as axios from 'axios'
import "./style.css";
import { ResultsList, ResultsListItem } from "../ResultsList";


class Home extends Component {
  state = {
    events: []
  }


  componentDidMount() {

    let url = '/api/events'

    if (this.props.zipcode) {
      url += `?zipcode=${this.props.zipcode}`
    }
    axios.get(url)
      .then(res => {
        const events = res.data
        this.setState({ events })
        console.log(events)
      })
      .catch(err => {
        console.error(err)
      })

  }


  render() {
    return (
      <div id="resultsDisplay">
        <ResultsList>
          {/* // <div id="home"> */}
          {/* <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Event Title</th>
            <th scope="col">Description</th>
            <th scope="col">Organization</th>
            <th scope="col">Experience Needed</th>
            <th scope="col">Zip Code</th>
            <th scope="col">Number of Volunteer</th>
            <th scope="col">Link</th>
            <th scope="col">Posted Date</th>
            <th scope="col">Event Date</th>
            <th scope="col">Event Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>
            <td>{this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}</td>

          </tr>
   
          </tbody>
         </table> */}
          {/* {this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)} */}
          {!Array.isArray(this.state.events) || this.state.events.length === 0 ? <h1>no resultss</h1> : this.state.events && this.state.events.map(event => <ResultsListItem event={event} />)}
        </ResultsList>
      </div>
    )
  }
}

export default Home;

