import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
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
                    <Row>
                    <Col>
                        <div>Personality</div>
                        <p>{this.state.dog.about}</p>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Likes</div>
                            <div>{this.state.dog.likes}</div>
                        </Col>
                        <Col>
                            <div>Dislikes</div>
                            <div>{this.state.dog.dislike}</div>
                        </Col>
                    </Row>
                <Row className="schedRow">
                    <Col>
                    <div>Favorite Treats</div>
                    <div>{this.state.dog.treats}</div>
                    </Col>
                    <Col>
                        <div>Allergies</div>
                        <div>{this.state.dog.allergies}</div>
                    </Col>
                    <Row>
                        <Col>
                            <div>Fun Facts</div>
                            <p>{this.state.dog.fun_facts}</p>
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default AboutMe;