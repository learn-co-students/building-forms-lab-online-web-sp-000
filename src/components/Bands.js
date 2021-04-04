import React from 'react'

const Bands = props => {

  const bands = props.bands.map((band, idx) => {
    return <li key={idx}>{band.name}</li>;
  });

  return (
    <div>{bands}</div>
  );
};

export default Bands;
