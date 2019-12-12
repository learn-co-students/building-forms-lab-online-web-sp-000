import React from 'react';

const BandsList = (props) => {
  return (
    <div>
      <ul>
        {props.bands.map((band, idx) => (
          <li key={idx}>{band.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BandsList;
