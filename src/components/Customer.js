import React, { useState } from 'react';
import axios from 'axios';

function Customer() {
  const [country, setCountry] = useState('');
  const [satelliteIds, setSatelliteIds] = useState([]);

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    axios.get('https://isro.vercel.app/api/customer_satellites', {
      params: {
        country: country
      }
    })
    .then(response => {
      const data = response.data;
      setSatelliteIds(data.customer_satellites
        .filter(satellite => satellite.country.toLowerCase() === country.toLowerCase())
        .map(satellite => satellite.id));
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Country:
          <input type="text" value={country} onChange={handleCountryChange} />
        </label>
        <button type="submit">Get Satellite IDs</button>
      </form>
      <ul>
        {satelliteIds.map(id => <li key={id}>{id}</li>)}
      </ul>
    </div>
  );
}

export default Customer;
