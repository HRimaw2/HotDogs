import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            isDogIn: false 
        }
    }

    render() {
        return (
            <div className = "aboutMe">
                <Row>
                    <Col>
                    <div>About Me</div>
                    </Col>
                    <Col>
                        <Button className="editProfileButton"> Edit </Button>
                    </Col>
                </Row>
                <Row className="schedRow">
                    <Row>
                    <Col>
                        <div>Personality</div>
                        <p>boopbopo spodpsopfdopodpf ksdjfbsdkj</p>
                    </Col>
                    </Row>
                    <Col>
                        <div>Likes</div>
                    </Col>
                    <Col>
                        <div>Dislikes</div>
                    </Col>
                </Row>
                <Row className="schedRow">
                    <Col>
                        <div>Favorite Treats</div>
                    </Col>
                    <Col>
                        <div>Allergies</div>
                    </Col>
                    <Row>
                        <Col>
                            <div>Fun Facts</div>
                            <p>boopbopo spodpsopfdopodpf ksdjfbsdkj</p>
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default AboutMe;