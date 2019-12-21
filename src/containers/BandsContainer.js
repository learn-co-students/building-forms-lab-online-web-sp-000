import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {

 

  render() {
    // debugger
    return(
      <div>
        < BandInput addBand={this.props.addBand}/>
        < Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band})
})

const mapStateToProps = state =>{
  
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
