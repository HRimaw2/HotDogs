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
            <Navbar className="bg-light justify-content-between" bg="light" variant="light">
                <Navbar.Brand href="#">HotDogs</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search For a Dog" className="mr-sm-2" />
                    <Button variant="outline-primary">Go</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#">My Dog</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
