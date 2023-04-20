import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

class Movies extends Component {
  render() { 
    let movieElements;

    if(this.props.getMovies){

      movieElements = this.props.getMovies.map((movie)=>{
        let imgSrc=`https://image.tmdb.org/t/p/w500/${movie.imgUrl}`;
        let altText = `${movie.title} movie poster`

        return <Col xs={6} md={3}>
              <Image src={imgSrc} alt={altText} fluid />
              <p>Movie Title: {movie.title}</p>
            </Col> 
      })
    }
    return (
      <Container>
        <Row>
          {movieElements}
        </Row>
    </Container>
    );
  }
}
 
export default Movies;