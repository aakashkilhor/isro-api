import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='bg-dark'>
      <h1 className='text-white py-5 px-5 text-xl'>Welcome to my website!</h1>
      <p className='text-white py-5 px-5'> Please choose an option from the menu below:</p>
      <ul className=" px-5 py-5">
        <button className='btn btn-success btn-lg mx-5'><Link to="/rockets" className='text-white '>Rockets</Link></button>
        <button className='btn btn-danger btn-lg mx-5' ><Link to="/customer" className='text-white'>Customer Satellites</Link></button>
        <button className='btn btn-warning btn-lg mx-5'><Link to="/centres" className='text-white'>Centres</Link></button>
        <button className='btn btn-info btn-lg mx-5'><Link to="/spacecraft" className='text-white'>Spacecraft</Link></button>
      </ul>
    </div>
  );
}

export default HomePage;
