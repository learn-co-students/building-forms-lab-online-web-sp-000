import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const listOfBands = this.props.bands.map((band, i) => {
      return <li key={i} >{band.name}</li>
    })
    return(
      <div>
        <BandInput dispatch={this.props.dispatch} />
        <ul>
          {listOfBands}
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

export default connect(mapStateToProps)(BandsContainer)
