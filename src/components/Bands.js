import React from 'react'

const Bands = props => {
    const bands = props.bands.map((band, i) => { // First we create a variable that maps through our bands and prints each one out as an <li> tag.
        return <li key={i}>{band.name}</li> // Note, we also set our key equal to the index value of the band.
      })

    return <div>{bands}</div> // We return this variable within a <div> 
}

export default Bands // Finally, we export this 