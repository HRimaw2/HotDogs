import React, { Component } from 'react';
import '../app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DogView extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button id="loginbutton" size="lg"> Employee Name </Button>
                        <Button id="dogbutton" size="lg"> Dog Name </Button>
                        <h1 id="mydog"> My Dog: Astro </h1>
                        <img id="dogprofileimage" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"></img>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DogView;
