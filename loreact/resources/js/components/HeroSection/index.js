import React from 'react'
import {HeroContainer,HeroTextWrapper} from './HeroSectionElements'
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/bg.png'

export const HeroSection = (img1) => {

    {img1 = bg}
    return (
        <HeroContainer img ={img1}>
            <HeroTextWrapper>
                <h1> Nous sommes la pour vous aider </h1>
            </HeroTextWrapper>
        </HeroContainer>
    )
}
