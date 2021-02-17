import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Band from '../components/Band'
import {connect} from 'react-redux'

// const addBand = (bandname) => {
// 	return {
// 		type: 'ADD_BAND',
// 		bandname
// 	} 
// }

class BandsContainer extends Component {

  render() {
    return(
      <div>
      	<BandInput addBand={this.props.addBand}/>
      	<ul>{this.props.bands.map(band => <Band name={band.name}/>)}</ul>
      </div>
    )
  }
}

const mapStoreToProps = state => ({
	bands: state.bands
})

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStoreToProps, mapDispatchToProps)(BandsContainer)
