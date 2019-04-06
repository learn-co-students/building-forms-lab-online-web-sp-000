import React from 'react'

const Bands = props => {
  const bands = props.bands.map(band => {
    return <li>{band.name}</li>
  })
  return(
    <div>
      {Bands}
    </div>
  )
}

export default Bands