import React from 'react';

const Bands = props => {
    return (
        <ul>
            {props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
    )
}

export default Bands



// 4. Once you've got a form successfully dispatching actions and adding bands to
//    your __Redux__ store, write the necessary code to display each band name from
//    the store. Band names should be listed in individual `li` elements.