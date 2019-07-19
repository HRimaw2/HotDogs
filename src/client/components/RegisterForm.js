import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/form.css';

class RegisterForm extends Component {
  constructor(props) {
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
    };
  }

  render() {
    return (
      <div className="spaced">
        <Row>
          <Col md={{
            span: 6,
            offset: 3
          }}>
            <Form align="left">
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={{
            span: 6,
            offset: 3
          }}>
            <Form align="left">
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Dog Name"/>
              </Form.Group>
              <Form.Group controlId="formGroupBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control type="text" placeholder="Golden Retriever"/>
              </Form.Group>
              <Form.Group controlId="formGroupColor">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Brown"/>
              </Form.Group>
              <Form.Group controlId="formGroupPersonality">
                <Form.Label>Personality</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupAllergies">
                <Form.Label>Allergies</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupLikes">
                <Form.Label>Likes</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupDislikes">
                <Form.Label>Dislikes</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupTreats">
                <Form.Label>Favorite Treats</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupFunFacts">
                <Form.Label>Fun Facts</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Form.Group controlId="formGroupInstagram">
                <Form.Label>Instagram Link</Form.Label>
                <Form.Control type="text" placeholder=""/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col md={{
            span: 6,
            offset: 3
          }}>
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
                <Form.Label as="legend">
                  Pet my dog
                </Form.Label>
                <Form.Check type="radio" label="Yes"/>
                <Form.Check type="radio" label="No"/>
              </Form.Group>
            </Form.Row>
            <Form.Row align="left">
              <Form.Group as={Col}>
                <Form.Label as="legend">
                  Play with my dog
                </Form.Label>
                <Form.Check type="radio" label="Yes"/>
                <Form.Check type="radio" label="No"/>
              </Form.Group>
            </Form.Row>
            <Form.Row align="left">
              <Form.Group as={Col}>
                <Form.Label as="legend">
                  Walk my dog
                </Form.Label>
                <Form.Check type="radio" label="Yes"/>
                <Form.Check type="radio" label="No"/>
              </Form.Group>
            </Form.Row>
            <Form.Row align="left">
              <Form.Group as={Col}>
                <Form.Label as="legend">
                  Dog sit my dog
                </Form.Label>
                <Form.Check type="radio" label="Yes"/>
                <Form.Check type="radio" label="No"/>
              </Form.Group>
            </Form.Row>
            <Form.Row align="left">
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Form.Row>
          </Col>
        </Row>

        <Row>
          <Col md={{
            span: 6,
            offset: 3
          }}>
            <Form.Row align="left">
              <Form.Group as={Col}>
                <Form.Label as="legend">
                  Is your dog in the office today?
                </Form.Label>
                <Form.Check type="radio" label="Yes"/>
                <Form.Check type="radio" label="No"/>
              </Form.Group>
            </Form.Row>
            <Form.Row align="left">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Row>
          </Col>
        </Row>

      </div>
    );
  }
}

export default RegisterForm;