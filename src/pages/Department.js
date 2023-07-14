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
        const departmentIds = [10, 11, 13, 14, 19, 21]; // Departments to fetch objects for
        const limit = 50; // Number of objects to retrieve

        // Fetch all objects for the department
        const objectPromises = departmentIds.map(async (departmentId) => {
          try {
        const response = await axios.get(
          'https://collectionapi.metmuseum.org/public/collection/v1/search',
          {
            params: {
              q: `departmentId:${departmentId}`,
            },
          }
        );

        if (response.status === 200) {
          const allObjects = response.data.objectIDs;
          console.log(response.data.objectIDs)

          // Limit the number of objects
          const limitedObjects = allObjects.slice(0, limit);

          // Fetch information for each limited object
          const departmentObjectPromises = limitedObjects.map(async (objectId) => {
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
          const departmentObjectData = await Promise.all(departmentObjectPromises);
          return departmentObjectData.filter((obj) => obj !== null);
        } else {
          console.error(`Error fetching objects for department ${departmentId}`);
          return [];
        }
      } catch (error) {
        console.error('Error:', error);
        return [];
      }
    });

           // Wait for all department object fetch requests to complete
        const departmentObjectsData = await Promise.all(objectPromises);
        setObjects(departmentObjectsData.flat());
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
        object.primaryImage!==""&&
        <div key={object.objectID}>
          <h3>{object.title}</h3>
          <img src={object.primaryImage} width="300" height="300" alt="" />
          {/* Render other relevant object information */}
        </div>
      ))}
    </div>
  );
};

export default Department;


