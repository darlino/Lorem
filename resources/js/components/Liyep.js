import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/Index'
import {Liyeplimall,LimarketComponent,SimbcoinComponent} from '../components/Pages/Categories/Index'

function Liyep() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Main}/>

                <Route path="/liyeplimall" component={Liyeplimall}/>
                <Route path="/limarket" component={LimarketComponent}/>
                <Route path="/simbcoin" component={SimbcoinComponent}/>
            </Switch>
        </Router>
        
       
    );
}

export default Liyep;

if (document.getElementById('liyeplimall')) {
    ReactDOM.render(<Liyep />, document.getElementById('liyeplimall'));
}
