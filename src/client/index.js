import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
import { BrowserRouter, Route, } from "react-router-dom";

ReactDOM.render(
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={ProfileForm} />
      </BrowserRouter> ,
    (document.getElementById('root'))
);