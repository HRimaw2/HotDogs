import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import '../styles/form.css'

class ProfileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            pic: '',
            owner: '',
            floor: 0,
            colors: [],
            size: 'small',
            breed: '',
            about: '',
            likes: '',
            dislikes: '',
            allergies: '',
            canSubmit: false
        }
    }

    render() {
        return (
            <div className="spaced">
               <h1>Create Dog Profile</h1>
               <Form>
                <Form.Group as={Row} controlId="formHorizontal">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontal">
                    <Form.Label column sm={2}>
                    Profile Picture Link
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Link to Picture" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontal">
                    <Form.Label column sm={2}>
                    Owner
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Owner Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontal">
                    <Form.Label column sm={2}>
                    Floor
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="number" placeholder="Floor Number" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                    Colors
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check 
                            type="checkbox"
                            label="Brown"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Red"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Yellow"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Cream"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Black"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Gray"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="White"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Blue"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Spotted"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Striped"
                        />
                        <Form.Check 
                            type="checkbox"
                            label="Sable"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                    Size
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check 
                            type="radio"
                            label="Small"
                        />
                        <Form.Check 
                            type="radio"
                            label="Medium"
                        />
                        <Form.Check 
                            type="radio"
                            label="Large"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontal">
                    <Form.Label column sm={2}>
                    Breed
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Breed" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About Your Dog</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dislikes</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controlId="formHorizontal">
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 0 }}>
                    <Button type="submit">Submit Profile</Button>
                    </Col>
                </Form.Group>
                
                </Form>

            </div>
        );
    }
}

export default ProfileForm;