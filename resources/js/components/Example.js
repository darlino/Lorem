import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Main from '../components/Pages/Index'
import {Liyeplimall,SimbcoinComponent,LimarketComponent} from '../components/Pages/Categories/Index'
import { ChakraProvider } from "@chakra-ui/react"
function Example() {

    const reload = () =>{
        window.location.reload();
    }
    return (
        <ChakraProvider>
              <Router>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path="/liyeplimal" component={Liyeplimall} />
                    <Route path="/limarket" component={LimarketComponent} />
                    <Route path="/simbcoin" component={SimbcoinComponent} />
                </Switch>
            </Router>
        </ChakraProvider>
      
       
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
