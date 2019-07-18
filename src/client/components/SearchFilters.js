import React, { Component } from 'react';
import '../styles/app.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class SearchFilters extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <form>
                <ul>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                    <form>
                        <ul>
                            <div className='alignHorizontal'>
                                <div>Breed</div>
                                <div>Size</div>
                                <div>Color</div>
                            </div>
                            {/* {this.props.genres.map(({ id, name }) => (
                                <li key={id}>
                                    <label htmlFor="">
                                        <input
                                            type="checkbox"
                                            name={id}
                                            onChange={this.props.updateMovies}
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
            </form>
        );
    }
}

export default SearchFilters;
