import React, { Component } from 'react';
import NewRegisterForm from '../components/NewRegisterForm';
import '../styles/form.css';
import NavigationBar from '../components/NavigationBar';

class RegisterFormPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <NewRegisterForm />
            </div>
        );
    }
}

export default RegisterFormPage;