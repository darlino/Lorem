import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {questions} from './Data'
import './style.css';

export const LiyepTab  = (props) => {
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
