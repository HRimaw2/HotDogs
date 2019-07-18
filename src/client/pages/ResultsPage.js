import React, { Component } from 'react';
import '../styles/form.css';
import NavigationBar from '../components/NavigationBar';
import DogTile from '../components/DogTile';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <DogTile/>
      </div>
    );
  }
}

export default ResultsPage;