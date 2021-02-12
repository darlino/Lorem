import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import bg from '../assets/bg1.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from '../Navigation/Index'
import { HeroSection } from '../HeroSection/index'
import { InputSection } from '../InputSection/index'
import {Footer} from '../Footer/Index'

function Main() {
    return (
        <>
        
            <NavBar></NavBar>
            <HeroSection img={bg} text="Que pouvons nous faire?"></HeroSection>
            <InputSection></InputSection>
            <Footer/>
      </>
        
       
    );
}

export default Main