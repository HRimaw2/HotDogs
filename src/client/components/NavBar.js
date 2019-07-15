import React, { Component } from 'react';
import DogLogo from '../doglogo.png';
import '../app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div id="navbar">
                <Row>
                    <Col>
                        <img id="doglogo" align="left" src={DogLogo} alt="doglogo"></img>
                        <Button id="loginbutton" size="lg"> Employee Name </Button>
                        <Button id="dogbutton" size="lg"> Dog Name </Button>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NavBar;
