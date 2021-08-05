import React from 'react'
import ReactPlayer from 'react-player'
import {Text,Box,Center, Heading, Stack, propNames} from '@chakra-ui/react'
import './index.css'
export const Player = (props) => {
    return (
        <div >
            <Box mx="auto" px="auto" textAlign="center" style={{ margin:"auto",padding:"12px"}} >
                <ReactPlayer  
                    width = {["450px","700px"]}
                    height = {["350px","700px"]}
                    url =  {props.url}
                    controls
                    className="react-player"
                    config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    }
                    }}
                    style={{ margin: "10px auto"}}
                />
                <Heading  fontSize="md" width="100%" p={5} > Titre : {props.title} </Heading>
            </Box>
            
        </div>
    )
}
