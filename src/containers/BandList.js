import React, { Component } from 'react';

 const BandList = props => {
    const bands = props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });

     return (
      <div>
          Band List:
        {bands}
      </div>
    );

   };

   export default BandList;
