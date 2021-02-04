import { Flex, Stack,Box,Text,Divider,Code,Link } from "@chakra-ui/react"
import React from 'react'
import logo from '../assets/s-logo.png'
import {AiFillHeart} from 'react-icons/ai'

export const Footer = () => {
    return (
        <>
        <Divider/>
            <Flex w="100%" h="30vh"  borderTop="1px solid #828282" pt="30px">
            <Box pl="20px" boxSize="border-box">
                <img src={logo}/>
            </Box>
            <Stack spacing="50px" direction="row" ml="100px">
                <Box direction="column" w ="300px">
                    <Text fontSize="30px" color="#505a73" fontWeight="bold"> Suivez nous</Text>
                    <br/>
                    <Text href="#"> Facebook</Text>
                    <Text href="#"> Instagram</Text>
                    <Text href="#"> Youtube</Text>
                    <Text href="#"> Twitter</Text>
                    <Text href="#"> Tik - tok</Text>

                </Box>
                <Box direction="column" w ="300px">
                <Text fontSize="30px" color="#505a73" fontWeight="bold">Our products</Text>
                    <br/>
                    <Text> Liyeplimall</Text>
                    <Text> Simbcoin</Text>
                    <Text>  Simbtrex</Text>
                    <Text> Limarket</Text>
                    <Text> Auto - école université</Text>
                    <Text> Workoo</Text>
                    <Text> Liportal</Text>

                </Box>
                <Box direction="column" w ="562px">
                <Text fontSize="20px" color="#505a73" fontWeight="bold" display="flex"> Made with  <AiFillHeart fontSize="30px"/>   by Global Investment Trading Team</Text>
                    <br/>
                    <Text> As it has always been one of our duties, we always make sure we are available when you need us. Global Investment Trading is a welcoming company and gives you the opportunity to get started from zero to hero. As a support team we will always make sure you the best user experience ever.
Thanks for trusting in us.</Text>
                  <Text textAlign="center">© Copyrights 2020 <Code  color="orange" fontWeight="bold"> GIT Developers </Code>. All rights reserved.</Text>

                </Box>
            </Stack>

            
            
            

        </Flex>
            
        </>
        
        
    )
}
