import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class DogStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: this.props.dog
        }
    }

    render() {
        return (
            <div className = "dogStatus">
                Dog Status
            </div>
        );
    }
}

export default DogStatus;
