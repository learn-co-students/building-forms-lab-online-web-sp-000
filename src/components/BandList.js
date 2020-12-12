import React from "react";

const BandList = props => {
  const renderBands = () => props.bands.map((band, id) => <li key={id}> {band.name} </li>)
  console.log(props)
  return (
   <div><ul>
     {renderBands()}
   </ul></div>)
  };

export default BandList;