import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class ManageDog extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog
        }
    }

    render() {
        return (
            <div className = "manageDog">
                Manage Dog
                <div>
                    <Button className="editProfileButton"> Edit Profile </Button>
                </div>
                <div className ="switchText">
                    Is your dog in the office?
                    <Button className="yesButton">Yes</Button>
                    <Button className="noButton"> No</Button>
                </div>
            </div>
        );
    }
}

export default ManageDog;
