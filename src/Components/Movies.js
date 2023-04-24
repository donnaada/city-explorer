import React, { Component } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends Component {
  render() { 
    let movieElements;
    
    if (this.props.getMovies) {
      movieElements = this.props.getMovies.map((movie)=>{
        return(
          <Movie key={movie.id} title={movie.title} imgSrc={movie.imgUrl} />
        )
      })
    }


    return (
      <Container>
        <details className='m-2 text-start'>
          <summary className='fs-3'>Movies </summary>
          <Row>
            <small>List last updated on {this.props.movielastUpdated}</small>
            <CardGroup>{movieElements}</CardGroup>
          </Row>
        </details>
    </Container>
    );
  }
}
 
export default Movies;