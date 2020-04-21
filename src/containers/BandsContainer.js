import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandsInput from '../components/BandInput'
class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandsInput addBand={this.props.addBand}/>
        <ul>{this.props.bands.map(band => <li>{band.name}</li>)}</ul>
      </div>
    )
  }
}
const mapStateToProps = ({bands }) => ({ bands })
const mapDispatchToProps = dispactch => ({addBand: band => dispactch({type: "ADD_BAND", band})})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
