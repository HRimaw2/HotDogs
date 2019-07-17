import React, { Component } from 'react';
import '../styles/form.css'
import NavigationBar from '../components/NavigationBar';
import DogTile from '../components/DogTile';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogs:[]
        }
    }

    componentDidMount(){
        this.getDogs();
    }

    populateDogTiles = () => {
        console.log(this.state.dogs)
        return (<Row>
            {this.state.dogs.map((dog, index) => (
                <Col md={6}><DogTile dog = {dog} /> </Col>
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


    render() {
        console.log(this.state.dogs)
        return (
            <div>
                <NavigationBar />
                <div className="dogTileContainer">
                    <this.populateDogTiles></this.populateDogTiles>
                </div>
            </div>
        );
    }
}

export default LandingPage;