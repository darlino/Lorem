import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Link
  } from "@chakra-ui/react"


export const ToggleQuestion = (props) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple w="700px"  justifyContent="center" margin="0 auto" textAlign="left">
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left" h="40px" pt="9px">
                        {props.title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}  color="gray" fontWeight="none">
                        {props.text}
                      
                </AccordionPanel>

            </AccordionItem>

        </Accordion>
    )
}

