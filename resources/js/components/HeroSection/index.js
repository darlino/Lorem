import React from 'react'
import {HeroContainer,HeroTextWrapper} from './HeroSectionElements'
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/bg1.svg'

export const HeroSection = (props) => {

    
    return (
        <HeroContainer img ={props.img}>
            <HeroTextWrapper>
                <h1 fontSize="60px"> {props.text} </h1>
            </HeroTextWrapper>
        </HeroContainer>
    )
}
