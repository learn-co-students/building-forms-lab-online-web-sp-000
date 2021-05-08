import React from 'react'

//returning list of bands 
const Bands = props => {
    const bands = props.bands.map((band, index) => {
        return <li key={index}>
            {band.name}
        </li>
    });

    return (
        <div>
            {bands}
        </div>
    );
};   

export default Bands;