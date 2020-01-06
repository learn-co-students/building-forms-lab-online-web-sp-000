import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  submitHandler = bandObject => {
    this.props.addBand(bandObject)
  }

  renderBands = () => {
    return(
      this.props.bands.map(band => <li>{band.name}</li>)
    )
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.submitHandler} />
        <ul>
          {this.renderBands()}
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
    addBand: inputData => dispatch({type: "ADD_BAND", payload: inputData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
