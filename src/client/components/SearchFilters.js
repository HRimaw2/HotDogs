import React, { Component } from 'react';
import '../styles/app.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

class SearchFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            dog: {	name:"Bronco",	colors:["yellow", "brown"],	size:"small", breed:"shitzu", profile_picture:"www.google.com",	allergies:"None"},
            breed: "shitzu"
        };
        this.getDogs = this.getDogs.bind(this);
    }

    componentDidMount() {
        this.getDogs();
    }

    getDogs = () => {
        axios.get('api/dogs',)
          .then((res) => {
            this.setState({ dog: res.data.data })
            this.setState({ breed: res.data.data.breed})
          });
    };

    getBreeds = (breedIds, breeds) => {

        return breedIds.map(breedId => {
            const filteredBreeds = breeds.find(breed => breed.id === breedId);
            if (breeds === undefined || breeds.length === 0) {
                return false;
            }
            return filteredBreeds.name;
        })
        
    };

    render() {
        const { dog } = this.state.dog;
        console.log(dog);
        // const { breed } = this.state.breed;
        // console.log(breed);
        return (
            // <form>
                <ul>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                    <form>
                        <ul>
                            <div className='alignHorizontal'>
                                <div>Breed</div>
                                
                                {/* {breed} */}
                                <div>Size</div>
                                <div>Color</div>
                            </div>
                            {/* {this.props.breed.map(({ id, name }) => (
                                <li key={id}>
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            name={id}
                                            // onChange={this.props.updateMovies}
                                        />
                                        { name }
                                    </label>
                                </li>
                            ))} */}
                        </ul>
                    </form>
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </DropdownButton>
                </ul>
            // </form>
        );
    }
}

export default SearchFilters;
