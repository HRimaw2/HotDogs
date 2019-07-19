import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: this.props.dog,
      editing: false,
      personality: this.props.dog.about,
      likes: this.props.dog.likes,
      dislikes: this.props.dog.dislikes,
      treats: this.props.dog.treats,
      allergies: this.props.dog.allergies,
      facts: this.props.dog.fun_facts,
      isLoggedIn: this.props.isLoggedIn
    };

    this.editPersonality = this.editPersonality.bind(this);
    this.editLikes = this.editLikes.bind(this);
    this.editDislikes = this.editDislikes.bind(this);
    this.editTreats = this.editTreats.bind(this);
    this.editAllergies = this.editAllergies.bind(this);
    this.editFacts = this.editFacts.bind(this);
  }

  onEditClick = () => {
    this.setState({ editing: !this.state.editing });
  };

  editPersonality = (e) => {
    this.setState({ personality: e.target.value });
  };

  editLikes = (e) => {
    this.setState({ likes: e.target.value });
  };

  editDislikes = (e) => {
    this.setState({ dislikes: e.target.value });
  };

  editTreats = (e) => {
    this.setState({ treats: e.target.value });
  };

  editAllergies = (e) => {
    this.setState({ allergies: e.target.value });
  };

  editFacts = (e) => {
    this.setState({ facts: e.target.value });
  };

  submitEdits = () => {
    let newDog = this.state.dog;
    newDog.about = this.state.personality;
    newDog.likes = this.state.likes;
    newDog.dislikes = this.state.dislikes;
    newDog.treats = this.state.treats;
    newDog.allergies = this.state.allergies;
    newDog.fun_facts = this.state.facts;
    axios.put('api/dogs/' + this.state.dog._id, newDog)
      .then((res) => {
        this.setState({ dog: res.data.data });
        this.setState({ editing: false });
        this.setState({ personality: res.data.data.personality });
        this.setState({ likes: res.data.data.likes });
        this.setState({ dislikes: res.data.data.dislikes });
        this.setState({ treats: res.data.data.treats });
        this.setState({ allergies: res.data.data.allergies });
        this.setState({ facts: res.data.data.facts });
        this.props.dogStateHandler(res.data.data);
      });
  };


  render() {
    return (
      <div className="aboutMe">
        <Row>
          <Col>
            <h3>About Me</h3>
          </Col>
          <Col>
            {this.state.isLoggedIn && <Button onClick={this.onEditClick} className="editProfileButton"> Edit </Button>}
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col>
            <h5>Personality</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editPersonality(event)}
                  value={this.state.personality}>
                </input>
                :
                <p>{this.state.dog.about}</p>
            }
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Likes</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editLikes(event)}
                  value={this.state.likes}>
                </input>
                :
                <p>{this.state.dog.likes}</p>
            }
          </Col>
          <Col>
            <h5>Dislikes</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editDislikes(event)}
                  value={this.state.dislikes}>
                </input>
                :
                <p>{this.state.dog.dislikes}</p>
            }
          </Col>
        </Row>
        <Row className="schedRow">
          <Col>
            <h5>Favorite Treats</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editTreats(event)}
                  value={this.state.treats}>
                </input>
                :
                <p>{this.state.dog.treats}</p>
            }
          </Col>
          <Col>
            <h5>Allergies</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editAllergies(event)}
                  value={this.state.allergies}>
                </input>
                :
                <p>{this.state.dog.allergies}</p>
            }
          </Col>
        </Row>
        <Row className="schedRow">
          <Col>
            <h5>Fun Facts</h5>
            {
              this.state.editing ?
                <input
                  type="text"
                  onChange={(event) => this.editFacts(event)}
                  value={this.state.facts}>
                </input>
                :
                <p>{this.state.dog.fun_facts}</p>
            }
          </Col>
        </Row>
        
        {
          this.state.editing ?
            <Button onClick={this.submitEdits}>Submit</Button>
            :
            <div></div>
        }
      </div>
    );
  }
}

export default AboutMe;