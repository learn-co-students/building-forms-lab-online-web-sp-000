//this component needs to access our store to grab our band name that we input and submitted via the form. In other words, this component is on;y concerned with the vaues already inside the store.
import React from 'react'

const BandList = (props) => {
  //map over bands and return an li

    return(<div>{props.bands.map((band, index) => (<li key={index}>{band.name}</li>))}</div>)
}

export default BandList
