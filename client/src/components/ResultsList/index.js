import React from "react";
import "./style.css";
// import Map from "components/Map/map.jsx";
// import Map from "../Map/map";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


function isoToLocaleDate(iso) {
  const date =  new Date(iso)
  return date.toLocaleDateString()
}


export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// export function GridHeader({ }) {
//   return (
//     <Container>
//       <Row>
//         <Col size="xs-2 sm-2" />
//         <Col size="xs-6 sm-6" >Event Title</Col>
//         <Col size="xs-4 sm-4"> Date</Col>
//         <Col size="xs-4 sm-4"> Organization</Col>
//       </Row>
//     </Container>
//   )
// }

export function ResultsListItem({ event }) {
  return (
    <li className="list-group-item">
      <Container>
        {/* <GridHeader /> */}
        <Row>
          {/* <Col size="xs-2 sm-2" /> */}
          <Col size="xs-4 sm-4">
            <p className="listWrap">Event Title: {event.title} </p>
            
          </Col>
          <Col size="xs-4 sm-4">
            <p className="listWrap">Event Description: {event.description} </p>
          </Col>
          <Col size="xs-4 sm-4">
            <p>Organization: {event.organization} </p>
            
          </Col>
        </Row>
        <Row>
          <Col size="xs-4 sm-4">
            <p>Experience: {event.experience}</p>
              
          </Col>
          <Col size="xs-4 sm-4">
            <p>Zipcode: {event.zipcode}</p>
            
          </Col>
          <Col size="xs-4 sm-4">
            <p>Spots: {event.numberofspots}</p>
             
          </Col>
        </Row>
        <Row>
          <Col size="xs-4 sm-4">
            <p>Link: {event.link}</p>
            
          </Col>
          <Col size="xs-4 sm-4">
            <p>Date: {isoToLocaleDate(event.eventdate)}
</p>
          </Col>
          <Col size="xs-4 sm-4">
            <p>Time: {event.eventtime}</p>
          </Col>
        </Row>
      </Container>
    </li>
    );
  }
