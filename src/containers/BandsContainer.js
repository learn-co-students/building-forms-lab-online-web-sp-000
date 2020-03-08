import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';

class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props;
    return(
      <div>
        <BandInput addBand={addBand} /> // TODO: has error
        <ul>
          {bands ? bands.map(band => <li >{band.name}</li>) : ''}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

export default connect(mapStateToProps,{ addBand })(BandsContainer);
