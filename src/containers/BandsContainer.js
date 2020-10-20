import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(band => <Band key={band.id} name={band.name} />)}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }), {addBand})(BandsContainer)
