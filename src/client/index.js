import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import { BrowserRouter, Route, } from "react-router-dom";
import CreateProfilePage from './pages/CreateProfilePage';
import LandingPage from './pages/LandingPage';
import LoginSignupPage from './pages/LoginSignupPage';
import ResultsPage from './pages/ResultsPage';
import ViewProfilePage from './pages/ViewProfilePage';

ReactDOM.render(
      <BrowserRouter>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/form" component={CreateProfilePage} />
        <Route path="/home" component={LandingPage} />
        <Route path="/login" component={LoginSignupPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/profile" component={ViewProfilePage} />
      </BrowserRouter> ,
    (document.getElementById('root'))
);