import React, { Component } from 'react';
import '../styles/app.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.account
    };
  }

  render() {
    return (
      <Navbar className="bg-light justify-content-between" bg="light" variant="light">
        <Navbar.Brand href="/">HotDogs</Navbar.Brand>
        <Nav>
          <Nav.Link href="/login">Register my dog / login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
