import React from 'react'

let bandList

const Bands = props => {
    bandList = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>
    });

    return (
        <div className='band-list'>
            {bandList}
        </div>
    );

};




export default Bands