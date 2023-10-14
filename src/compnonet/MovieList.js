// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = ({ movies }) => {
  return (
    //  this is use in displaying and listing the movie cards
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} xs={6} md={4} lg={3}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;


