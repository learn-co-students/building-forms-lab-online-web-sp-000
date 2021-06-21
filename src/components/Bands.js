import React from 'react'

const Bands = props => {
    const bands = props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
    return(
        <ul>
            {bands}
        </ul>
    )
}
export default Bands