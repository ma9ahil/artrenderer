import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ArtElement from './components/ArtElement';
import Home from './pages/Home';
import Art from './pages/Art';

function App() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=sunflower'
        );
        const data = response.data;
        setArt(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const objects = art.objectIDs || [];
  const artElements = objects.map((item) => {
    return <ArtElement key={item} objectID={item} />;
  });

  return (
    <>
    <nav className='navbar'>
    <img src="./logo.png" height="100" alt=""></img>
    <div className='navbar-options'><h3 className="nav-element">Home</h3>
    <h3 className="nav-element">About</h3>
    <h3 className="nav-element">Collections</h3></div></nav>
    {/* <img  className="bgd" src="./image.jpg" height="600" width="100%"></img> */}
      <div className="App">{artElements}</div>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<Art/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

