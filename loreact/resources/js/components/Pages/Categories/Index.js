import React from 'react'
import { Navbar } from '../../Navigation/Index';
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
            <Navbar/>
            <HeroSection img={bglimo}/>
            <LiyepTab/> 
            <Footer/>
        </div>
    )
}

export const LimarketComponent = () => {
    return(
        <div>
            <Navbar/>
            <HeroSection img={bglimarket}/>
            <LimarketTab/>
            <Footer/>
        </div>
    )
}

export const SimbcoinComponent = () => {
    return(
        <div>
            <Navbar/>
            <HeroSection img={bgsimbcoin}/>
            <LiyepTab/>
            <Footer/>
        </div>
        )
}