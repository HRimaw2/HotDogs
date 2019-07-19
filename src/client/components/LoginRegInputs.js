import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import '../styles/app.css';

class LoginRegInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      type: this.props.type,
      login: this.props.login
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  componentDidMount(){
    if (this.props.type==="login")
    this.setState({login:true})
  }

  makeReg=()=>{
    this.setState({login:false})
    this.setState({type:"Register"})
  }

  onSubmit =()=> {
    
  }

  render() {
    return (
      <div className="spaced">
        <div>Login</div>
        <Col className="user">Username: <input onChange={this.handleEmailChange}
                                               className="login-text" type="text"
                                               placeholder='username'/> </Col>
        <Col className="pass">Password: <input onChange={this.handlePasswordChange}
                                               className="login-text" type="password"
                                               placeholder='password'/></Col>
        <Row className="loginButton">
          <Button>Login</Button>
        </Row>
        <Row>
            <Button onClick={this.makeReg} >Register Instead</Button> 
          </Row>
      </div>
    );
  }
}

export default LoginRegInputs;
