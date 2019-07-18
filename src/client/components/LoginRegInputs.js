import React, { Component } from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom'
import { Row,Col, Button } from 'react-bootstrap';

=======
import { Route } from 'react-router-dom';
import { Row, Button, Col } from 'react-bootstrap';
import '../styles/app.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
>>>>>>> 871da39d712cd0004f552882acf84540637c162d

class LoginRegInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            email: "",
            password: ""
        }
    }

    handleEmailChange = (e) =>{
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <div className="spaced">
                <Col className="user">Username: <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder='username'></input> </Col>
                <Col className="pass">Password: <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder='password'></input ></Col>
                <Row className="loginButton"><Button>{this.state.type}</Button></Row>
            </div>
        );
    }
}
export default LoginRegInputs;
