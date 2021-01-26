import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from '../components/Navigation/Index'
import { HeroSection } from './HeroSection';
import { InputSection } from './InputSection';

function Example() {
    return (
        <Router>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <InputSection></InputSection>
        </Router>
        
       
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
