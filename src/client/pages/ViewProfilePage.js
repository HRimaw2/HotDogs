import React, { Component } from 'react';
import '../styles/form.css'
import NavigationBar from '../components/NavigationBar';
import Profile from '../components/Profile'

class ViewProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <Profile />
            </div>
        );
    }
}

export default ViewProfilePage;