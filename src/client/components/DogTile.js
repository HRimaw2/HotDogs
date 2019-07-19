import React, { Component } from 'react';
import '../styles/app.css';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';


class DogTile extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog,
            location: ''
        }
    }

    componentDidMount(){
        console.log("first")
        this.getDogLocation();
        console.log("XDDDDDD")
    }

    getDogLocation = () => {
        axios.get('api/locations/'+this.state.dog.location_id, )
        .then((response) =>{
          console.log("nice")
            this.setState({location:response.data.data.description})
        })
    }

    render() {
        return (
            <div className = "dogTile">
                 <Row>
                    <Col className="dogProfileCol">
                        <img className="dogprofileimage" src="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg"></img>
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
        );
    }
}

export default DogTile;
