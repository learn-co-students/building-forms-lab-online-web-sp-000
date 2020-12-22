import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
        <BandInput addBand={this.props.add} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
};

const addBand = band => {
  return {
    type: 'ADD_BAND',
    payload: band
  }
};

const mapDispatchToProps = dispatch => {
  return {
    add: (band) => {dispatch(addBand(band))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
