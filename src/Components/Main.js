import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: '',
      mapApi: '',
      letsExplore: false
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

      let mapApi = `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=12&size=500x500&format=png&markers=icon:small-blue-cutout|${cityData.data[0].lat},${cityData.data[0].lon}`


//<img src='https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=<latitude>,<longitude>&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>'>

      this.setState({
        cityData: cityData.data[0],
        cityName: cityData.data[0].display_name,
        letsExplore: true,
        mapApi: mapApi
      });
      console.log(this.state.map);
      // Longitude: -122.330062

      // Latitude: 47.6038321

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
              <p className='fs-5'>Longitude: {this.state.cityData.lon}</p>
              <p className='fs-5'>Latitude: {this.state.cityData.lat}</p>
            </Card.Body>
          </Card>
          <div>
            <Image src={this.state.mapApi}></Image>
          </div>
        </Container >
      </>
    );
  }
}


export default Main;