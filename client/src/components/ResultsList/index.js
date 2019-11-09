import React from "react";
import "./style.css";
// import Map from "components/Map/map.jsx";
import Map from "../Map/map";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ResultsListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  ingredients,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            {/* the following fields should match the event form list */}
            {/* <p> Posted Date: {posteddate}</p>
            <p> Event Date: {eventdate}</p>
            <p> Time: {eventtime} </p> 
            <p> Location: {zipcode} </p> */}
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Details
            </a>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Volunteer! 
            </a>
          </Col>
          <Col size="xs-2 sm-4">
            <Map> </Map>
          </Col>
        </Row>
      </Container>
    </li>
    
  );
}
