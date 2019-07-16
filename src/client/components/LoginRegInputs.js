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

    render() {
        return (
            <div className="spaced">
                <Row>Username: <input className="login-text"type="text" placeholder='username'></input ></Row>
                <Row>Password: <input className="login-text"type="password" placeholder='password'></input ></Row>
                <Button>Log in</Button>
            </div>
        );
    }
}
export default LoginRegInputs;