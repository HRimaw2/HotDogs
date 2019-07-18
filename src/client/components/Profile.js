import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DogStatus from './DogStatus';
import ManageDog from './ManageDog';
import VisitingInformation from './VisitingInformation';
import AboutMe from './AboutMe';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            owner: {name:""},
            location: {floor:0}
        }
    }

    componentDidMount(){
        console.log(this.state.dog)
        this.getOwnerInfo();
        this.getLocationInfo();
        this.getScheduleInfo();
    }

    dogErrCheck = () => {}

    getOwnerInfo= () => {
        axios.get('api/owners/'+this.state.dog.owner_id, )
        .then((response) =>{
            this.setState({owner:response.data.data})
        })
    }

    getLocationInfo= () => {
        axios.get('api/location/'+this.state.dog.location_id, )
        .then((response) =>{
            this.setState({location:response.data.data})
        })
    }

    getScheduleInfo= () => {
        axios.get('api/schedules/'+this.state.dog.schedule_id, )
        .then((response) =>{
            this.setState({schedule:response.data.data})
        })
    }

    render() {
        return (
            <div className = "dogProfile">
                <Row>
                    <Col>
                        <img className="profilePic" src={this.state.dog.profile_picture} ></img>
                        `<p className="dogName">{this.state.dog.name}</p>
                        <DogStatus />
                        <p>My owner is: {}</p>
                        <p>Come visit me on floor 10</p>
                        <div className="attributes">
                            <Row>
                                <Col>
                                Age
                                </Col>
                                <Col>
                                Breed
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                Size
                                </Col>
                                <Col>
                                Color
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <ManageDog />
                        <div className="visitingAbout">
                            <VisitingInformation />
                            <AboutMe />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
