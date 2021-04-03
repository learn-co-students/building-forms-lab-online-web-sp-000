import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map((band, idx) => 
      <li key={idx}>
        {band.name}
      </li>)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {bands}
        </ul>
        BandsContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
