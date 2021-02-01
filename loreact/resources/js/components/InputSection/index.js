import React from 'react'
import {InputContainer,InputWrapper,CardLink} from './InputElements'
import { Form } from 'reactstrap';

import {Card} from 'react-bootstrap'
import liyep from '../assets/liyep.png'
import simbcoin from '../assets/simbcoin.png'
import limarket from '../assets/limarket.png'
import {questions} from './Data'
import {ToggleQuestion} from './ToggleQuestion'
import { propNames } from '@chakra-ui/react';

export const InputSection = () => {
    return (
        <InputContainer>
        
            <Form>
                <h2 style={{marginTop:"80px"}}> Choisissez une categorie </h2>
                <InputWrapper>
                    <CardLink to="/liyeplimall">
                    <Card style={{ width: '18rem'}} className="border-rounded">
                        <Card.Img variant="top" src={liyep} />
                        <Card.Body>
                        <Card.Title>Liyeplimall</Card.Title>
                        
                        </Card.Body>
                    </Card>
                    </CardLink>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={simbcoin}  />
                        <Card.Body>
                        <Card.Title>Simbcoin</Card.Title>
                        
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem',marginLeft: "140px" }}>
                        <Card.Img variant="top" src={limarket} />
                        <Card.Body>
                        <Card.Title>Liyeplimall</Card.Title>
                        
                        </Card.Body>
                    </Card>
                </InputWrapper>
                <hr></hr>
                
                <h2 style={{marginTop:"80px"}}> Questions populaire </h2>
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
