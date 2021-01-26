import React from 'react'
import {NavContainer,NavLogo,NavLogoLinks} from './NavbarElements'
import logo from '../assets/s-logo.png'

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogoLinks to="/">
                <NavLogo src={logo} />
            </NavLogoLinks>
        </NavContainer>
    )
}
