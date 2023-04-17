import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
          city:'',
          cityData:[]
        }
    }

    handleInput = (e) =>{
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
        let locationURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;

        let cityData = await axios.get(locationURL);
  
        this.setState({
          cityData: cityData.data[0],
        })

        console.log(cityData.data[0]);

      } catch (error) { 
        
      };


    }




    render() { 
        return (
            <>
            <Container>
              <Form onSubmit={this.getCityData}>
                <Form.Label>Enter a City:</Form.Label>
                <Form.Control type="text" placeholder="City Name" onInput={this.handleInput}/>
                <Button onClick={this.getCityData}>Explore!</Button>
              </Form>
            </Container>
            </>
        );
    }
}
 
export default Main;