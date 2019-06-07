import React from 'react';

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
        Band List:
      {bands}
    </div>
  );

};

export default Bands;