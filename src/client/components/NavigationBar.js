import React, { Component } from 'react';
import DogLogo from '../doglogo.png';
import '../styles/app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Nav} from 'react-bootstrap';

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Navbar id="navbar">
                    <img id="doglogo" align="left" src={DogLogo} alt="doglogo"></img>
                    <Button>Sign in</Button>
                    <Button>Sign Up</Button>
                    <Nav className="justify-content-end">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
