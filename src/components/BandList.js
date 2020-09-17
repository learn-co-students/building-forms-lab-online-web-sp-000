import React from "react";

const BandList = props => {
    console.log(props)

  const renderBands = () => props.bands.map((band) => <li> {band.name} </li>)
  return (
   <div><ul>
     {renderBands()}
   </ul></div>)
  };

export default BandList;