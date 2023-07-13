import {Link} from 'react-router-dom';
import React from 'react';
import '../App.css';

export default function Navbar() {
    return(
        <nav className='navbar'>
        <img src="./logo.png" height="100" alt=""></img>
        <div className='navbar-options'>
        <Link to="/home"><h3 className="nav-element">Home</h3></Link>
        <Link to="/about"><h3 className="nav-element">About</h3></Link>
        <h3 className="nav-element">Collections</h3></div></nav>
    );
}