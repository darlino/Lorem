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
import {Liyeplimall} from '../components/Pages/Liyeplimall/Index'

function Example() {
    return (
        <Router>
            <Main/>
            <Switch>
                <Route path="/liyeplimall">
                    <Liyeplimall/>
                </Route>
            </Switch>
        </Router>
        
       
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
