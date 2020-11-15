import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props;
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand} />
        <Bands bands={bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

//add arguments to connect as needed
//export default BandsContainer
export default connect(mapStateToProps, { addBand })(BandsContainer);
