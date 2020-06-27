import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import BandList from '../components/BandList'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <BandList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const   mapDispatchToProps = dispatch => {
  return {
    addBand: name => {dispatch({type:"ADD_BAND", name})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)