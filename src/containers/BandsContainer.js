import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);