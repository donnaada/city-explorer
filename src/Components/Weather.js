import React, { Component } from 'react';
import { Container, Card, CardGroup, Col } from 'react-bootstrap';

class WeatherForecast extends Component {
  render() { 

    let forecastElements;
    if (this.props.forecastData) {
      forecastElements = this.props.forecastData.map((forecast) => {
        // return <p key={forecast.date}>{forecast.date}: {forecast.description}</p>;
            return <Col xs={6} md={3}>
              <Card>
                <Card.Header><h4 className='fs-5'>{forecast.date}</h4></Card.Header>
                <Card.Body>
                  Looks like were expecting <span className='fst-italic fw-semibold d-block'>{forecast.description}!</span>
                </Card.Body>
              </Card>
            </Col>
      });
    }

    return (
      <Container className='my-2'>
        <h3>Weather Forecast:</h3>
        <CardGroup className='d-flex flex-wrap flex-grow-1 justify-content-around p-3'>
          {forecastElements}
        </CardGroup>
      </Container>
    );
  }
}
 
export default WeatherForecast;
