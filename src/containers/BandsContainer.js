import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  displayBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.displayBands()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bands: state.bands
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", band: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
