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
import {InfoSection} from '../InfoSection/index'
import MediaCard from './Card'
import { Heading } from '@chakra-ui/react';
export const InputSection = () => {

    
    return (
        <InputContainer>

            <Form>
               
                <center>

                    <InputWrapper className='row'>

                        <CardLink to="/liyeplimal" className='col' style={{border:"none" , outline:"none"}}>
                            <MediaCard img={liyep} title="Liyeplimal" text="Liyeplimal est une plateforme d'investissement permettant de générer des profits à hauteur de ses placements"/>
                        </CardLink>

                        <CardLink to="/simbcoin" className='col'>
                            <MediaCard img={simboin} title="Simbcoin" text="Simbcoin est une cryptomonnaie basée sur l'immobilier et permettant un échanges et biens et de services"/>
                        </CardLink>

                        <CardLink to="/limarket" className='col'>
                            <MediaCard img={limarket} title="Limarket" text="Limarket est une plateforme de e-commerce permettant de s'appovisionner en produits de diverses catégories, acceptant le paiement par cryptomonnaies"/>
                        </CardLink>

                    </InputWrapper>

                </center>

                <hr/>
                
                <Heading p={10}> Sujets populaires </Heading>
                <div>
                    {questions.map(elements =>{
                        return(
                            <ToggleQuestion title={elements.title} text={elements.text} w={['300px','400px','800px','1000px']}/>
                        );

                    })}

                </div>
                <hr/>
                <InfoSection/>
                

            </Form>
        </InputContainer>
    )
}
