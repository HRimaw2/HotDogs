import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DogStatus from './DogStatus';
import ManageDog from './ManageDog';
import VisitingInformation from './VisitingInformation';
import AboutMe from './AboutMe';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: this.props.dog,
      owner: { name: '' },
      location: { floor: 0 },
      status: this.props.dog.is_in
    };
  }

  componentDidMount() {
    this.getDog();
    this.getOwnerInfo();
    this.getLocationInfo();
  }

  statusHandler = (val) => {
    this.setState({
      status: val
    });
  };

  dogStateTracker = (newDog) => {
    this.setState({
      dog: newDog
    });
  };

  getDog = () => {
    axios.get('api/dogs/' + this.state.dog._id,)
      .then((response) => {
        this.setState({ dog: response.data.data });
        this.setState({ status: response.data.data.is_in });
      });
  };

  getOwnerInfo = () => {
    axios.get('api/owners/' + this.state.dog.owner_id,)
      .then((response) => {
        this.setState({ owner: response.data.data });
      });
  };

  getLocationInfo = () => {
    axios.get('api/location/' + this.state.dog.location_id,)
      .then((response) => {
        this.setState({ location: response.data.data });
      });
  };

  render() {
    return (
      <div class="pageContainer">
        <div className="dogProfile">
          <Row>
            <Col md={4}>
              <img className="profilePic" src={this.state.dog.profile_picture}></img>
              <h2>{this.state.dog.name}</h2>
              <div className = "cardInfoContainer">
                {
                  this.state.dog.is_in ?
                  <div className="statusBadgeIn">
                    <p className="badgeText">I am in!</p>
                  </div>
                  :
                  <div className="statusBadgeOut">
                    <p className="badgeText">I am out.</p>
                  </div>
                }
              
                <div className="locationContainer">
                  <p>My owner is: {this.state.owner.name}</p>
                </div>
                <div className="locationContainer">
                  <p>Come visit me on floor {this.state.location.floor}</p>
                </div>
              </div>
              <div className="attributes">
                <Row>
                  <Col>
                    <h5>Age</h5>
                    <p>{this.state.dog.age}</p>
                  </Col>
                  <Col>
                    <h5>Breed</h5>
                    <p>{this.state.dog.breed}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Size</h5>
                    <p>{this.state.dog.size}</p>
                  </Col>
                  <Col>
                    <h5>Color</h5>
                    {this.state.dog.colors.map((color, index) => (
                      <p>{color}</p>
                    ))}
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="contentContainer" md={8}>
              <ManageDog handler={this.statusHandler} dogStateHandler={this.dogStateTracker}
                        dog={this.state.dog}/>
              
              <div className="visitingAbout">
                <VisitingInformation dogStateHandler={this.dogStateTracker} dog={this.state.dog}/>
                <AboutMe dogStateHandler={this.dogStateTracker} dog={this.state.dog}/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
