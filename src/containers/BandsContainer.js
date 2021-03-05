import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    const { bands } = this.props
    // console.log(this.props)
    return(
      <div>
      <BandInput addBand={this.props.addBand}/>
      <h3>Bands</h3>
      {bands.map((band, index )=> <li>{band.name}</li>)}
      </div>
    )
  }
}

const mapStatetoProps = state => ({bands: state.bands});

const mapDispatchToProps = dispatch => ({addBand: band => dispatch({ type: 'ADD_BAND', band })});

export default connect(mapStatetoProps, mapDispatchToProps)(BandsContainer);