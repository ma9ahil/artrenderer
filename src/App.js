
import './App.css';
import {useState,useEffect} from 'react';
import React from 'react';
function App() {
  const [art,setArt] = useState([])
  const [artwork,setArtwork] = useState([])
  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1700&dateEnd=1800&q=African")
    .then(res => res.json())
    .then(data => setArt(data))
  },[])
  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/459199")
    .then(res => res.json())
    .then(data => setArtwork(data))
  },[])

  const objects = [art.objectIDs + ","];
  const artElements = objects.map(element=> {
    return (
      <>
      <div key={element}>{element}</div>
      </>
    );
  });
  const artworkImage = artwork.primaryImage;
  
  return (
    <>
    <div className="App">
      {artElements}
    </div>
    <br></br>
    <img src={artworkImage} width="300" height="300"></img></>
  );
}

export default App;
