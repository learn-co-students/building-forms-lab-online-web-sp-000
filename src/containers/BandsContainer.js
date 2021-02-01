import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={ this.props.addBand } />
        <Bands bands={ this.props.bands } />
      </div>
    )
  }
}

export default connect(({ bands }) => ({ bands }), dispatch => ({ addBand: band => dispatch({ type: 'ADD_BAND', band }) }))(BandsContainer)