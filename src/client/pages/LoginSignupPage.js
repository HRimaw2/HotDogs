import React, { Component } from 'react';
import '../styles/form.css';
import dog from '../styles/logo.png';
import NavigationBar from '../components/NavigationBar';
import LoginRegInputs from '../components/LoginRegInputs';
import Image from 'react-bootstrap/Image'

class LoginSignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <div class="header"> <img className="title" src={dog}/> </div>
                <div class="loginDiv"> <LoginRegInputs type="Login"/> </div>
            </div>
        );
    }
}




export default LoginSignupPage;
