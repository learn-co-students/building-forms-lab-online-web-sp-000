import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map ( band => {
          return( <li>{band.name}</li> )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispathToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", band: band})
  }
}

export default connect(mapStateToProps, mapDispathToProps)(BandsContainer)
