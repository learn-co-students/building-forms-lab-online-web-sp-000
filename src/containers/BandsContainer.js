import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {

    const {bands} = this.props
    const bandList = bands.map(band => <li key={band.name}>{band.name}</li>)

    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bandList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: band => dispatch({ type: "ADD_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
