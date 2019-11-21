import React from "react";
import "./style.css";
// import Map from "components/Map/map.jsx";
// import Map from "../Map/map";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function GridHeader({ }) {
  return (
  <Container>
    <Row>
      <Col size="xs-2 sm-2" />
      <Col size="xs-6 sm-6" >Event Title</Col>
      <Col size="xs-4 sm-4"> Date</Col>
    </Row>
  </Container>
   ) }
    
export function ResultsListItem({
      eventTitle,
      eventDate,
  // description,
  // eventTime,
  // organization,
  // experience,
  // zipcode,
  // volNum,
  // link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <GridHeader />
        <Row>
          <Col size="xs-2 sm-2" />
          <Col size="xs-6 sm-6">
            <p> {eventTitle} </p>
            {/* <p> Description: {description} </p> */}
            {/* <p> Time: {eventTime} </p>
            <p> Organization: {organization} </p>
            <p> Experience: {experience} </p>
            <p> Zip Code: {zipcode} </p>
            <p> Number of Volunteers Needed: {volNum} </p>
            <p> For Additional Information: {link} </p> */}
            {/* <a rel="noreferrer noopener" target="_blank" href={}>
              Details
            </a>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Volunteer! 
            </a> */}
          </Col>
          <Col size="xs-4 sm-4">
            <p> {eventDate} </p>
          </Col>
        </Row>
      </Container>
    </li>
    );
  }
