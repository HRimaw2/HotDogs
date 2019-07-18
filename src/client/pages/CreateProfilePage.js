import React, { Component } from 'react';
import ProfileForm from '../components/ProfileForm';
import '../styles/form.css';
import NavigationBar from '../components/NavigationBar';

class CreateProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <ProfileForm/>
      </div>
    );
  }
}

export default CreateProfilePage;