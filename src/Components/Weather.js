import React, { Component } from 'react';
import { Container,  CardGroup } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class WeatherForecast extends Component {
  render() { 
    let weatherList = this.props.forecastData.map((dailyWeather)=>{
      return (
        <WeatherDay date={dailyWeather.date} description={dailyWeather.description} />
      )
    })

    return (
      <Container>
        <details className='m-2 text-start'>
          <summary className='fs-3'>Weather Forecast:</summary>
          <CardGroup className='d-flex flex-wrap flex-grow-1 justify-content-around p-3'>
            {weatherList}
          </CardGroup>
        </details>
      </Container>

    );
  }
}
 
export default WeatherForecast;
