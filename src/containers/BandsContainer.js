import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  addBand = band => {
    this.props.dispatch({ type: 'ADD_BAND', payload: band })
  }

  renderBands = () => {
    return this.props.bands.map(band => (
      <li key={band.id}>{band.name}</li>
    ))
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.addBand} />
        <h3>Bands</h3>
        <ul>{this.renderBands()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps)(BandsContainer)
