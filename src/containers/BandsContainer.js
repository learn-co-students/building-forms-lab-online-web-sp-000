import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import {addBand} from '../actions/bands'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  
  render() {
    return(
      <div>
        
        <BandInput addBand = {this.props.addBand}/>
        <Bands bands = {this.props.bands} />

      </div>
    )
  }
}

export default connect(state=>({bands: state.bands}),{addBand})(BandsContainer)
