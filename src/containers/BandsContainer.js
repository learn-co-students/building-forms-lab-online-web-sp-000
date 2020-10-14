import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  { addBand: (band) => dispatch({type: "ADD_BAND", payload: band}) }
)

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
