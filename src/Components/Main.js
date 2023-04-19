import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import InputForm from './InputForm';
import CityCard from './Card';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      mapApi: '',
      letsExplore: false,
      weatherData:[],
      forecast:[],
      error: false,
      errorMessage: ''
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();
    try {
      let apiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY

      let api = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(api);

      let mapApi = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=10&size=250x250&format=png&markers=icon:small-blue-cutout|${cityData.data[0].lat},${cityData.data[0].lon}`
      
      let weatherAPI = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`

      let weatherData = await axios.get(weatherAPI)

      // this.getWeatherData();


      

      this.setState({
        cityData: cityData.data[0],
        cityName: cityData.data[0].display_name,
        letsExplore: true,
        mapApi: mapApi,
        error: false,
        forecastData: weatherData.data
      });


      // this.setState({
      //   weatherData: weatherData.data
      // })

      console.log(cityData.data[0].lon);
      console.log(cityData.data[0].lat);
      console.log(weatherData.data);


    } catch (error) {
      this.setState({
        cityData: [],
        city: '',
        mapApi: '',
        letsExplore: false,
        weatherData:[],
        forecastData:[],
        error: true,
        errorMessage: error.message
      });

    };
  }

  getWeatherData = async (e) => {
    e.preventDefault();
    try {
      // let weatherAPI = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.cityName}&lat=${this.state.lat}&lon=${this.state.lon}`

      let weatherAPI = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`

      let weatherData = await axios.get(weatherAPI)

      this.setState({
        forecast: weatherData.data
      })
      console.log(weatherData.data);

    } catch (error) {
      console.log(error.message)
    }

  }


  render() {
    return (
      <>
        <Container className='my-5'>
          <InputForm  onFormSubmit={this.getCityData} onCityInput={this.handleInput} />
          <CityCard 
            letsExplore={this.state.letsExplore} 
            cityName={this.state.cityName} 
            longitude={this.state.cityData.lon}
            latitude={this.state.cityData.lat}
            mapApi={this.state.mapApi}
            error={this.state.error}
            errorMessage={this.state.errorMessage}
            forecastData={this.state.forecastData}
          />
          {/* <WeatherForecast forecastData={this.state.forecastData} /> */}
        </Container >
      </>
    );
  }
}


export default Main;