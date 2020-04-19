import React from 'react'


const BandList = props => {
 return <ul>{
        props.bands.map(band => <li key={band.name}>{band.name} </li>)
     }</ul>;
};

export default BandList;
