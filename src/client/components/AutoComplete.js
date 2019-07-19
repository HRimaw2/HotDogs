import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import Link from 'react-router-dom';


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
      console.log("sug name", suggestedNames)
      this.props.handleFilterNames(suggestedNames)
      return nameLength === 0 ? [] : suggestedNames;
    };

    getSuggestionValue = dog => dog.name;

    renderSuggestion = (dog) => {
      console.log("YEET")
      return(
          <div>
            {dog.name}
          </div>
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
      const { value, dogNames } = this.state;
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
