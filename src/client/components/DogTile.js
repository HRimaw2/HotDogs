import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';


class DogTile extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className = "dogTile">
                 <Row>
                    <Col className="dogProfileCol">
                        <img className="dogprofileimage" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"></img>
                    </Col>
                    <Col md={2} className="dogDesc">
                        <h3 id="mydog">Astro</h3>
                        <Button id="loginbutton" size="lg"> Dog Status </Button>
                        <Button id="dogbutton" size="lg"> Dog Name </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DogTile;
