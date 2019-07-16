import React, { Component } from 'react';
import './styles/app.css';
import NavigationBar from './components/NavigationBar';
import DogView from './components/DogView';

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
