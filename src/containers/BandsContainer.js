import React, { Component } from 'react'
import  BandInput from '../components/BandInput'
import {addBand} from '../actions/bands'
import {connect} from 'react-redux';
import BandCard from '../components/BandCard'

class BandsContainer extends Component {
  render() {
    const {bands, addBand} = this.props
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand}/>
        <ul>
          Hi there
          {bands.map(band => <BandCard band={band}/>)}
        <BandCard/>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}


export default connect(mapStateToProps, {addBand})(BandsContainer)
