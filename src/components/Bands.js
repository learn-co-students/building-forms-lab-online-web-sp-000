import React, { Component } from 'react';

const Bands = (props) => {
  return (
    <div>
      <ul>
      {props.bands.map(band => <li key={Math.random()}>{band.name}</li>)}
      </ul>
    </div>
  )
}

export default Bands;
