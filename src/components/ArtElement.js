
import React, { useState, useEffect } from 'react';

export default function ArtElement(props) {
  const [artwork, setArtwork] = useState({});

  useEffect(() => {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.objectID)
      .then(res => res.json())
      .then(data => setArtwork(data))
      .catch(error => console.error("Error:", error));
  }, [props.objectID]);

  return (
    <div className="art-element">
      {artwork.title && <h3>{artwork.title}</h3>}
      {artwork.artistDisplayName && <p>{artwork.artistDisplayName}</p>}
      {artwork.primaryImage? <img src={artwork.primaryImage} width="300" height="300" alt=""></img> : <p>No image available</p>}
    </div>
  );
}
