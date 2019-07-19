import React, { Component } from 'react';
import '../styles/form.css';
import dog from '../styles/logo.png';
import LoginRegInputs from '../components/LoginRegInputs';

class LoginSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <div className="header"><img alt="title" className="title" src={dog}/></div>
        <div className="loginDiv"><LoginRegInputs type="Login"/></div>
      </div>
    );
  }
}


export default LoginSignupPage;
