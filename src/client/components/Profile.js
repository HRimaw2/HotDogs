import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DogStatus from './DogStatus';
import ManageDog from './ManageDog';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog
        }
    }

    render() {
        return (
            <div className = "dogProfile">
                <Row>
                    <Col>
                        <img className="profilePic" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg" ></img>
                        `<p className="dogName">Dog Name</p>
                        <DogStatus />
                        <p>My owner is: Audrey Chang</p>
                        <p>Come visit me on floor 10</p>
                        <div className="attributes">
                            <Row>
                                <Col>
                                Age
                                </Col>
                                <Col>
                                Breed
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                Size
                                </Col>
                                <Col>
                                Color
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <ManageDog />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
