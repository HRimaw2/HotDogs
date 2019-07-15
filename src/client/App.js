import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DogView from './components/DogView';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
      <NavBar />
      <DogView />

      </div>
    );
  }
}
