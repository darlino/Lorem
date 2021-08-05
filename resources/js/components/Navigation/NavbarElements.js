import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const NavContainer =styled.nav`
    position:sticky;
    display:flex;
    width:100%;
    max-height:10vh;
    background-color:none;
    border-bottom:1px solid black;
    z-index:1;
    justify-content:space-between
`

export const NavLogoLinks = styled(Link)`
    width:auto;
    z-index: 2;
    justify-content:flex-start;
    padding:20px;
    margin-left:80px;

    @media (max-width: 768px){
        margin-left: 5px;
    }
`
export const BtnNav = styled.div`
    width:270px;
    height:40px;
    background-color:#FFA918;
    color:#04166C;
    border-radius:4px;
    align-items:center;
    padding-top:4px;
    font-size:20px;
    font-weight:bold;
    border: none;
    text-align:center;

    @media (max-width: 700px){
        width:150px;
        height:40px;
        margin-right:20px;
        justify-content:flex-end;
        font-size:12px;
        margin-top:8px;
        font-weight:bold;
    }
`

export const NavLogo = styled.img`
    
    background-size:cover;
    width:210px;
    
    @media (max-width: 768px){
        width:100px
    }
`

export const NavWrapper = styled.ul`
    display:flex;
    list-style:none;
    

`

export const NavList = styled.li`
     margin-top:23px;
     display:flex;
     margin-right:30px
`

export const Links = styled.a`

    text-decoration:none;
    color:#003180;
    font-size:25px;
    font-weight:bold;
    display:flex;
    

   
    &:hover{
        text-decoration:none;
        color:#003180;
    }
`