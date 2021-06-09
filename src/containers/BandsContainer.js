import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands.js'

import { connect } from 'react-redux'

class BandsContainer extends Component {

  handleClick = (props) => {
    console.log(props)
  }

  render() {
    return (
      <div>
        {console.log("in bandcontainer")}
        {console.log(this.props)}
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.deleteBand}/>
        <button onClick={() => this.handleClick(this.props)}>test!</button>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  deleteBand: id => dispatch({ type: 'DELETE_BAND', payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
