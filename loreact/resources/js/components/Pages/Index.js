import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from '../Navigation/Index'
import { HeroSection } from '../HeroSection/index'
import { InputSection } from '../InputSection/index'

function Main() {
    return (
        <Router>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <InputSection></InputSection>
        </Router>
        
       
    );
}

export default Main