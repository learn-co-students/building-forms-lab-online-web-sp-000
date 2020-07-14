import React from 'react';

const BandCard = props => {
    return (
        <li>
            {props.band.name}
        </li>
    )
}

export default BandCard;