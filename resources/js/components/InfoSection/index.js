import React from 'react'
import {Center, Heading, Wrap,WrapItem,Box } from '@chakra-ui/react'
import {Player} from './Player'
import {PdfViewer} from './PdfViewer'

export const InfoSection = () => {

    const elements = [{
        url:"https://youtu.be/8dSZErBfY4E",
        title : "Présentation française de Liyeplimal"
    },
    {
        url:"https://youtu.be/-3DhWrj5pWI",
        title:"Présentation anglaise de Liyeplimal"
    },
    {
        url:"https://youtu.be/KIe0f-Ft8UE",
        title:"Guide d'utilisation du support"
    },
    {
        url:"https://youtu.be/R4RYcEyBS-U",
        title:"Simbcoin Swap sur Bittrex"
    }

   
]
    return (
        <>
        <Heading p={10}> Gallerie Vidéo</Heading>
        <div style={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"12px"}}>
            
            <Wrap>
                    {
                        elements.map( element => {
                            return (
                                <WrapItem style={{ display:"flex",justifyContent:"center",alignItems:"center",padding:"12px"}}> 
                                    <Player url = {element.url} title = {element.title}/>                              
                                </WrapItem>
                                
                            )
                        })
                    }
             </Wrap>  
           
            
        </div>

        <Center padding = "10px">
                <PdfViewer/>
        </Center>
        </> 
        
        
    )
}
