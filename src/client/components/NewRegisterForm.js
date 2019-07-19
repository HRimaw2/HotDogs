import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import '../styles/app.css'
import axios from 'axios';

class NewRegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      age: '',
      owner_name: '',
      email: '',
      username: '',
      password: '',
      name: '',
      profile_picture: '', 
      floor: 3,
      location: '',
      colors: '',
      size: '',
      breed: '',
      likes: '',
      dislikes: '',
      allergies: '',
      treats: '',
      about: '', 
      fun_facts: '', 
      instagram: '',
      availability: [],
      preferences: { 
        inoffice: 'Yes', 
        dogsit: 'Yes',
        play: 'Yes',
        walk: 'Yes',
        pet: 'Yes'
      },
      day: 'Monday',
      start: '9:00 AM',
      end: '5:00 PM',
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
    const {  age, username, password, owner_name, name, profile_picture, floor,
      location, size, breed, about, likes, dislikes,
      allergies, treats, 
      fun_facts, instagram, availability, preferences, canSubmit } = this.state

    let colors = [this.state.colors];
    let status = preferences.inoffice === 'Yes' ? ['I am in!'] : ['I am out.'];
    let pictures = [profile_picture];
    let requests = '';
    requests +=  preferences.pet === 'Yes' ? 'Pet my dog \n' : '';
    requests +=  preferences.walk === 'Yes' ? 'Walk my dog \n' : '';
    requests +=  preferences.play === 'Yes' ? 'Play with my dog \n' : '';
    requests +=  preferences.dogsit === 'Yes' ? 'Dogsit my dog ' : '';
    let is_in = preferences.inoffice === 'Yes' ? true : false;

    axios.post('/api/dogs', {
      name,
      colors,
      size,
      breed,
      about,
      likes,
      dislikes,
      status,
      profile_picture, 
      pictures,
      allergies,
      treats,
      requests,
      is_in,
      age,
      fun_facts

    })
      .then(function (response) {
        const locationid = response.data.data.location_id;
        const dog_id = response.data.data._id;
        axios.put('api/location/'+ locationid, {
            dog_id: dog_id,
            floor: floor,
            description: location,
            marked_floor_plan: ''
          }
        );
        const ownerid = response.data.data.owner_id;
        axios.put('api/owners/' + ownerid, {
          dog_id: dog_id, 
          name: owner_name, 
          user_name: username, 
          password: password, 
          skylight_link: ''
        });
        const scheduleid = response.data.data.schedule_id;
        axios.put('api/schedules/' + scheduleid, {
          dog_id: dog_id, 
          dnd_times: [], 
          available_times: availability
        });
        
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  handleDropdown = event => {
    const { name, value } = event.target
    this.state.preferences[name] = value;
    this.setState({
      preferences: this.state.preferences
    })
  }

  handleDateSubmit = event => {
    let date = this.state.day + " " + this.state.start + " to " + this.state.end
    this.state.availability.push(date)
    this.setState({
      availability: this.state.availability
    })


  }
  populateDates = () => {
    return (<Row><Col align="left">
      {this.state.availability.map((d, index) => (
        <p key={index}>{d}</p>
      ))}
    </Col></Row>);
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


  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary float-left whitebutton"
          type="button" onClick={this._prev} >
          Back
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
          className="btn btn-primary float-left bluebutton"
          type="button" onClick={this._next}>
          Next
                </button>
      )
    }
    if (currentStep == 4) {
      return (
        <button
          className="btn bluebutton float-left"
          type="button" onClick={this.handleSubmit} >
          <Link to={{pathname:'/home'}}>Submit</Link>
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col id="registerdogheader" md={{ span: 6, offset: 3 }}>
            <h3 align="left">Register My Dog ({this.state.currentStep}/4) </h3>
          </Col>
        </Row>
        <Row>
          <Col id="registerform" md={{ span: 6, offset: 3 }}>
            <Form align="left" onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                username={this.state.username}
                password={this.state.password}
                owner_name={this.state.owner_name}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                name={this.state.name}
                breed={this.state.breed}
                colors={this.state.colors}
                size={this.state.size}
                about={this.state.about}
                allergies={this.state.allergies}
                likes={this.state.likes}
                dislikes={this.state.dislikes}
                treats={this.state.treats}
                fun_facts={this.state.fun_facts}
                instagram={this.state.instagram}
                profile_picture={this.state.profile_picture}
                age={this.state.age}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleDropdown={this.handleDropdown}
                handleChange={this.handleChange}
                handleDateSubmit={this.handleDateSubmit}
                populateDates={this.populateDates}
                preferences={this.state.preferences}
                availability={this.state.availability}
                day={this.state.day}
                start={this.state.start}
                end={this.state.end}
                floor={this.state.floor}
                location={this.state.location}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleDropdown={this.handleDropdown}
                preferences={this.state.preferences}
              />
              {this.nextButton()}
              {this.previousButton()}


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
          <Form.Row align="left">
            <Form.Group as={Col}>
              <h4>Owner Details:</h4>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Your name</Form.Label>
            <Form.Control name="owner_name" value={props.owner_name} onChange={props.handleChange} type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" value={props.username} onChange={props.handleChange} type="text" placeholder="" />
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
          <Form.Row align="left">
            <Form.Group as={Col}>
              <h4>Dog Details:</h4>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGroupDogName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={props.name} onChange={props.handleChange} type="text" placeholder="Dog Name" />
          </Form.Group>
          <Form.Group controlId="formGroupAge">
            <Form.Label>Age</Form.Label>
            <Form.Control name="age" value={props.age} onChange={props.handleChange} type="number" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control name="breed" value={props.breed} onChange={props.handleChange} type="text" placeholder="Golden Retriever" />
          </Form.Group>
          <Form.Group controlId="formGroupColor">
            <Form.Label>Color</Form.Label>
            <Form.Control name="colors" value={props.colors} onChange={props.handleChange} type="text" placeholder="Brown" />
          </Form.Group>
          <Form.Group controlId="formGroupSize">
            <Form.Label>Size</Form.Label>
            <Form.Control name="size" value={props.size} onChange={props.handleChange} type="text" placeholder="Small, Medium, Large" />
          </Form.Group>
          <Form.Group controlId="formGroupPic">
            <Form.Label>Profile Picture Link</Form.Label>
            <Form.Control name="profile_picture" value={props.profile_picture} onChange={props.handleChange} type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupAbout">
            <Form.Label>About</Form.Label>
            <Form.Control name="about" value={props.about} onChange={props.handleChange} as="textarea" placeholder="" />
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
            <Form.Control name="fun_facts" value={props.fun_facts} onChange={props.handleChange} as="textarea" placeholder="" />
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
        <Col>
          <Form.Row align="left">
            <Form.Group as={Col}>
              <h4>Visiting Details:</h4>
            </Form.Group>
          </Form.Row>
          <Form.Row align="left">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Day(s) of the Week</Form.Label>
              <Form.Control name="day" onChange={props.handleChange} value={props.day} as="select">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Start Time</Form.Label>
              <Form.Control name="start" onChange={props.handleChange} value={props.start} as="select">
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>End Time</Form.Label>
              <Form.Control name="end" onChange={props.handleChange} value={props.end} as="select">
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Button className="bluebutton" onClick={props.handleDateSubmit} variant="primary">
                Add
              </Button>
            </Form.Group>
          </Form.Row>

          <props.populateDates></props.populateDates>


          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Floor</Form.Label>
              <Form.Control type="number" name="floor" onChange={props.handleChange} value={props.floor} as="select">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row >
            <Form.Group as={Col} controlId="formGroupLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control name="location" value={props.location} onChange={props.handleChange} type="text" placeholder="Desk 6-029" />
            </Form.Group>
          </Form.Row>

          <Form.Row align="left">
            <Form.Group as={Col}>
              <br></br><h4>I am looking for people to: </h4>
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Pet my dog</Form.Label>
              <Form.Control name="pet" onChange={props.handleDropdown} value={props.preferences.pet} as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Walk my dog</Form.Label>
              <Form.Control name="walk" onChange={props.handleDropdown} value={props.preferences.walk} as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Play with my dog</Form.Label>
              <Form.Control name="play" onChange={props.handleDropdown} value={props.preferences.play} as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Dog sit my dog</Form.Label>
              <Form.Control name="dogsit" onChange={props.handleDropdown} value={props.preferences.dogsit} as="select">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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

      </Col>
    </Row>
  );
}


export default NewRegisterForm;