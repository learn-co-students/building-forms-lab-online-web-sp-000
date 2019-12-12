import React from 'react';

const BandList = (props) => {
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

export default BandList;
