import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Main from './Pages/Index'
import { ChakraProvider } from "@chakra-ui/react"
import {LimarketComponent,SimbcoinComponent,Liyeplimall} from '../components/Pages/Categories/Index'

function Limarket() {
  
    return (
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path="/liyeplimal" component={Liyeplimall}/>
                    <Route path="/limarket" component={LimarketComponent}/>
                    <Route path="/simbcoin" component={SimbcoinComponent}/>
                </Switch>
        </Router>
        </ChakraProvider>
        
        
       
    );
}

export default Limarket;

if (document.getElementById('limarket')) {
    ReactDOM.render(<Limarket />, document.getElementById('limarket'));
}
