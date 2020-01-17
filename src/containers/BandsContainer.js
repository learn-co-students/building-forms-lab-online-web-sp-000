import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Band from '../containers/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <Band bands={this.props.bands} />
      </div>
    )
  }
}

const addBand= (name) =>{
  return {
    type: 'ADD_BAND',
      name 
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch(addBand(band))}
}


export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)
