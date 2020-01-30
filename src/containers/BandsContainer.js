import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
// import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => {
    // console.log(this.props.bands)
    return (
      this.props.bands.map(band => <li>{band.name}</li>)
    )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {/* <p>{this.props.bands}</p> */}
        {/* <ul> */}
        {this.renderBands()}
        {/* </ul> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({type: 'ADD_BAND', name })
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
