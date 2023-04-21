import React, { Component } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Movie from './IndividualMovie';

class Movies extends Component {
  render() { 
    let movieElements = this.props.getMovies.map((movie)=>{
      let imgSrc=`https://image.tmdb.org/t/p/w500/${movie.imgUrl}`;
      let altText = `${movie.title} movie poster`
      return(
        <Movie title={movie.title} imgSrc={imgSrc} altText={altText} />
      )
    })

    return (
      <Container>
        <details className='m-2 text-start'>
          <summary className='fs-3'>Movies:</summary>
          <Row>
            <CardGroup>{movieElements}</CardGroup>
          </Row>
        </details>
    </Container>
    );
  }
}
 
export default Movies;