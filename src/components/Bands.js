import React from 'react'


const Bands = (props) => {
  const all_bands = props.bands.map((band, index) => {
     return <li key={index}> {band.name}</li>
  });
  return (
    <div>
       {all_bands}
    </div>
  );
};



export default Bands
