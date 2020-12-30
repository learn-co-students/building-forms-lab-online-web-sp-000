import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <h1>All Bands</h1>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => { dispatch({ type: 'ADD_BAND', band }); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
