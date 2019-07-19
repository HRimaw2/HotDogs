import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import CreateProfilePage from './pages/CreateProfilePage';
import LandingPage from './pages/LandingPage';
import LoginSignupPage from './pages/LoginSignupPage';
import ResultsPage from './pages/ResultsPage';
import ViewProfilePage from './pages/ViewProfilePage';
import RegisterPage from './pages/RegisterPage';
import RegisterFormPage from './pages/RegisterFormPage';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route path="/form" component={CreateProfilePage}/>
    <Route exact path="/home" component={LandingPage}/>
    <Route path="/login" component={LoginSignupPage}/>
    <Route path="/results" component={ResultsPage}/>
    <Route path="/profile" component={ViewProfilePage}/>
    <Route path="/register" component={RegisterPage}/>
    <Route path="/registerform" component={RegisterFormPage}/>
  </BrowserRouter>,
  (document.getElementById('root'))
);