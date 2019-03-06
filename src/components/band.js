import React, { Component } from 'react'


const Bands = (props) => {

  const bands = props.bands.map( (band) => {
    return <li>{band.name}</li>
  })

  return (
    <div>
      <p>Battle Of The Bands</p>
      {bands}
    </div>
  );

};

export default Bands;
