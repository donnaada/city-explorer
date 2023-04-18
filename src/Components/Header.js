import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';

class Header extends Component {
  render() { 
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          🗺️ City Explorer
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
 