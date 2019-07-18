import React, { Component } from 'react';
import '../styles/app.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

class SearchFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogs: this.props.dogs,
            // dog: { name:"Bronco",	colors:["yellow", "brown"],	size:"small", breed:"shitzu", profile_picture:"www.google.com",	allergies:"None"},
            // breed: "shitzu"
            breeds:[]
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
            this.populateBreeds();
            // this.setState({ breed: res.data.data.breed})
            });
    };

    populateBreeds = () => {
        {this.props.dogs.map(breed => (
            <li key={breed}>{breed}</li>
        ))}
        // for (dog in dogs){
        //     console.log(dog); 
        // }
    }

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
        const { dogs } = this.state;
        console.log(dogs);
        const { breed } = this.state;
        console.log(breed);
        return (
            // <form>
                // <ul>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                            <div>
                                <div className='alignHorizontal'>
                                    <div className ='alignVertically'>Breed</div>
                                    <div>
                                        <form>
                                            <label htmlFor="">
                                                <input
                                                    type="checkbox"
                                                    // onChange={this.props.updateMovies}
                                                />
                                                {breed}
                                            </label>
                                        </form>
                                    </div>
                                <div className='alignHorizontal'>Size</div>
                                    <div>
                                        <form>
                                            <label htmlFor="">
                                                <input
                                                    type="checkbox"
                                                    // onChange={this.props.updateMovies}
                                                />
                                                {breed}
                                            </label>
                                        </form>
                                    </div>
                                <div className='alignHorizontal'>Color</div>
                                    <div>
                                        <form>
                                            <label htmlFor="">
                                                <input
                                                    type="checkbox"
                                                    // onChange={this.props.updateMovies}
                                                />
                                                {breed}
                                            </label>
                                        </form>
                                    </div>
                                </div>
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
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </DropdownButton>
                // </ul>
            // </form>
        );
    }
}

export default SearchFilters;
