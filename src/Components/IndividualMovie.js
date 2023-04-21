import React, { Component } from 'react';
import { Card, Image, Col } from 'react-bootstrap';

class Movie extends Component {
  render() { 
    let imgSrc = `https://image.tmdb.org/t/p/w500/${this.props.imgSrc}`;
    let altText = `${this.props.title} movie poster`;
    
    return (
      <Col xs={6} md={3}>
        <Card>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Body>
            <Image src={imgSrc} alt={altText} fluid />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
 
export default Movie;