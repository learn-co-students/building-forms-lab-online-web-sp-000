import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import manageBand from '../reducers/manageBand'


class BandsContainer extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          BandsContainer
        </div>
      </div>
    )
  }
}


const addBand = band => {
  console.log('in action, band', band)
  return {
    type: 'ADD_BAND',
    band
  };
};

const mapDispatchToProps = dispatch => {
  return {
  addBand: band => dispatch(addBand(band))
}}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
//export default BandsContainer;