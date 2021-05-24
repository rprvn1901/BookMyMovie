import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../common/header/Header';
import Home from '../screens/home/Home.js';

class Controller extends Component {

    constructor(){
        super();
        this.baseUrl = "http://localhost:8085/api/v1";
    }

    render() {
        return (
        
         


            <Router>
                <div>
                     <Route exact path="/" render={(props) => <Home {...props} baseUrl = {this.baseUrl} />} /> 
                </div>
            </Router>
        )
    }
}


export default Controller;