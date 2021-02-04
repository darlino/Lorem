// Noula Darlin 
// les éléments des différentes pages
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {questionsLimarket, questionsLiyep} from './Data'
import './style.css';

// menu pour la page liyepplimall
export const LiyepTab  = () => {
  return (
    <div className="App">
      <Tabs>
        <TabList>
            {questionsLiyep.map(question => {
                return(
                    <Tab>
                        <p>{question.title}</p>
                    </Tab>
                  )
            })}
        </TabList>
            {questionsLiyep.map(question =>{
                return(
                    <TabPanel>
                        <div className="panel-content">
                            <h4>{question.text}</h4>
                        </div>
                    </TabPanel>
                    )
            })}
        
    
      </Tabs>
    </div>
  );
}
// Menu pour la page Limarket
export const LimarketTab  = () => {
  return (
    <div className="App">
      <Tabs>
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
                            <h4>{question.text}</h4>
                        </div>
                    </TabPanel>
                    )
            })}
        
    
      </Tabs>
    </div>
  );
}

//Menu pour la page Simbcoin
export const SimbcoinTab  = () => {
  return (
    <div className="App">
      <Tabs>
        <TabList>
            {questions.map(question => {
                return(
                    <Tab>
                        <p>{question.title}</p>
                    </Tab>
                  )
            })}
        </TabList>
            {questions.map(question =>{
                return(
                    <TabPanel>
                        <div className="panel-content">
                            <h4>{question.text}</h4>
                        </div>
                    </TabPanel>
                    )
            })}
        
    
      </Tabs>
    </div>
  );
}
