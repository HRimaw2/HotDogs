import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';


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
                    </Col>
                    <Col>
                        desc
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
