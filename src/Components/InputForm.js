import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

class InputForm extends Component {
  state = { city: '' } 
  render() { 
    return (
      <Form className='mb-5' onSubmit={this.props.onFormSubmit}>

      <InputGroup>
        <Form.Control type="text" placeholder="Where do you want to explore?" onInput={this.props.onCityInput} />
        <Button onClick={this.props.onFormSubmit}>Explore!</Button>
        {/* <Button onClick={this.getWeatherData}>weather!</Button> */}
      </InputGroup>
    </Form>
    );
  }
}
 
export default InputForm;