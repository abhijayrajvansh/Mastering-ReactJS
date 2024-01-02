import React, { useState, useEffect } from 'react';

interface Data {
  // Define the structure of your API response data
  // For example, assuming your API returns an object with a 'name' property
  name: string;
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData: Data = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Data received: {data.name}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;
