import React from 'react';

const Bands = (props) => {
  return(
    <React.Fragment>
      <ul>
        {props.bands.map((band, index) => (
          <li key={index}>
            {band.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Bands;