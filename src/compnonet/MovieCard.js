// MovieCard.js
import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    // this is a react-bootstrap card
    <a href={`/movies/${title}`}>
      <Card style={{ width: "100%", marginTop: "50px" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default MovieCard;
