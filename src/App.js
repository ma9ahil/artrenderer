import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ArtElement from './components/ArtElement';
import Home from './pages/Home';
import Department from './pages/Department';
import Art from './pages/Art';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/department" element={<Department/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

