import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class VisitingInformation extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            schedule: {available_times: []},
            editing: false,
            times: [],
            activities: this.props.dog.requests
        }
    }

    editClick = () => {
        this.setState({editing: !this.state.editing})
    }

    componentDidMount(){
        this.getScheduleInfo();
    }

    getScheduleInfo= () => {
        axios.get('api/schedules/'+this.state.dog.schedule_id, )
        .then((response) =>{
            this.setState({schedule:response.data.data})
            this.setState({times:response.data.data.available_times})
        })
    }

    submitEdits = () => {
        
    }

    inputEditor(){
        console.log(this.state)
        let ret = <div></div>
        this.state.editing ?
        <input placeholder={this.state.dog.requests}></input> 
        :
        <div>{this.state.dog.requests}</div>
        return ret
    }


    render() {
        return (
            <div className = "visiting">
                <Row>
                    <Col>
                    <div>Visiting Information</div>
                    </Col>
                    <Col>
                        <Button onClick={this.editClick} className="editProfileButton"> Edit </Button>
                    </Col>
                </Row>
                <Row className="schedRow">
                    <Col>
                        <div>Schedule</div>
                        {
                            this.state.editing ?
                            <input value={this.state.schedule.available_times.map((time, index) => (
                                time
                            ))}>
                            </input> 
                            :
                            this.state.schedule.available_times.map((time, index) => (
                                <p>{time}</p>
                            ))                        }
                    </Col>
                    <Col>
                        <div>Owner Approved Activities</div>
                        {
                            this.state.editing ?
                            <input value={this.state.dog.requests}></input> 
                            :
                            <div>{this.state.dog.requests}</div>
                        }
                    </Col>
                </Row>
                {
                    this.state.editing ?
                    <Button onClick={this.submitEdits}>Submit</Button> 
                    :
                    <div></div>
                }
            </div>
        );
    }
}

export default VisitingInformation;