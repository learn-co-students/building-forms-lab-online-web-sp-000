import React from 'react'

const BandDisplay = props => {

  const bandList = props.bands.map((band, idx) => {
    return <li key={idx}>{band.name}</li>
  })


  return (
    <div>
      {bandList}
    </div>
  )

}

export default BandDisplay;