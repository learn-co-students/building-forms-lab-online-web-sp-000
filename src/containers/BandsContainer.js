import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render () {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((b, idx) => (
            <li key={idx}>{b.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const ms = s => ({
  bands: s.bands
})

const md = d => ({
  addBand: b => d({ type: 'ADD_BAND', payload: b })
})
export default connect(ms, md)(BandsContainer)
