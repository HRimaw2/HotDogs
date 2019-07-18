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
            location: {floor:0},
            status: this.props.dog.is_in
        }
    }

    componentDidMount(){
        this.getDog();
        this.getOwnerInfo();
        this.getLocationInfo();
    }

    statusHandler = (val) => {
        this.setState({
            status: val
        })
    }

    dogStateTracker = (newDog) => {
        this.setState({
            dog: newDog
        })
    }

    getDog= () => {
        axios.get('api/dogs/'+this.state.dog._id, )
        .then((response) =>{
            this.setState({dog:response.data.data})
            this.setState({status:response.data.data.is_in})
        })
    }

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

    render() {
        return (
            <div className = "dogProfile">
                <Row>
                    <Col>
                        <img className="profilePic" src={this.state.dog.profile_picture} ></img>
                        <p className="dogName">{this.state.dog.name}</p>
                        <div className = "dogStatus">
                            {this.state.dog.status}
                        </div>                        
                        <p>My owner is: {this.state.owner.name}</p>
                        <p>Come visit me on floor {this.state.location.floor}</p>
                        <div className="attributes">
                            <Row>
                                <Col>
                                Age
                                <p>{this.state.dog.age}</p>
                                </Col>
                                <Col>
                                Breed
                                <p>{this.state.dog.breed}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                Size 
                                <p>{this.state.dog.size}</p>
                                </Col>
                                <Col>
                                Color
                                {this.state.dog.colors.map((color, index) => (
                                        <p>{color}</p>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <ManageDog handler={this.statusHandler} dogStateHandler={this.dogStateTracker} dog={this.state.dog} />
                        <div className="visitingAbout">
                            <VisitingInformation dogStateHandler={this.dogStateTracker} dog={this.state.dog} />
                            <AboutMe dog={this.state.dog}/>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
