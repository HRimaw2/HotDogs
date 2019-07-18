import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';


class DogTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog
        }
    }

    render() {
        return (
            <div className = "dogTile">
                 <Row>
                    <Col className="dogProfileCol">
                        <img className="dogprofileimage" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"></img>
                    </Col>
                    <Col className="dogDesc">
                        <h2 className="dogName">{this.state.dog.name}</h2>


                        <div className = "cardInfoContainer">
                          <div className="statusBadge">
                            <p className="badgeText">I am in!</p>
                          </div>

                          <div className="locationContainer">
                            <p>Floor 8 - Desk 12</p>
                          </div>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default DogTile;
