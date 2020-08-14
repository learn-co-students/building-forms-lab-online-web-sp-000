import React from 'react';

const Bands = props => {
    const renderedBands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
    })

    return (
        <ul>{renderedBands}</ul>
    );
};

export default Bands