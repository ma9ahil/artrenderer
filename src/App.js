import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ArtElement from './components/ArtElement';

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
    <h3 className="nav-element">Home</h3></nav>
    {/* <img  className="bgd" src="./image.jpg" height="600" width="100%"></img> */}
      <div className="App">{artElements}</div>
    </>
  );
}

export default App;

