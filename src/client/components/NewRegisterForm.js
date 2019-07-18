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
            location: '',
            colors: [],
            size: 'small',
            breed: '',
            about: '',
            likes: '',
            dislikes: '',
            allergies: '',
            treats: '',
            personality: '',
            funfacts: '',
            instagram: '',
            availability: '',
            preferences: {
                inoffice: 'Yes',
            },
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
        const { email, username, password, name, pic, owner, floor,
            location, colors, size, breed, about, likes, dislikes,
            allergies, treats, personality,
            funfacts, instagram, availability, preferences, canSubmit } = this.state
        console.log(this.state)
    }

    handleDropdown = event => {
        const { name, value } = event.target

        this.setState({
            preferences: {
                [name]: value
            }
        })


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
                        <Form align="left" onSubmit={this.handleSubmit}>
                            <Step1
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                email={this.state.email}
                                password={this.state.password}
                            />
                            <Step2
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                name={this.state.name}
                                breed={this.state.breed}
                                colors={this.state.colors}
                                personality={this.state.personality}
                                allergies={this.state.allergies}
                                likes={this.state.likes}
                                dislikes={this.state.dislikes}
                                treats={this.state.treats}
                                funfacts={this.state.funfacts}
                                instagram={this.state.instagram}
                            />
                            <Step3
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                password={this.state.password}
                            />
                            <Step4
                                currentStep={this.state.currentStep}
                                handleDropdown={this.handleDropdown}
                                preferences={this.state.preferences}
                            />
                            {this.previousButton()}
                            {this.nextButton()}

                        </Form>
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
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={props.email} onChange={props.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={props.password} onChange={props.handleChange} type="password" placeholder="Password" />
                    </Form.Group>
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
                <Col >
                    <Form.Group controlId="formGroupDogName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={props.name} onChange={props.handleChange} type="text" placeholder="Dog Name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupBreed">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control name="breed" value={props.breed} onChange={props.handleChange} type="text" placeholder="Golden Retriever" />
                    </Form.Group>
                    <Form.Group controlId="formGroupColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control name="colors" value={props.colors} onChange={props.handleChange} type="text" placeholder="Brown" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPersonality">
                        <Form.Label>Personality</Form.Label>
                        <Form.Control name="personality" value={props.personality} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupAllergies">
                        <Form.Label>Allergies</Form.Label>
                        <Form.Control name="allergies" value={props.allergies} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupLikes">
                        <Form.Label>Likes</Form.Label>
                        <Form.Control name="likes" value={props.likes} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupDislikes">
                        <Form.Label>Dislikes</Form.Label>
                        <Form.Control name="dislikes" value={props.dislikes} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupTreats">
                        <Form.Label>Favorite Treats</Form.Label>
                        <Form.Control name="treats" value={props.treats} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupFunFacts">
                        <Form.Label>Fun Facts</Form.Label>
                        <Form.Control name="funfacts" value={props.funfacts} onChange={props.handleChange} as="textarea" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formGroupInstagram">
                        <Form.Label>Instagram Link</Form.Label>
                        <Form.Control name="instagram" value={props.instagram} onChange={props.handleChange} type="text" placeholder="" />
                    </Form.Group>
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
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridState">
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Pet my dog</Form.Label>
                            <Form.Control as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Walk my dog</Form.Label>
                            <Form.Control as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Play with my dog</Form.Label>
                            <Form.Control as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Dog sit my dog</Form.Label>
                            <Form.Control as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
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
            <Col >
                <Form.Row align="left">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Is your dog in the office today?</Form.Label>
                        <Form.Control name="inoffice" onChange={props.handleDropdown} value={props.preferences.inoffice} as="select">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row align="left">
                    <button className="btn btn-success" onClick={props.handleSubmit}>Sign up</button>
                </Form.Row>
            </Col>
        </Row>
    );
}


export default NewRegisterForm;