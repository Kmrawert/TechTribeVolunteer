import React, { Component } from "react";
import "./style.css";
import { ResultsList, ResultsListItem } from "../ResultsList";


class Home extends Component {
  render() {
    return (
      <div id="resultsDisplay">
        {/* // <div id="home">
      //   <table class="table">
      //     <thead class="thead-dark">
      //       <tr>
      //         <th scope="col"></th>
      //         <th scope="col">Event Title</th>
      //         <th scope="col">Event Date</th>
      //         <th scope="col"></th>
      //         <th scope="col"></th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <th scope="row">1</th>
      //         <td>Marathon Volunteers Needed</td>
      //         <td>01/14/2020</td>
      //         <td>Details</td>
      //         <td>Volunteer</td>
      //       </tr>
      //       <tr>
      //       <th scope="row">2</th>
      //         <td>Soup Kitchen Volunteers</td>
      //         <td>06/14/2020</td>
      //         <td>Details</td>
      //         <td>Volunteer</td>
      //       </tr>
      //       <tr>
      //       <th scope="row">3</th>
      //         <td>Donation Organizers Needed</td>
      //         <td>11/28/2020</td>
      //         <td>Details</td>
      //         <td>Volunteer</td>
      //       </tr>
      //     </tbody>
      //   </table> */}

        <ResultsList>
          <ResultsListItem />
        </ResultsList>
      </div>
    )
  }
}

export default Home;

