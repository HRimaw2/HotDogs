import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import '../styles/app.css';
import { Link } from 'react-router-dom';

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
        <Link className="blue" to={{
              pathname:'/registerform'
            }} > First time? Register Instead
            </Link>
        </Row>
      </div>
    );
  }
}

export default LoginRegInputs;
