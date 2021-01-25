import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'



class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const addBand = band => {
  return {
    type: 'ADD_BAND',
    band
  }
}



const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {dispatch(addBand(band))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
