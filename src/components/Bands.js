// Once you've got a form successfully dispatching actions and adding bands to your Redux store
//  write the necessary code to display each band name from the store
//   Band names should be listed in individual li elements.

import React from 'react';

const Bands = props => {
    const bands = props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });
  
    return (
      <div>
        {bands}
      </div>
    );
  
};
  
export default Bands;