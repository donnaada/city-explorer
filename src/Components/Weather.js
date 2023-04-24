import React, { Component } from 'react';
import { Container,  CardGroup } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class WeatherForecast extends Component {
  render() { 
    let weatherList;
    if (this.props.forecastData){
    weatherList = this.props.forecastData.map((dailyWeather)=>{
      return (
        <WeatherDay key={dailyWeather.date} date={dailyWeather.date} description={dailyWeather.description} />
      )
    })
  }

    return (
      <Container>
        <details className='m-2 text-start'>
          <summary className='fs-3'>Weather Forecast </summary>
          <small>Forecast last updated on {this.props.weatherLastUpdated}</small>
          <CardGroup className='d-flex flex-wrap flex-grow-1 justify-content-start p-3'>
            {weatherList}
          </CardGroup>
        </details>
      </Container>

    );
  }
}
 
export default WeatherForecast;
