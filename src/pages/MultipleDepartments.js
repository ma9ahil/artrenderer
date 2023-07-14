import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Department from './Department';

export default function Departments() {


    return(
        <>
        <Link to="/department"><h3 className="nav-element">American Decorative Arts/Or other name</h3></Link>
        </>
    );
}