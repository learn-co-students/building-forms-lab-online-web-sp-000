import React from 'react'
import BandInput from './BandInput'

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>
  })
    
    return (
      <div>
        {bands}
      </div>
    )
}

export default Bands