import React from 'react';

const Bands = props => {
    return (
        <ul>
            {props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
    )
}

export default Bands