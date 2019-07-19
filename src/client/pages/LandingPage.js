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
      dogs: []
    };
  }

  componentDidMount() {
    this.getDogs();
  }

    populateDogTiles = () => {
        console.log(this.state.dogs)
        return (
            <Row  className="testClass">{this.state.dogs.map((dog, index) => (
                <Col className="override" md={6}><DogTile dog = {dog} /> </Col>
            )) }
            </Row>);
    }

    handleFilterNames = (suggestedNames) => {
        // let i = 0
        // let j = 0
        // let tempDogs = []
        // console.log("sugnames", suggestedNames)
        // for (j=0; j < this.state.dogs.length; j++){
        //     for (i =0; i < suggestedNames.length; i++){
        //         if (suggestedNames.includes(this.state.dogs[j])){
        //             tempDogs.push(this.state.dogs[j])
        //         }
        //     }
        // }
        console.log("suggested NAmes", suggestedNames)
        this.setState({dogs:suggestedNames}, () => {console.log("conslo", this.state.dogs)} )
    }

  getDogs = () => {
    axios.get('api/dogs',)
      .then((response) => {
        this.setState({ dogs: response.data.data });
        this.populateDogTiles();
      });
  };

    render() {
        console.log(this.state.dogs)
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
