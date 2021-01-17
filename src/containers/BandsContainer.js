import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/bandActions';
import BandInput from '../components/BandInput'

function mapDispatchToProps(dispatch) {
  return {
    addBand: (band) => dispatch(addBand(band))
  };
}

function mapStateToProps(state) {
  return {
    bands: state.bands
  }
}

class BandsContainer extends Component {

  displayBands() {
    return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>);
  }

  render() {
    return(
      <div>
        <div>Existing Bands</div>
        <ul>
          {this.displayBands()}
        </ul>
        <BandInput addBand={this.props.addBand} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
