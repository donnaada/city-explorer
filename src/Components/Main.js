import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      lon: '',
      lat: '',
      letsExplore: false
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  /**
   * 
   * Region 1: US 
   * GET https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
   * 
   * Region 2: Europe 
   * GET https://eu1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
   * 
  */

  getCityData = async (e) => {
    e.preventDefault();
    try {
      let api = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(api);

      this.setState({
        cityData: cityData.data[0],
        lon: cityData.data[0].lon,
        lat: cityData.data[0].lat,
        cityName: cityData.data[0].display_name,
        letsExplore: true
      });

      console.log(cityData.data[0]);
      console.log(cityData.data[0].lon);

    } catch (error) {

    };
  }


  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.getCityData}>

            <InputGroup>
              <Form.Control type="text" placeholder="Where do you want to explore?" onInput={this.handleInput} />
              <Button onClick={this.getCityData}>Explore!</Button>
            </InputGroup>
          </Form>
        </Container>
        <Container>
          <Card>
            <Card.Header>
              <h2 className='fs-3'>{!this.state.letsExplore ? 'Adventure Awaits' : this.state.cityName}</h2 >
            </Card.Header>
            <Card.Body>
              <p className='fs-5'>Longitude: {this.state.lon}</p>
              <p className='fs-5'>Latitude: {this.state.lat}</p>
            </Card.Body>
          </Card>
        </Container >
      </>
    );
  }
}


export default Main;