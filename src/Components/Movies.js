import React, { Component } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends Component {
  render() { 
    let movieElements = this.props.getMovies.map((movie)=>{
      return(
        <Movie title={movie.title} imgSrc={movie.imgUrl} />
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