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
    constructor(props){
        super(props);
        this.state = {
            dogs:[],
            selectedDogs: []
        }
    }

    componentDidMount(){
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
        return (
            <div>
                <NavigationBar />
                    dogs = {this.state.dogs}
                    updateDogs = {this.updateDogs}
                />
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
