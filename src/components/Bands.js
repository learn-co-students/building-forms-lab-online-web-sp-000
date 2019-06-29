import React from 'react'

const Bands = props => {
  const bands = props.bands.map((band, i) => {
    return <li key={i}>{band.name}</li>
  })

  return <div>{bands}</div>
}

export default Bands