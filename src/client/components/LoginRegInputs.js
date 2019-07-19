import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Row, Button, Col } from 'react-bootstrap';
import '../styles/app.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';



class LoginRegInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            email: "",
            password: ""

        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleEmailChange = (e) =>{
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
        //console.log("State of password:\n")
        //console.log(this.state)
    }


    handleClick = his => e => {
      console.log("State:\n")
      console.log(this.state.email)
      axios.get('api/login', {params: {
          username: this.state.email,
          password: this.state.password }})

      .then((response) => {
          //console.log(response.data)
                axios.get('api/dogs/'+response.data.data[0].dog_id)
                  .then((response2) => {
                    //console.log(response2.data.data)
                    his.push({pathname: '/profile', state: { detail: response2.data.data }})
                  })

          });
      // .catch(function (error) {
      //       console.log(error);
      // });
    }

    render() {
        return (
          <Route render={({history}) => (
            <div className="spaced">
                <Col className="user">Username: <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder='username'></input> </Col>
                <Col className="pass">Password: <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder='password'></input ></Col>
                <Row className="loginButton"><Button onClick={this.handleClick(history)}>{this.state.type}</Button></Row>
            </div>
            )}/>
        );
    }
}
export default LoginRegInputs;
