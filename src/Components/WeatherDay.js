import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

class WeatherDay extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <Col xs={6} md={3}>
          <Card>
            <Card.Header><h4 className='fs-5 text-center'>{this.props.date}</h4></Card.Header>
            <Card.Body>
              Looks like were expecting <span className='fst-italic fw-semibold d-block'>{this.props.description}!</span>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
 
export default WeatherDay;