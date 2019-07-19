import React, { Component } from 'react';
import '../styles/form.css';
import '../styles/app.css';
import NavigationBar from '../components/NavigationBar';
import DogTile from '../components/DogTile';
import SearchFilters from '../components/SearchFilters';
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

    componentDidMount(){
        this.getDogs();
    }

    populateDogTiles = () => {
        return (
            <Row  className="testClass">
            {this.state.dogs.map((dog, index) => (
                <Col className="override" md={6}><DogTile isLoggedIn={this.state.isLoggedIn} dog = {dog} /> </Col>
            )) }
            </Row>);
    }

    getDogs = () => {
        axios.get('api/dogs', )
        .then((response) =>{
            this.setState({dogs:response.data.data})
            this.populateDogTiles();
       })
    }

    updateDogs = (e) => {
        if (e.target.checked) {
            const currState = [...this.state.defaultData];
            const newState = currState.filter(dogs => dogs.breed.includes(parseInt(e.target.name)));
            this.setState(prevState => ({
                dogs: prevState.selectedDogs.length >= 1 && prevState.dogs.length <= prevState.defaultData.length ? [...newState, ...prevState.selectedDogs] : newState,
                selectedDogs:  [...newState, ...prevState.selectedDogs]
            }));
        } else {
            if(this.state.dogs.length === 1) {
                this.setState ({ dogs: this.state.defaultData, selectedDogs: [] });  
            } else {
                const currState = [...this.state.dogs];
                const newState = currState.filter(dogs => !(dogs.breed.includes(parseInt(e.target.name))));
                this.setState(prevState => ({ 
                    dogs:newState,
                    selectedDogs: []
                }));
            }
        }
    };
    handleFilterNames = (suggestedNames) => {
        this.setState({dogs:suggestedNames})
    }

  getDogs = () => {
    axios.get('api/dogs',)
      .then((response) => {
        this.setState({ dogs: response.data.data });
      });
  };

  componentWillReceiveProps(nextProps){

  }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="centered">
                <AutoComplete handleFilterNames={this.handleFilterNames} />
                </div>
                <SearchFilters
                    // dogs = {this.state.dogs}
                    // updateDogs = {this.updateDogs}
                />
                  <div className="pageContainer">
                      <this.populateDogTiles></this.populateDogTiles>
                  </div>
            </div>
        );
    }
}

export default LandingPage;
