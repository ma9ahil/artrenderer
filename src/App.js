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
          'https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Quilts|Silk|Bedcovers&q=quilt'
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
      <div className="App">{artElements}</div>
    </>
  );
}

export default App;

