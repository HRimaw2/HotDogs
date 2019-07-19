import React, { Component } from 'react';
import '../styles/app.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import axios from 'axios';

class SearchFilters extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogs: this.props.dogs,
            breeds:[],
            sizes:["Small", "Medium", "Large"],
            colors:[],
            selectedElement: []
        };
    }

    componentDidMount() {
        this.getDogs();
    }

    getDogs = () => {
        axios.get('api/dogs',)
          .then((res) => {
            this.setState({ dogs: res.data.data })
            this.populateBreeds()
            this.populateColors();
            });
    };

    populateBreeds = () => {
        let breedsArr = []
        this.state.dogs.map(function(dog, i){
            if(!breedsArr.includes(dog.breed)){
                breedsArr.push(dog.breed)
            }
          })
          this.setState({breeds: breedsArr})
    }

    populateColors = () => {
        let colorsArr = []
        this.state.dogs.map(function(dog, i){
            if(!colorsArr.includes(dog.colors[0])){
                colorsArr.push(dog.colors[0])
            }
          })
          this.setState({colors: colorsArr})
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
        const { dogs, breeds, sizes, colors} = this.state;
        return (
            <ButtonToolbar>
                {['Danger'].map(
                variant => (
                <DropdownButton id="dropdown-basic-button" title="Filter">
                    <div className = "dropdown">
                        <div className='row'>
                            <div className='column'>
                                <div className ='filterText'>Breed</div>
                                <div className='breeds'>
                                    {(breeds || []).map(item => (
                                        <form>
                                            <label htmlFor="">
                                                <input
                                                    type="checkbox"
                                                    onChange={this.props.updateDogs}
                                                />
                                                {item}
                                            </label>
                                        </form>
                                    ))}
                                </div>
                            </div>
                        <Dropdown.Divider />
                            <div className='column'>
                                <div className='filterText'>Size</div>
                                <div className='sizes'>
                                    {(sizes || []).map(item => (
                                            <form>
                                                <label htmlFor="">
                                                    <input
                                                        type="checkbox"
                                                        onChange={this.props.updateDogs}
                                                    />
                                                    {item}
                                                </label>
                                            </form>
                                        ))}
                                </div>
                            </div>
                        <Dropdown.Divider />
                            <div className='column'>
                                <div className='filterText'>Color</div>
                                <div className='colors'>
                                    {(colors || []).map(item => (
                                            <form>
                                                <label htmlFor="">
                                                    <input
                                                        type="checkbox"
                                                        onChange={this.props.updateDogs}
                                                    />
                                                    {item}
                                                </label>
                                            </form>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="applyButton">Apply Filter</div>
                    <div className="cancelButton">Cancel</div>
                    <div className="clearButton">Clear Button</div>
                    </div>
                </DropdownButton>
                  ),
                  )}
            </ButtonToolbar>
        );
    }
}

export default SearchFilters;
