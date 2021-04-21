import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.props.bands.map((band, id) => {
          debugger
          {/*<li key={id}>{band.name}</li>*/}
        })}
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
    addBand: name=> dispatch({type: 'ADD_BAND', name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
