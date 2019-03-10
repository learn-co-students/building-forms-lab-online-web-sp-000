import React from 'react';
import uuid from 'uuid';

const BandsList = (props) => {
  const bands = props.bands.map( (band) => {
    return <li key={uuid()}>{band.name}</li>;
  });

  return (
    <div>
      <ul>
        {bands}
      </ul>
    </div>
  );

};

export default BandsList;
