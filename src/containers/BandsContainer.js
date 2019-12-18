import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bandsList = this.props.bands.map((band, i) => {
      return <li key={i} >{band.name}</li>
    })

    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bandsList}
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

const mapDispatchToProps = (dispatch) => {
  return (
    { addBand: band => dispatch({ type: "ADD_BAND", band }) }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)