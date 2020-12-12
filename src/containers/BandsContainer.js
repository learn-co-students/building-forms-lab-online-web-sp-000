import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map(band => <li>{band.name}</li>)
    return(
      <div>
        BandsContainer
        <ul>{bands}</ul>
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", payload: band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
