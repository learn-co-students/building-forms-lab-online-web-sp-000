import React from 'react';

const Bands = (props) => {
  return(
    <React.Fragment>
      <ul>
        {props.bands.map((band, index) => (
          <li key={index}>
            {band}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Bands;