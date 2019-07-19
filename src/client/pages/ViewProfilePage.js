import React, { Component } from 'react';
import '../styles/form.css';
import NavigationBar from '../components/NavigationBar';
import Profile from '../components/Profile';
import { set } from 'mongoose';

class ViewProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginIn: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({isLogginIn:nextProps.isLogginIn})
  }



  render() {
    return (
      <div>
        <NavigationBar/>
        <Profile isLoggedIn={this.state.isLogginIn} dog={this.props.location.state.detail} />
      </div>
    );
  }
}

export default ViewProfilePage;