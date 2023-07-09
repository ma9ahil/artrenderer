import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function ArtElement(props) {
  const [artwork, setArtwork] = useState({});
 const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/{props.objectID}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Error retrieving artwork');
  //       }
  //       return res.json();
  //     })
  //     .then(data => setArtwork(data))
  //     .catch(error => {
  //       console.error('Error:', error);
  //       setError(error);
  //     });
  // }, [props.objectID]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.objectID
        );
        const data = response.data;
        setArtwork(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="art-element">Error: {error.message}</div>;
  }

  return (
    <div className="art-element">
      {artwork.title && <h3>{artwork.title}</h3>}
      {artwork.artistDisplayName && <p>{artwork.artistDisplayName}</p>}
      {artwork.primaryImage ? (
        <img src={artwork.primaryImage} width="300" height="300" alt="" />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

