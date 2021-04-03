import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => {
    return (
      this.props.bands.map((band, id) =>
        <li key={id} >{band.name}</li>
      )
    )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>{this.renderBands()}</div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapStateToDispatch = dispatch => {
  return {
    addBand: formData => dispatch({type: "ADD_BAND", payload: formData})
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(BandsContainer)
