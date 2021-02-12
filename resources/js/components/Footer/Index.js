import { Flex, Stack,Box,Text,Divider,Code,Link } from "@chakra-ui/react"
import React from 'react'
import logo from '../assets/s-logo.png'
import {AiFillHeart} from 'react-icons/ai'
import './style.css';

export const Footer = () => {
    return (
        <>
        


        <Box  borderTop="1px solid #828282" pt="20px" pb="20px" justifyContent="flex-end" w="100%">
           <Text textAlign="center">© Copyrights 2020 <Code  color="orange" fontWeight="bold"> GIT Developers </Code>. All rights reserved.</Text>
        </Box>
            
        </>
        
        
    )
}
