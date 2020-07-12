import React, { Component } from 'react'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand} />
        <ul>
          {this.props.bands.map(band => 
            <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default BandsContainer
