import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {

  renderBands = () => { 
    console.log("props:", this.props.bands)
    return (
      this.props.bands.map((band) => {
        console.log("band: ", band.name)
        return(
          <li>{band.name}</li>
        )
      })
    )
  }

  render() {
    console.log("renderBands: ", this.renderBands())
    return(
      <div>
        <BandInput addBand={this.props.addBand} bands={this.props.bands} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    addBand: (formData) => dispatch({ type: 'ADD_BAND', name: formData})

  })
}

const mapStateToProps = (state) => {
  return({
    bands: state.bands
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
