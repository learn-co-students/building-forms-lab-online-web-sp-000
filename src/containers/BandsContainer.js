import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {

    // Alternative code (you can make addBand a variable through deconstruction)
    const {bands, addBand} = this.props
    // Then refer to the component as <BandInput addBand={ addBand } />

    return(
      <div>
        <BandInput addBand={ addBand } />
        BandsContainer
        <ul>
          {bands.map( (band, idx) => <li key={idx}>{band.name}</li> )}
        </ul>
      </div>
    )
  }
}

// Action
const addBand = band => ({ type: 'ADD_BAND', band })

// const mapDispatchToProps = dispatch => {
//   return { addBand: (name) => { dispatch(addBand(name)) } }
// }

export default connect( state => ({ bands: state.bands }), {addBand})(BandsContainer)