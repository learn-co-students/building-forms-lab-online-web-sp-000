import React from 'react';

const Bands = ({ bands }) => {
    return (
        <div>
         Bands
          <ul>
            {bands.map((band, index)=>
                <li key={index}>{band.name}</li>
            )}

         </ul>
            
        </div>
    );
}

export default Bands;
