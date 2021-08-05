import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link,
    Center
  } from "@chakra-ui/react"
import HoverRating from './ratings'

export const ToggleQuestion = (props) => {
    return (
        <Accordion allowMultiple w={props.w} justifyContent="center" margin="0 auto" textAlign="left">
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left" h="50px" pt="9px" fontSize={["12px","20px"]}>
                        {props.title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} ml={3} color="#474747" fontSize={["12px","20px"]} >
                        {props.text}
                        <Center display="flex" flexDirection="column" mt="50px"  textAlign="left"  pt="9px" fontSize={["8px","25px"]}>
                        <h5 color="black"> Cette reponse vous a été utile?</h5>
                            <HoverRating/>
                        </Center>
                        
                      
                </AccordionPanel>
                

            </AccordionItem>

        </Accordion>
    )
}

