import React from "react";
import "./style.css";
// import Map from "components/Map/map.jsx";
import Map from "../Map/map";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function ResultsListItem({
  eventTitle,
  description,
  eventDate,
  eventTime,
  organization,
  experience,
  zipcode,
  volNum,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
            <p> Title: {eventTitle} </p>
            <p> Description: {description} </p>
            <p> Date: {eventDate} </p>
            <p> Time: {eventTime} </p>
            <p> Organization: {organization} </p>
            <p> Experience: {experience} </p>
            <p> Zip Code: {zipcode} </p>
            <p> Number of Volunteers Needed: {volNum} </p>
            <p> For Additional Information: {link} </p>
            {/* <a rel="noreferrer noopener" target="_blank" href={}>
              Details
            </a>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Volunteer! 
            </a> */}
          </Col>
          <Col size="xs-2 sm-4">
            <Map> </Map>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
