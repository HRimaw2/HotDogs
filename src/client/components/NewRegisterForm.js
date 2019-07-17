import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/form.css';

class NewRegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
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

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { email, username, password } = this.state
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3 ? 4 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    /*
    * the functions for our button
    */
    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary float-left"
                    type="button" onClick={this._prev} >
                    Previous
        </button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 4) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
        </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <p align="left">Register My Dog ({this.state.currentStep}/4) </p>
                

                <form onSubmit={this.handleSubmit}>

                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
                </Col>
                </Row>
            </React.Fragment>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="form-group">
            <Row>
                <Col >
                    <Form align="left">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={props.email}
                                onChange={props.handleChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="form-group">
            <Row>
                <Col value={props.username}
                    onChange={props.handleChange}>
                    <Form align="left">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Dog Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupBreed">
                            <Form.Label>Breed</Form.Label>
                            <Form.Control type="text" placeholder="Golden Retriever" />
                        </Form.Group>
                        <Form.Group controlId="formGroupColor">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Brown" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPersonality">
                            <Form.Label>Personality</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupAllergies">
                            <Form.Label>Allergies</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupLikes">
                            <Form.Label>Likes</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupDislikes">
                            <Form.Label>Dislikes</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupTreats">
                            <Form.Label>Favorite Treats</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupFunFacts">
                            <Form.Label>Fun Facts</Form.Label>
                            <Form.Control as="textarea" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="formGroupInstagram">
                            <Form.Label>Instagram Link</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div>

    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="form-group">
            <Row>
                <Col value={props.password}
                    onChange={props.handleChange}>
                    <Form.Row align="left">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Day(s) of the Week</Form.Label>
                            <Form.Control as="select">
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control as="select">
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 PM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:00 PM</option>
                                <option>4:00 PM</option>
                                <option>5:00 PM</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control as="select">
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 PM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:00 PM</option>
                                <option>4:00 PM</option>
                                <option>5:00 PM</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row align="left">
                        <Form.Group as={Col} controlId="formGridState">
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row align="left">
                        <Form.Group as={Col}>
                            <Form.Label as="legend" >
                                Pet my dog
                                </Form.Label>
                            <Form.Check type="radio" label="Yes" />
                            <Form.Check type="radio" label="No" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row align="left">
                        <Form.Group as={Col}>
                            <Form.Label as="legend" >
                                Play with my dog
                                </Form.Label>
                            <Form.Check type="radio" label="Yes" />
                            <Form.Check type="radio" label="No" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row align="left">
                        <Form.Group as={Col}>
                            <Form.Label as="legend" >
                                Walk my dog
                                </Form.Label>
                            <Form.Check type="radio" label="Yes" />
                            <Form.Check type="radio" label="No" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row align="left">
                        <Form.Group as={Col}>
                            <Form.Label as="legend" >
                                Dog sit my dog
                                </Form.Label>
                            <Form.Check type="radio" label="Yes" />
                            <Form.Check type="radio" label="No" />
                        </Form.Group>
                    </Form.Row>

                </Col>
            </Row>
        </div>


    );
}
function Step4(props) {
    if (props.currentStep !== 4) {
        return null
    }
    return (
        <Row>
            <Col onChange={props.handleChange}>
                <Form.Row align="left">
                    <Form.Group as={Col}>
                        <Form.Label as="legend" >
                            Is your dog in the office today?
                        </Form.Label>
                        <Form.Check type="radio" label="Yes" />
                        <Form.Check type="radio" label="No" />
                    </Form.Group>
                </Form.Row>
                <Form.Row align="left">
                    <button className="btn btn-success">Sign up</button>
                </Form.Row>
            </Col>
        </Row>
    );
}


export default NewRegisterForm;