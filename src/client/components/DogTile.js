import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Route } from 'react-router-dom';

class DogTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            location: '',
            isLoggedIn: this.props.isLoggedIn
        }
    }

    componentDidMount(){
        this.getDogLocation();
    }

    componentWillReceiveProps(nextProps){
      this.setState({dog:nextProps.dog})
    }

    getDogLocation = () => {
        axios.get('api/location/'+this.state.dog.location_id, )
        .then((response) =>{
          this.setState({location:response.data.data.description})
        })
    }

    render() {
      return (
            <Route render={({history}) => (
            <div className = "dogTile" onClick={() =>history.push({pathname: '/profile', state: { detail: this.state.dog, isLoggedIn:this.state.isLoggedIn }}) }>
                 <Row>
                    <Col className="dogProfileCol">
                      <div className="imagecropper">
                      <img className="dogprofileimage" src={this.state.dog.profile_picture}></img>
                      </div>
                    </Col>
                    <Col className="dogDesc">
                        <h2 className="dogName">{this.state.dog.name}</h2>
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
                            <p>{this.state.location}</p>
                          </div>
                        </div>

                    </Col>
                </Row>
            </div>
            )}/>
        );
    }
}

export default DogTile;
