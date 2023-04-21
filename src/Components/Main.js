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
      hasWeather: false,
      forecastData:[],
      error: false,
      errorMessage: '',
      movieData: []
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
      
      this.setState({
        cityData: cityData.data[0],
        cityName: cityData.data[0].display_name,
        letsExplore: true,
        mapApi: mapApi,
        error: false,     
        // forecastData: weatherData.data
      });

      this.getWeatherData(cityData.data[0].lat,cityData.data[0].lon);
      this.getMovieData(this.state.city);

    } catch (error) {
      this.setState({
        cityData: [],
        city: '',
        mapApi: '',
        letsExplore: false,
        weatherData:[],
        forecastData:[],
        movieData:[],
        error: true,
        errorMessage: error.message
      });
    };
  }

  getWeatherData = async (lat, lon) => {
    try {
      let weatherAPI = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`;
      let weatherData = await axios.get(weatherAPI)

      this.setState({
        hasWeather: true,
        forecastData: weatherData.data
      })

    } catch (error) {
        console.log(error.message)

        this.setState({
          errorMessage: error.message,
          hasWeather: false,
        })
    }

  }

  getMovieData = async (city) =>{
    try {
      let movieAPI = `${process.env.REACT_APP_SERVER}/movies?city=${city}`;
      let movieData = await axios.get(movieAPI);
      console.log('>>>',movieData.data)

      this.setState({
        getMovies: movieData.data
      })


    } catch (error) {
      this.setState({
        errorMessage: error.message
      })
    }
  }


  render() {
    return (
      <>
        <Container className='my-5'>
          <InputForm  onFormSubmit={this.getCityData} onCityInput={this.handleInput} />
          <CityCard 
            letsExplore={this.state.letsExplore} 
            hasWeather={this.state.hasWeather} 
            cityName={this.state.cityName} 
            city={this.state.city} 
            longitude={this.state.cityData.lon}
            latitude={this.state.cityData.lat}
            mapApi={this.state.mapApi}
            error={this.state.error}
            errorMessage={this.state.errorMessage}
            forecastData={this.state.forecastData}
            getMovies={this.state.getMovies}
          />
        </Container >
      </>
    );
  }
}


export default Main;