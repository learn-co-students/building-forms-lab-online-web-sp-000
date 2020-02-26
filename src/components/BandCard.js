import React from 'react';

const BandCard = (props) => {
    const Bands = props.bands.map((band, index) => {
        return (<li key={index}>{band.name}</li>)
    });

    return <div>{Bands}</div>
       
}

export default BandCard;