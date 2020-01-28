import React from 'react'

const Bands = ({bands}) => {
    const mapBands = bands.map((band,index) => {
        return <li key={index}>{band.name}</li>
    })
    return (
        <div>
            {mapBands}
        </div>
    )
}

export default Bands