import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class VisitingInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            isDogIn: false 
        }
    }

    render() {
        return (
            <div className = "visiting">
                <Row>
                    <Col>
                    <div>Visiting Information</div>
                    </Col>
                    <Col>
                        <Button className="editProfileButton"> Edit </Button>
                    </Col>
                </Row>
                <Row className="schedRow">
                    <Col>
                        <div>Schedule</div>
                    </Col>
                    <Col>
                        <div>Owner Approved Activities</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default VisitingInformation;