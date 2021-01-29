import React from 'react'
import {NavContainer,NavLogo,NavLogoLinks,NavWrapper,NavList,Links} from './NavbarElements'
import logo from '../assets/s-logo.png'

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogoLinks to="/">
                <NavLogo src={logo} />
            </NavLogoLinks>
            <NavWrapper>
                <NavList>
                    <Links href="https://git-sa.atlassian.net/servicedesk/customer/portals"> Request </Links>
                </NavList>
            </NavWrapper>
        </NavContainer>
    )
}
