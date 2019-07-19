import React, { Component } from 'react';
import '../styles/form.css';
import '../styles/app.css';
import NavigationBar from '../components/NavigationBar';
import DogTile from '../components/DogTile';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import AutoComplete from '../components/AutoComplete';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      isLoggedIn: false,
      myDog: {}
    };
  }

  componentDidMount() {
    this.getDogs();
  }

    populateDogTiles = () => {
        return (
            <Row  className="testClass">
            {this.state.dogs.map((dog, index) => (
                <Col className="override" md={6}><DogTile dog = {dog} /> </Col>
            )) }
            </Row>);
    }

    handleFilterNames = (suggestedNames) => {
        this.setState({dogs:suggestedNames})
    }

  getDogs = () => {
    axios.get('api/dogs',)
      .then((response) => {
        this.setState({ dogs: response.data.data });
      });
  };

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="centered">
                <AutoComplete handleFilterNames={this.handleFilterNames} />
                </div>
                  <div className="pageContainer">
                      <this.populateDogTiles></this.populateDogTiles>
                  </div>
            </div>
        );
    }
}

export default LandingPage;
