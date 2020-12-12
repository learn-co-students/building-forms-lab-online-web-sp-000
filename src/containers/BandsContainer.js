import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import BandList from '../components/BandList'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands}/>
      </div>
    )
  }
}


//since BandsContainer is the parent of BandInput and BandList, it takes care of state and dispatching the addBand function

const mapStateToProps = state => {
  return({
    bands: state.bands
  })
}

//create a JS object that contains a function called addBand. When I call this.props.addBand(<form payload>) elsewhere, it comes back here to run our function
const mapDispatchToProps = dispatch => {
  return {
    addBand: (formData) => {
      console.log('mapDispatchToProps', formData);
      dispatch({type: 'ADD_BAND', payload: formData})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
