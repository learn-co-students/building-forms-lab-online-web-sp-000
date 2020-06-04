import React from 'react';
import { render } from 'enzyme';


const Bands = (props) =>{
  console.log('Bands props.bands',props.bands)

  return ( 
  <div>
    {props.bands.map((band) => <li key={band.name}>{band.name}</li>)}
  </div>
  )
}

export default Bands