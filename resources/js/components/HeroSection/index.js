import React from 'react'
import {HeroContainer,HeroTextWrapper} from './HeroSectionElements'
import {Text} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/bg1.svg'

export const HeroSection = (props) => {

    
    return (
        <HeroContainer img ={props.img}>
            <HeroTextWrapper>
                <Text fontSize="50px"> {props.text} </Text>
            </HeroTextWrapper>
        </HeroContainer>
    )
}
