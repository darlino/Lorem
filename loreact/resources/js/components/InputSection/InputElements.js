import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    position:relative;
    margin: 0 auto;
    z-index: 2;
    width:80vh;
    height: auto;
    overflow:hidden;
    border-radius:20px;
    height: auto;
    top:-120px;
    box-shadow:8px 8px 10px gray;
    text-align:center;
    font-family:Nunito;
    padding-bottom:40px

`

export const InputWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:40px;
    justify-content:space-between

`

export const CardLink = styled(Link)`
    width:auto;
    height:auto;
    text-decoration:none;
    color:gray
`
export const ListWrapper = styled.ul`
    width:auto;
    display:flex;
    flex-direction:column;
`