import React from 'react'

const Band = props => {

  const createBands = props.bands.map((band, id) => {
      return <li key={id}>{band.name}</li>;
  });

  return (
    <div>
      {createBands}
    </div>
  );
}

export default Band;
