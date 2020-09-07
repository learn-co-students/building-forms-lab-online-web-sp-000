import React, { Component } from 'react'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    //const bands = this.props.bands
    return(
      <div>
        BandsContainer
        <ul>
          {/* {bands.map(band => <li><BandInput /></li>)} */}
        </ul>
      </div>
    )
  }
}

export default BandsContainer
