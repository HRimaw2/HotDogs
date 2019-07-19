import React, { Component } from 'react';
import '../styles/app.css';

class pageContainer extends Component {
  constructor(props){
      this.state = {
      }
  }

  render() {
      console.log(this.state.dogs)
      return (
        <div className = 'pageContainer'>
        </div>
      );
  }
}

export default pageContainer;
