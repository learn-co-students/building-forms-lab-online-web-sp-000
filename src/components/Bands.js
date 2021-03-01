import React from 'react'

const Bands = (props) => {
    const bands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>;
    });
    // displays each band name from the store. Band names should be listed in individual li elements.
    
    return (
        <div>
            {bands}
        </div>
    );
};

export default Bands;