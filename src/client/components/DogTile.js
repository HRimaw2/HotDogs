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
                        <h3 className="dogName">Astro</h3>
                        <Button className="loginbutton" size="lg"> Dog Status </Button>
                        <Button className="dogbutton" size="lg"> Dog Location </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DogTile;
