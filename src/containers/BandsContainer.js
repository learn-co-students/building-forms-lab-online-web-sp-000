import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <h3>Bands</h3>
        <ul>
          {this.props.bands.map((band, index) => 
            <li key={index}>{band.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { bands: state.bands }
)

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch({type: 'ADD_BAND', payload: band})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)