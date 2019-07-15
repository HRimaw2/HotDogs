import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : this.props.type,
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
               LOGIN PAGE
            </div>
        );
    }
}

export default Login;