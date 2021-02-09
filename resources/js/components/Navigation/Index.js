import React from 'react'
import {NavContainer,NavLogo,NavLogoLinks,NavWrapper,NavList,Links} from './NavbarElements'
import logo from '../assets/s-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <NavLogo src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                
                    <Links href="https://git-sa.atlassian.net/servicedesk/customer/portals">
                        Requ&ecirc;te    
                    </Links>
                    
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
