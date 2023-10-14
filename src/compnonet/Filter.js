// Filter.js
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ onFilterTitle, onFilterRating }) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="titleFilter">
            <Form.Control
              type="text"
              placeholder="Filter by title"
              onChange={(e) => onFilterTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="ratingFilter">
            <Form.Control
              type="number"
              placeholder="Filter by rating"
              onChange={(e) => onFilterRating(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
