import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    position:relative;
    margin: 0 auto;
    z-index: 2;
    width:80%;
    height: auto;
    overflow:hidden;
    border-radius:20px;
    height: auto;
    top:-120px;
    border: 2px solid #ccc;
    text-align:center;
    font-family:Nunito;

    @media (max-width: 768px) {
         width: 95%;
     }

`

export const InputWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:40px;
    justify-content:space-between

    @media (max-width: 768px) {
         display:block;
         margin:0px;
     }

`

export const CardLink = styled(Link)`
    width:80%;
    height:auto;
    text-decoration:none;
    color:gray
`
export const ListWrapper = styled.ul`
    width:auto;
    display:flex;
    flex-direction:column;
`
