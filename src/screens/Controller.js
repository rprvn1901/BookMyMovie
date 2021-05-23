import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/Header.js'

class Controller extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>             
                </div>
            </Router>
        )
    }
}


export default Controller;