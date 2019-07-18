import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';

class DogTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog
        }
    }

    toProfile = () => {
        history.push({pathname: '/profile', state: { detail: this.state.dog }})
    }
    render() {
        return (
            <Route render={({history}) => (
            <div className = "dogTile" onClick={() =>history.push({pathname: '/profile', state: { detail: this.state.dog }}) }>
                 <Row>
                    <Col className="dogProfileCol">
                        <img className="dogprofileimage" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"></img>
                    </Col>
                    <Col className="dogDesc">
                        <p className="dogName">{this.state.dog.name}</p>
                        <Button className="loginbutton" size="lg"> Dog Status </Button>
                        <Button className="dogbutton" size="lg"> Dog Location </Button>
                    </Col>
                </Row>
            </div>
            )}/>
        );
    }
}

export default DogTile;
