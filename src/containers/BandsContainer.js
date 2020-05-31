import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.props.bands.map(band => <li>{band.name}</li>)}</ul>
      </div>
    )
  }
}

const addBand = band => {
  return {
    type: 'ADD_BAND',
    band: band
  }
}

export default connect(state => ({ bands: state.bands }), { addBand })(BandsContainer);
