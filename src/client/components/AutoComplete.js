import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';


class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dogs: [],
      dogNames: [],
    };
    this.onChange = this.onChange.bind(this);
    this.getDogs = this.getDogs.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    //this.onSuggestionClearRequested = this.onSuggestionClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  componentDidMount() {
    this.getDogs();
  }

    getSuggestions = (dogName) => {
      let name = dogName.value.toString();
      const nameLength = name.length;
      const dogs = this.state.dogs;
      let suggestedNames = dogs.filter(dog => dog.name.toString().toLowerCase().slice(0, nameLength) === name);
      print(suggestedNames); 
      return nameLength === 0 ? [] : suggestedNames;
    };

    getSuggestionValue = dog => dog.name;

    renderSuggestion = (dog) => {
      return(
          <span>
            {dog.name}
          </span>
        );
      };

    onChange = (event, newName ) => {
      this.setState({ value: newName.newValue });
    };

    onSuggestionsFetchRequested = (name) => {
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
<<<<<<< HEAD
      const { value, dogNames } = this.state;
=======
      const { currentName, dogNames } = this.state;
>>>>>>> 74e44b4003de192d7dc53698fb5cedb254a3ad1e
      const inputProps = {
        placeholder: "Enter a dog's name",
        value,
        onChange: this.onChange
      };

      return (
        <Autosuggest
          suggestions={dogNames}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

export default AutoComplete;
