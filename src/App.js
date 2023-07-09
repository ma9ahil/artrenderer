
import './App.css';
import {useState,useEffect} from 'react';
import React from 'react';
import ArtElement from './components/ArtElement';
function App() {
  const [art,setArt] = useState([])
  const [artwork,setArtwork] = useState([])
  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1700&dateEnd=1800&q=African")
    .then(res => res.json())
    .then(data => setArt(data))
  },[])
  // useEffect(() => {
  //     fetch("https://swapi.dev/api/people/1/")
  //     .then(res => res.json())
  //     .then(data => setArt(data))
  //   },[])

  

  const objects = art.objectIDs;


  

  const artElements = objects.map(item=> {
    return (
      <ArtElement key={item} objectID={item}  />
    );
  });
  //write me an alternative to the above map function that uses a for loop
  // const artElements = [];
  // console.log("i got here")
  // for (let i = 1; i < 899311; i++) {
  //   artElements.push(<ArtElement key={objects[i]} objectID={objects[i]} />);
  // }
  return (
    <>
    <div className="App">
      {artElements}
    </div>
    </>
  );
}

export default App;
