import React from 'react'
import {InputContainer,InputWrapper,CardLink} from './InputElements'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaSearch from 'react-icons/fa'
import {Accordion,Card} from 'react-bootstrap'
import liyep from '../assets/liyep.png'
import simbcoin from '../assets/simbcoin.png'
import limarket from '../assets/limarket.png'


export const InputSection = () => {
    return (
        <InputContainer>
            <Form>
                {/* <FormGroup>
                     <Input type="text" name="email" id="exampleEmail" placeholder="Decivez nous votre probleme" style={{marginTop:"40px", width:"500px", marginLeft:"90px"}}></Input>

                </FormGroup> */}
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
            </Form>
        </InputContainer>
    )
}
