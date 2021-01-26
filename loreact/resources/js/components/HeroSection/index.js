import React from 'react'
import {HeroContainer,HeroTextWrapper} from './HeroSectionElements'
import 'bootstrap/dist/css/bootstrap.min.css';

export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroTextWrapper>
                <h1> Nous sommes la pour vous aider </h1>
            </HeroTextWrapper>
        </HeroContainer>
    )
}
