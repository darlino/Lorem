import React from 'react'
import {InputContainer,InputWrapper,CardLink} from './InputElements'
import { Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Card} from 'react-bootstrap'
import liyep from '../assets/liyep.png'
import simboin from '../assets/simbcoin.png'
import limarket from '../assets/limarket.png'
import {questions} from './Data'
import {ToggleQuestion} from './ToggleQuestion'
import MediaCard from './Card'
export const InputSection = () => {

    
    return (
        <InputContainer>

            <Form>
               
                <center>

                    <InputWrapper className='row'>

                        <CardLink to="/liyeplimall" className='col' style={{border:"none" , outline:"none"}}>
                            <MediaCard img={liyep} title="Liyeplimal" text="Liyeplimal est une plateforme ou on peut gagner de l'argent tres simplement en investissant"/>
                        </CardLink>

                        <CardLink to="/simbcoin" className='col'>
                            <MediaCard img={simboin} title="Simbcoin" text="Simbcoin est une monnaie virtuelle base sur ethereum  et disponible a l'achat sur LaToken"/>
                        </CardLink>

                        <CardLink to="/limarket" className='col'>
                            <MediaCard img={limarket} title="Limarket" text="Limarket est  une boutique en ligne livrant dans toutes les villes et acceptant les cryptomonnaies"/>
                        </CardLink>

                    </InputWrapper>

                </center>

                <hr/>

                <h1 style={{marginTop:"50px", marginBottom:"50px"}}> Sujets populaire </h1>
                <div>
                    {questions.map(elements =>{
                        return(
                            <ToggleQuestion title={elements.title} text={elements.text}/>
                        );

                    })}

                </div>

            </Form>
        </InputContainer>
    )
}
