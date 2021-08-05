import React from 'react'
import {Center,Text} from '@chakra-ui/react'
import {HiDownload} from 'react-icons/hi'

export const PdfViewer = () => {
    return (
        <a href="/download">
            <Center w = {["300px" , "600px","800px"]} h="50px" p={3} backgroundColor="#04166C" color="white" >
                <Text paddingLeft="4px"> Télecharger la documentation</Text>
                <HiDownload style={{ marginLeft: "10px"}}/>
            </Center>   
        </a>
    )
}
