import React, { Component } from 'react';
import '../styles/form.css'
import NavigationBar from '../components/NavigationBar';
import LoginRegInputs from '../components/LoginRegInputs';

class LoginSignupPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <LoginRegInputs />
            </div>
        );
    }
}

export default LoginSignupPage;