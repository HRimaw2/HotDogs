import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Row, Button } from 'react-bootstrap';

class LoginRegInputs extends Component {
    constructor(props){
        super(props);
        this.state = {
            type : this.props.type,
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
                <Row>Username: <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder='username'></input ></Row>
                <Row>Password: <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder='password'></input ></Row>
                <Row><Button>{this.state.type}</Button></Row>
            </div>
        );
    }
}
export default LoginRegInputs;