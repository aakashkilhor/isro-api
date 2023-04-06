import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Spacecraft() {
  const [spacecrafts, setSpacecrafts] = useState([]);

  useEffect(() => {
    axios.get('https://isro.vercel.app/api/spacecrafts')
      .then(response => {
        setSpacecrafts(response.data.spacecrafts);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Spacecraft List</h1>
      <ul>
        {spacecrafts.map(spacecraft => (
          <li key={spacecraft.id}>{spacecraft.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Spacecraft;
