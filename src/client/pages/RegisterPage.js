import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/form.css';
import NavigationBar from '../components/NavigationBar';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <RegisterForm />
            </div>
        );
    }
}

export default RegisterPage;