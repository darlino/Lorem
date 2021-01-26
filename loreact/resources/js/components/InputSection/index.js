import React from 'react'
import {InputContainer} from './InputElements'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaSearch from 'react-icons/fa'
import {Accordion,Card} from 'react-bootstrap'



export const InputSection = () => {
    return (
        <InputContainer>
            <Form>
                <FormGroup>
                     <Input type="text" name="email" id="exampleEmail" placeholder="Decivez nous votre probleme" style={{marginTop:"40px", width:"500px", marginLeft:"90px"}}></Input>

                </FormGroup>
                <h2 style={{marginTop:"80px"}}> Suggestions de problèmes </h2>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Liyeplimall
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            

                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            

                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Form>
        </InputContainer>
    )
}
