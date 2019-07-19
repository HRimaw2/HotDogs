import React, { Component } from 'react';
import '../styles/form.css';
import dog from '../styles/logo.png';
import LoginRegInputs from '../components/LoginRegInputs';

class LoginSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type : "Login",
      login: true
    };
  }


  render() {
    return (
      <div>
        <div className="header"><img alt="title" className="title" src={dog}/></div>
        <div className="loginDiv"><LoginRegInputs login={this.state.login} type={this.state.type}/></div>
      </div>
    );
  }
}


export default LoginSignupPage;
