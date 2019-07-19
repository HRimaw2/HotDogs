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
            breeds:[],
            sizes:["Small", "Medium", "Large"],
            colors:[]
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
          console.log(breedsArr)
          this.setState({breeds: breedsArr})
    }

    populateColors = () => {
        let colorsArr = []
        this.state.dogs.map(function(dog, i){
            // let col = dog.colors
            if(!colorsArr.includes(dog.colors[0])){
                colorsArr.push(dog.colors[0])
            }
          })
          console.log(colorsArr)
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
        console.log(dogs);
        // const { breed } = this.state.breeds;
        console.log("lalalalal"+breeds);
        console.log(colors);
        return (
            // <form>
                // <ul>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                            <div>
                                <div className='alignHorizontal'>
                                    <div className ='alignVertically'>Breed</div>
                                    <div>
                                        {(breeds || []).map(item => (
                                            // <li key={item}>{item}</li>
                                            <form>
                                                <label htmlFor="">
                                                    <input
                                                        type="checkbox"
                                                        // onChange={this.props.updateMovies}
                                                    />
                                                    {item}
                                                </label>
                                            </form>
                                        ))}
                                    </div>
                                    <Dropdown.Divider />
                                    <div className='alignVertically'>Size</div>
                                    <div>
                                        {(sizes || []).map(item => (
                                                // <li key={item}>{item}</li>
                                                <form>
                                                    <label htmlFor="">
                                                        <input
                                                            type="checkbox"
                                                            // onChange={this.props.updateMovies}
                                                        />
                                                        {item}
                                                    </label>
                                                </form>
                                            ))}
                                    </div>
                                    <Dropdown.Divider />
                                    <div className='alignVertically'>Color</div>
                                    <div>
                                        {(colors || []).map(item => (
                                                // <li key={item}>{item}</li>
                                                <form>
                                                    <label htmlFor="">
                                                        <input
                                                            type="checkbox"
                                                            // onChange={this.props.updateMovies}
                                                        />
                                                        {item}
                                                    </label>
                                                </form>
                                            ))}
                                    </div>
                                </div>
                            </div>
                </DropdownButton>
        );
    }
}

export default SearchFilters;
