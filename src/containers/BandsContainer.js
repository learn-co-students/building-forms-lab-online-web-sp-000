import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  render() {
    const bandItems = this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bandItems}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({ bands: state.bands })

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band}) }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)