import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../components/Pages/Index'
import {Liyeplimall} from '../components/Pages/Categories/Index'
function Example() {
    return (
        <Router>
            
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path="/liyeplimall" component={Liyeplimall}/>
                
            </Switch>
        </Router>
        
       
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
