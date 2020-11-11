
import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Bands from '../components/Bands'
import { addBand } from '../actions/index'

class BandsContainer extends Component {
  render() {
    //debugger
    return(
      <div>
        <BandInput store={this.props.store} addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
};

const mapStateToProps = state => {
  //debugger
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch(addBand(band))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
