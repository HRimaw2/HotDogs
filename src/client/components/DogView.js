import React, { Component } from 'react';
import '../styles/app.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DogView extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DogView;
