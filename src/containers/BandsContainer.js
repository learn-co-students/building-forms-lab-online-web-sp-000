import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  addBandHandler = band => {
    this.props.addBand(band);
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBandHandler} />
        <ul>
          {this.props.bands.map((band, index) => (
            <li key={index}>{band.name}</li>
          ))}
        </ul>
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
    addBand: input => dispatch({
      type: "ADD_BAND",
      input: input
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
