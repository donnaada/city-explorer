import React, { Component } from 'react';
import { Card,Image,Col } from 'react-bootstrap';
import WeatherForecast from './Weather';
import Movies from './Movies';

class CityCard extends Component {


  render() { 
    return (
      <Card>
      <Card.Header>
        <h2 className='fs-3'>{!this.props.letsExplore ? 'Adventure Awaits 🗺️!' : `Lets Explore the Beautiful 📍${this.props.cityName.split(',')[0]}` }</h2 >
      </Card.Header>
       {this.props.letsExplore && <>   
        <Card.Body className='row d-flex align-items-center'>
          <Col>
            <p className='fs-5 text-start'><em>{this.props.cityName}</em> is located at Longitude: <em>{this.props.longitude}</em> and Latitude: <em>{this.props.latitude}</em>. Below you will find weather information along with a list of movie posters from MovieDB that contains the <em>{this.props.cityName.split(',')[0]}</em> keyword.</p>
          </Col>
        <Col>
          <Image src={this.props.mapApi} fluid></Image>
        </Col>
        </Card.Body>
          <div>{this.props.hasWeather ? <WeatherForecast forecastData={this.props.forecastData}/> : <h5 className='text-capitalize'>Loading weather for {this.props.cityName.split(',')[0]}...</h5>}</div>

          <div>{this.props.hasWeather ? <Movies getMovies={this.props.getMovies}/> : <h5 className='text-capitalize'>Loading Movies for {this.props.cityName.split(',')[0]}...</h5>}</div>
          </>}
      {this.props.error && <Card.Footer className='text-danger'>{this.props.errorMessage}</Card.Footer>}
    </Card>
    );
  }
}
 
export default CityCard;