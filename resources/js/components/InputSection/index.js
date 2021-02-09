import React from 'react'
import {InputContainer,InputWrapper,CardLink} from './InputElements'
import { Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Card} from 'react-bootstrap'
import liyep from '../assets/liyep.png'
import simbcoin from '../assets/simbcoin.png'
import limarket from '../assets/limarket.png'
import {questions} from './Data'
import {ToggleQuestion} from './ToggleQuestion'

export const InputSection = () => {
    return (
        <InputContainer>

            <Form>
                <h2 style={{marginTop:"80px"}}> Choisissez une categorie </h2>
                <center>

                    <InputWrapper className='row'>

                        <CardLink to="/liyeplimall" className='col'>
                            <Card className="card-style border-rounded">
                                <Card.Img variant="top" src={liyep} />
                                <Card.Body>
                                    <Card.Title>Liyeplimal</Card.Title>

                                </Card.Body>
                            </Card>
                        </CardLink>

                        <CardLink to="/simbcoin" className='col'>
                            <Card className="card-style border-rounded">
                                <Card.Img variant="top" src={simbcoin}  />
                                <Card.Body>
                                    <Card.Title>Simbcoin</Card.Title>

                                </Card.Body>
                            </Card>
                        </CardLink>

                        <CardLink to="/limarket" className='col'>
                            <Card className="card-style border-rounded">
                                <Card.Img variant="top" src={limarket} />
                                <Card.Body>
                                    <Card.Title>LiMarket</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardLink>

                    </InputWrapper>

                </center>

                <hr/>

                <h2 style={{marginTop:"50px", marginBottom:"50px"}}> Questions populaire </h2>
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
