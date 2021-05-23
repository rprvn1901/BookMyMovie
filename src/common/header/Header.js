import React from 'react';
import './Header.css';
import movielogo from '../../assets/logo.svg'
import { Button } from '@material-ui/core';
import {LoginControl} from '../../screens/Login/LoginControl.js';

const isLoggedIn = true;
const Header = function (props) {
    return (
        <div className="header">
            <img src={movielogo} className="Logo" />

            <Button variant="contained" color="default" className="Login">
                Login
             </Button>
  
        </div>


    )
}
export default Header;



  

