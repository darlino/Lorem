// Noula Darlin 
// les éléments des différentes pages
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {questionsLimarket, questionsLiyep, questionsSimbCoin} from './Data'
import './style.css';
import {ToggleQuestion} from '../../InputSection/ToggleQuestion';
import {FaQuestion} from 'react-icons/fa'
import CustomizedRatings from './Ratings'
import { Center, Stack,Box } from '@chakra-ui/react';

// menu pour la page liyepplimall
export const LiyepTab  = () => {
  return (
    <Box className="App">
      <Tabs className="lg">
        <TabList>
            {questionsLiyep.map(question => {
                return(
                    <Tab >
                      
                        <p display="flex" flexDirection="row">  {question.title}  ?</p>
                    </Tab>
                  )
            })}
        </TabList>
            {questionsLiyep.map(question =>{
                return(
                    <TabPanel>
                        <Box className="panel-content">
                            {question.text}
                            <Center mt="50px">
                              <CustomizedRatings/>
                            </Center>
                        </Box>
                    </TabPanel>
                    )
            })}
        
    
      </Tabs>

      <div className="sm">
        {questionsLiyep.map(elements => {
          return(
            <ToggleQuestion title={elements.title} text={elements.text} />
          );
        })}
      </div>
    </Box>
  );
}
// Menu pour la page Limarket
export const LimarketTab  = () => {
  return (
    <Box className="App">
      <Tabs className="lg">
        <TabList>
            {questionsLimarket.map(question => {
                return(
                    <Tab>
                        <p>{question.title}</p>
                      
                    </Tab>
                  )
            })}
        </TabList>
            {questionsLimarket.map(question =>{
                return(
                    <TabPanel>
                        <div className="panel-content">
                            {question.text}
                            <Center mt="50px">
                              <CustomizedRatings/>
                            </Center>
                        </div>
                    </TabPanel>
                    )
            })}
        
    
      </Tabs>

      <div className="sm">
        {questionsLimarket.map(elements => {
          return(
            <ToggleQuestion title={elements.title} text={elements.text} className="info" />
          );
        })}
      </div>
    </Box>
  );
}

//Menu pour la page Simbcoin
export const SimbcoinTab  = () => {
  return (
    <div className="App">
      <Tabs>
        <TabList>
            {questionsSimbCoin.map(question => {
                return(
                    <Tab>
                        <p>{question.title}</p>
                    </Tab>
                  )
            })}
        </TabList>
            {questionsSimbCoin.map(question =>{
                return(
                    <TabPanel>
                        <div className="panel-content">
                            <h4>{question.text}</h4>
                            <Center mt="50px">
                              <CustomizedRatings/>
                            </Center>
                        </div>
                    </TabPanel>
                    );
            })}
        
    
      </Tabs>

      <div className="sm">
        {questionsSimbCoin.map(elements => {
          return(
            <ToggleQuestion title={elements.title} text={elements.text} />
          )
        })}
      </div>
    </div>
  );
}
