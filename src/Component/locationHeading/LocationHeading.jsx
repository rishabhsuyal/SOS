import React from 'react';
import "./locationHeading.css";

function LocationHeading({head_text}) {
  return (
    <div className='container'>
        <h1>{head_text}</h1>
    </div>
  )
}

export default LocationHeading