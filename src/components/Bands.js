
import React from 'react';

const Bands = props => {
    console.log(props)
  const bands = props.bands.map((band, index) => {
      console.log(band)
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;