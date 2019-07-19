import React, { Component } from 'react';
import DogLogo from '../doglogo.png';
import '../styles/app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Nav } from 'react-bootstrap';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account : this.props.account
        }
    }

  render() {
    return (
      <Navbar id="navbar" className="justify-content-between" variant="light">
        {/* <Navbar.Brand href="/home"><img id="navbarimage" href="/" src={WhiteLogo} height="40px"/>
           
       </Navbar.Brand> */}
       <div>
        </div>
        <Nav>
          <Nav.Link href="/login">Register my dog / login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
