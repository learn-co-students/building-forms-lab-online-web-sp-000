import React from 'react'

export default function Bands(props) {
    return (
        <div>
            <ul>
                {props.bands.map(band => <li>{band.name}</li>)}
            </ul>
        </div>
    )
}
