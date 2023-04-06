import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rockets() {
  const [launchers, setRockets] = useState([]);

  useEffect(() => {
    axios.get('https://isro.vercel.app/api/launchers')
      .then(response => {
        setRockets(response.data.launchers);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Rockets List</h1>
      <ul>
        {launchers.map(launcher => (
          <li key={launcher.id}>{launcher.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
