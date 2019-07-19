import React, { Component } from 'react';
import { Row, Button, Col, Alert } from 'react-bootstrap';
import '../styles/app.css';
import { Link, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

class LoginRegInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          type: this.props.type,
          has_error: false,
          login: this.props.login

        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleEmailChange = (e) =>{
        this.setState({ has_error: false });
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({ has_error: false });
        this.setState({password: e.target.value})
        //console.log("State of password:\n")
        //console.log(this.state)
    }
    componentDidMount(){
      if (this.props.type==="login")
      this.setState({login:true})
    }

    onSubmit =()=> {

    }


    handleClick = his => e => {
      console.log("State:\n")
      console.log(this.state.email)
      axios.get('api/login', {params: {
          username: this.state.email,
          password: this.state.password }})

      .then((response) => {
                axios.get('api/dogs/'+response.data.data[0].dog_id)
                  .then((response2) => {

                    his.push({pathname: '/profile', state: { detail: response2.data.data }})
                  })

          });
      // .catch(function (error) {
      //       console.log(error);
      // });
    }


    handleClick = (history) => {
        const form = this.state;
        axios.get('api/login', {
            params: {
            username: this.state.email,
            password: this.state.password
            }
        })
        .then((response) => {
            //console.log(response.data.data[0].dog_id);
            axios.get('api/dogs/'+response.data.data[0].dog_id,)
                .then((response2) => {
                    console.log(response2.data)
                    history.push({pathname: '/profile', state: { detail: response2.data }})
                });
        })
        .catch((err) => {
            console.log(err);
            this.setState({ has_error: true });
        });
    }

    render() {
        return (
          <Route render={({history}) => (
            <div className="spaced">
                <Col className="user">Username: <input onChange={this.handleEmailChange} className="login-text"type="text" placeholder='username'></input> </Col>
                <Col className="pass">Password: <input onChange={this.handlePasswordChange} className="login-text"type="password" placeholder='password'></input ></Col>
                <Row className="loginButton"><Button onClick={this.handleClick.bind(this, history)}>{this.state.type}</Button></Row>
                <Row>
                <Link className="blue" to={{
                      pathname:'/registerform'
                    }} > First time? Register Instead
                </Link>
                </Row>
                <Row className="red">{this.state.has_error && <Alert variant='danger'>INVALID CREDENTIALS </Alert>}</Row>
            </div>
            )}/>
        );
    }
}

export default LoginRegInputs;
