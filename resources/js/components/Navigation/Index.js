import React from 'react'
import {NavContainer,NavLogo,NavLogoLinks,NavWrapper,NavList,Links,BtnNav} from './NavbarElements'
import {Button} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {AiFillQuestionCircle} from 'react-icons/ai'
import logo from '../assets/s-logo.png'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BiSupport} from 'react-icons/bi'

export const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">
                <NavLogo src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text class="text-200">
                    <a href="https://support-gitsa.atlassian.net/servicedesk/customer/portal/1">
                        <Button  colorScheme="blue" color="white" fontSize={["10px","16px"]}  rightIcon={<ExternalLinkIcon marginBottom="3px"/>}><p> Soumettre une requête </p></Button>
                    </a>    
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
