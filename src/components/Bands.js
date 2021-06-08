import React from 'react'

const Bands = props => {
    const allBands = props.bands.map((b, idx) => <li key={idx}>{b.name}</li>);

    return <ul>{allBands}</ul>
}

export default Bands