import React, { Component } from "react";
import Nav from "../Nav";
import "./style.css";


class Home extends Component {


  render() {
    return (
      <div id="home">
        {/* <h1>Home!!!!!!!!!!!!!!!</h1> */}
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Post Date</th>
              <th scope="col">Event Date</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Organization</th>
              <th scope="col">Experience</th>
              <th scope="col">Zip code</th>
              <th scope="col">Number of Spots</th>
              <th scope="col">Link</th>
              <th scope="col">Image</th>
              <th scope="col">Event Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map(result => {
              return (
                <tr>
                  <td>{result.postedate}</td>
                  <td>{result.eventdate}</td>
                  <td>{result.title}</td>
                  <td>{result.description}</td>
                  <td>{result.organization}</td>
                  <td>{result.experience}</td>
                  <td>{result.zipcode}</td>
                  <td>{result.numberofspots}</td>
                  <td>{result.link}</td>
                  <td>{result.image}</td>
                  <td>{result.eventtime}</td>
                </tr>

              )
            })

            }

          </tbody>
        </table>
      </div>
    )
  }

}

export default Home;

