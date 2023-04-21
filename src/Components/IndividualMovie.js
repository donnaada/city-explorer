import React, { Component } from 'react';
import { Card, Image, Col } from 'react-bootstrap';

class Movie extends Component {
  render() { 
    
    return (
      <Col xs={6} md={3}>
        <Card>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Body>
            <Image src={this.props.imgSrc} alt={this.props.altText} fluid />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
 
export default Movie;