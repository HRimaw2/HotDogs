import React, { Component } from 'react';
import WhiteLogo from '../assets/logo_white.png';
import '../styles/app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {},
      isLoggedIn: false
    };
  }

  componentDidMount(){
    if (this.props.dog){
      this.setState({dog:this.props.dog})
      this.setState({isLoggedIn:true})
    }
  }
  // <Nav.Link href="/login">Register my dog / Login</Nav.Link>

  render() {
    return (
      <Navbar id="navbar" className="justify-content-between" variant="light">
        <Navbar.Brand href="/"><img id="navbarimage" href="/" src={WhiteLogo}
                                        height="40px"/></Navbar.Brand>
        <Nav>

          {
            this.state.isLoggedIn ?
            <div></div>
            :
            <Link to={{
              pathname:'/login',
              state: { dog: this.state.dog }
            }} >
              <div className = "signInButton">
                Sign in
              </div>
            </Link>
          }
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
