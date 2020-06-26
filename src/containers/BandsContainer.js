import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import {addBand } from '../actions/bands'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
} 


const mapDispatchToProps = dispatch => {
  return({
    addBand: (band) => dispatch(addBand(band))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
