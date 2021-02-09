import React from 'react'
import { NavBar } from '../../Navigation/Index';
import { HeroSection } from '../../HeroSection/index';
import {Footer } from '../../Footer/Index'
import {LiyepTab,LimarketTab} from './Elements'
import bg from '../../assets/bg.png'
import bglimo from '../../assets/bglimo.png'
import bglimarket from '../../assets/bglimarket.png'
import bgsimbcoin from '../../assets/bgsimbcoin.png'
import { Divider,Stack } from "@chakra-ui/react"

export const Liyeplimall = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection img={bglimo}/>
            <LiyepTab/> 
            <Footer/>
        </div>
    )
}

export const LimarketComponent = () => {
    return(
        <div>
            <NavBar/>
            <HeroSection img={bglimarket}/>
            <LimarketTab/>
            <Footer/>
        </div>
    )
}

export const SimbcoinComponent = () => {
    return(
        <div>
            <NavBar/>
            <HeroSection img={bgsimbcoin}/>
            <LiyepTab/>
            <Footer/>
        </div>
        )
}