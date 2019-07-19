import React, { Component } from 'react';
import '../styles/app.css';

class DogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.type,
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default DogView;
