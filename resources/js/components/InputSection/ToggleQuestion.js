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
        <Accordion allowMultiple w={['300px','400px','800px','1000px']} justifyContent="center" margin="0 auto" textAlign="left">
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

