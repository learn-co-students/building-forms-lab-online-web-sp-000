import React from 'react';

const Bands = (props) => {
    return(
        <div>
            {
            props.bands.map((band, idx) => {
                return <li key={idx}>{band.name}</li>
            })
            }
        </div>
    )
}

export default Bands;