import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';


class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: '',
      dogs: [],
      dogNames: [],
    };
    this.onChange = this.onChange.bind(this);
    this.getDogs = this.getDogs.bind(this);
    this.onSuggestionClearRequested = this.onSuggestionClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  componentDidMount() {
    this.getDogs();
  }

    getSuggestions = (dogName) => {
      const inputName = dogName.trim().toLowerCase();
      const nameLength = inputName.length;
      const dogs = this.state.dogs;

      return nameLength === 0 ? [] : dogs.filter(dog => dog.name.toLowerCase().slice(0, nameLength) === inputName);
    };

    getSuggestionValue = dog => dog.name;

    renderSuggestion = dog => (
      <div>
        {dog.name}
      </div>
    );

    onChange = (event, { newName }) => {
      this.setState({ currentName: newName });
    };

    onSuggestionsFetchRequested = ({ name }) => {
      this.setState ({dogNames: this.getSuggestions(name) });
    };


    onSuggestionsClearRequested = () => {
      this.setState({ dogNames: [] });
    };


    getDogs = () => {
      axios.get('api/dogs',)
        .then((res) => {
          this.setState({ dogs: res.data.data });
        });
    };

    render() {
      const { currentName, dogNames } = this.state;
      const inputProps = {
        placeholder: "Enter a dog's name",
        currentName,
        onChange: this.onChange
      };

      return (
        <Autosuggest
          suggestions={dogNames}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

export default AutoComplete;
