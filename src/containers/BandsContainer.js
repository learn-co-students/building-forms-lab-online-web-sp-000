import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, i) => <li key={i} >{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    bands: state.bands 
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addBand: (name) => dispatch({type: 'ADD_BAND', band: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
