import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import DogView from './components/DogView';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
      <NavigationBar />
      <DogView />

      </div>
    );
  }
}
