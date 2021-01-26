import React from 'react'
import {InputContainer} from './InputElements'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export const InputSection = () => {
    return (
        <InputContainer>
            <Form>
                <FormGroup>
                     <Input type="text" name="email" id="exampleEmail" placeholder="Decivez nous votre probleme" style={{marginTop:"40px", width:"500px", marginLeft:"80px"}}/>
                </FormGroup>
            </Form>
        </InputContainer>
    )
}
