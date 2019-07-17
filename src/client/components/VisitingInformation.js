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

    setDogOut = () => {
        this.setState({isDogIn: false})
    }

    setDogIn = () => {
        this.setState({isDogIn: true})
    }



    render() {
        return (
            <div className = "visiting">
                Manage Dog
                <Button className="editProfileButton"> Edit Profile </Button>
                <div className ="switchText">
                    
                </div>
            </div>
        );
    }
}

export default VisitingInformation;