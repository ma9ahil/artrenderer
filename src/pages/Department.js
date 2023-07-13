//code is temporary
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Department = () => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const departmentId = 1; // Replace with the desired department ID
        const limit = 50; // Number of objects to retrieve

        // Fetch all objects for the department
        const response = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/objects',
          {
            params: {
              departmentId,
            },
          }
        );

        if (response.status === 200) {
          const allObjects = response.data.objectIDs;

          // Limit the number of objects
          const limitedObjects = allObjects.slice(0, limit);

          // Fetch information for each limited object
          const objectPromises = limitedObjects.map(async (objectId) => {
            try {
              const objectResponse = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
              );
              return objectResponse.data;
            } catch (error) {
              console.error('Error fetching object:', error);
              return null;
            }
          });

          // Wait for all object fetch requests to complete
          const objectData = await Promise.all(objectPromises);
          setObjects(objectData.filter((obj) => obj !== null));
        } else {
          setError('Error fetching objects');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching objects');
      } finally {
        setLoading(false);
      }
    };

    fetchObjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Department Objects</h1>
      {objects.map((object) => (
        <div key={object.objectID}>
          <h3>{object.title}</h3>
          {/* Render other relevant object information */}
        </div>
      ))}
    </div>
  );
};

export default Department;

