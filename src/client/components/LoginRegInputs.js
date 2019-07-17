import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Row, Button, Col } from 'react-bootstrap';
import '../styles/app.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

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

            <div id="loginbox">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        Username: <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder='username'></input >
                    </Col>
                    <Col md={{ span: 6, offset: 3 }}>
                        Password: <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder='password'></input >
                    </Col>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button>{this.state.type}</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default LoginRegInputs;