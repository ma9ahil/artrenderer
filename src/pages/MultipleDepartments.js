import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Department from './Department';

export default function Departments() {


    return(
        <>

        {/* <BrowserRouter>
        //cannot have a router inside a router
        <Routes>
            <Route path="/" element={<Department/>}></Route>
            </Routes>
        </BrowserRouter> */}
        <Link to="/department/4"><h3 className="nav-element">American Decorative Arts/Or other name</h3></Link>
        </>
    );
}