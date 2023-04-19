import React, { Component } from 'react';
import { Card,Image } from 'react-bootstrap';
import WeatherForecast from './Weather';

class CityCard extends Component {


  render() { 
    return (
      <Card>
      <Card.Header>
        <h2 className='fs-3'>{!this.props.letsExplore ? 'Adventure Awaits🗺️!' : this.props.cityName}</h2 >
      </Card.Header>
       {this.props.letsExplore && <>   
        <Card.Body>
          <p className='fs-5 '>Longitude: {this.props.longitude}</p>
          <p className='fs-5'>Latitude: {this.props.latitude}</p>
        <Image src={this.props.mapApi} fluid></Image>
        </Card.Body>
        {/* {this.props.hasWeather && <>
        
        </>} */}
          <div>{this.props.hasWeather ? <WeatherForecast forecastData={this.props.forecastData}/> : <h5 className='text-capitalize'>No weather info available for {this.props.city}</h5>}</div>
         
          </>}
      {this.props.error && <Card.Footer className='text-danger'>{this.props.errorMessage}</Card.Footer>}
    </Card>
    );
  }
}
 
export default CityCard;