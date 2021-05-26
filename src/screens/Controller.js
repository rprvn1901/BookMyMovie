import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/home/Home.js';
import Details from '../screens/details/Details.js';
import BookShow from '../screens/bookshow/BookShow.js';


class Controller extends Component {

    constructor(){
        super();
        this.baseUrl = "http://localhost:8085/api/v1/";
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                     <Route exact path="/" render={(props) => <Home {...props} baseUrl = {this.baseUrl} />} /> 
                     <Route path="/movie/:id" render={(props) => <Details {...props} baseUrl = {this.baseUrl} />} /> 
                     <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl = {this.baseUrl} /> } />
                </div>
            </Router>
        )
    }
}


export default Controller;