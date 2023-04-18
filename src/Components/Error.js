import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Error extends Component {
  render() { 
    return (
      <Alert variant='danger'>
        <Alert.Heading>Uh oh! Something went wrong!</Alert.Heading>
        <Alert.Body>
          <p>Error: {this.props.errorMsg}</p>
        </Alert.Body>
      </Alert>
    );
  }
}
 
export default Error;