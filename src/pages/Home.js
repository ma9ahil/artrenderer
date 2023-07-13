import axios from 'axios';
import '../App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ArtElement from '../components/ArtElement';
import Navbar from '../components/Navbar';


function Home() {
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
        <Navbar />
    {/* <img  className="bgd" src="./image.jpg" height="600" width="100%"></img> */}
      <div className="App">{artElements}</div>
    </>
  );
}

export default Home;

