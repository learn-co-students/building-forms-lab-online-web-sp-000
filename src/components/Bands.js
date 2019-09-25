import React from 'react';

const Bands = props => {
    const bands = props.bands.map((band, id) => {
        return <li key={id}>{band.name}</li>
    })
    
    
    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands