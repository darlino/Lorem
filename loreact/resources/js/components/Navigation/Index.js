import React from 'react'
import {NavContainer,NavLogo,NavLogoLinks,NavWrapper,NavList,Links} from './NavbarElements'
import logo from '../assets/s-logo.png'
import {BsQuestionCircleFill} from 'react-icons/bs'

export const Navbar = () => {
    return (
        <NavContainer>
            <NavLogoLinks to="/">
                <NavLogo src={logo} />
            </NavLogoLinks>
            <NavWrapper>
                <NavList>
                
                    <Links href="https://git-sa.atlassian.net/servicedesk/customer/portals"><BsQuestionCircleFill style={{ marginRight:"10px" , marginTop:"8px"}}/> Soumettre une requete ?  </Links>
                    
                </NavList>
            </NavWrapper>
        </NavContainer>
    )
}
