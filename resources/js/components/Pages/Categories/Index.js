import React from 'react'
import { NavBar } from '../../Navigation/Index';
import { HeroSection } from '../../HeroSection/index';
import {Footer } from '../../Footer/Index'
import {LiyepTab,LimarketTab,SimbcoinTab} from './Elements'
import bg from '../../assets/ubg.svg'
import bglimo from '../../assets/bglimo.png'
import bglimarket from '../../assets/bglimarket.png'
import bgsimbcoin from '../../assets/bgsimbcoin.png'
import { Divider,Stack } from "@chakra-ui/react"

export const Liyeplimall = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection img={bg} text="Liyeplimal"/>
            <LiyepTab/> 
            
        </div>
    )
}

export const LimarketComponent = () => {
    return(
        <div>
            <NavBar/>
            <HeroSection img={bg} text="Limarket"/>
            <LimarketTab/>
            
        </div>
    )
}

export const SimbcoinComponent = () => {
    return(
        <div>
            <NavBar/>
            <HeroSection img={bg} text="Simbcoin"/>
            <SimbcoinTab/>
            
        </div>
        )
}