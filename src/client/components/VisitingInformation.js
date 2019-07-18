import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class VisitingInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            schedule: {available_times: []},
        }
    }

    componentDidMount(){
        this.getScheduleInfo();
    }

    getScheduleInfo= () => {
        axios.get('api/schedules/'+this.state.dog.schedule_id, )
        .then((response) =>{
            this.setState({schedule:response.data.data})
        })
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
                        {this.state.schedule.available_times.map((time, index) => (
                            <p>{time}</p>
                        ))}
                    </Col>
                    <Col>
                        <div>Owner Approved Activities</div>
                        <div>{this.state.dog.requests}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default VisitingInformation;