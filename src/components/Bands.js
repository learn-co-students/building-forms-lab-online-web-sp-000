import React from 'react'

const Bands = props => {
  const bands = props.bands.map((band) => {
    return <li>{band.name}</li>
  })
  
  return (
    <div>
      <ul>
        {bands}
      </ul>
    </div>
  );
};
 
export default Bands;