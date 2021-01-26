import styled from 'styled-components'
import bg from '../assets/bg.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export const HeroContainer = styled.div`
    background-size: cover;
  height: 60vh;
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
    background-image:url(${bg});
  
    
`

export const HeroTextWrapper = styled.div`
    display:flex;
    text-align:center;
    color:white;
    font-weight:bold;
    font-size:40px;
    
    

`