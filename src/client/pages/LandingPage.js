import React, { Component } from 'react';
import '../styles/form.css'
import NavigationBar from '../components/NavigationBar';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
            </div>
        );
    }
}

export default LandingPage;