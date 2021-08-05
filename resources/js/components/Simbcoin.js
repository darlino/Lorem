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
import {Liyeplimall,SimbcoinComponent,LimarketComponent} from '../components/Pages/Categories/Index'

function Simbcoin() {
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

export default Simbcoin;

if (document.getElementById('simbcoin')) {
    ReactDOM.render(<Simbcoin />, document.getElementById('simbcoin'));
}
