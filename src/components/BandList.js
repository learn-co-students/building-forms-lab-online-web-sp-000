import React from 'react'


const BandList = props => {
    const allBands = props.bands.map(band => <li key={band.name}>{band.name} </li>);

 return <ul>{allBands}</ul>;
};

export default BandList;
