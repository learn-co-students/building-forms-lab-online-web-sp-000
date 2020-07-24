import React from 'react';

 const Bands = props => {
   const bands = props.bands.map(band=>{
     return <li>{band.name}</li>
   })
 
    return (
      <div>
       {bands}
      </div>
    )
 }



export default Bands;