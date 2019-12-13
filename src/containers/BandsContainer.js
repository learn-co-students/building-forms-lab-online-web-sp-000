import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import BandsList from '../components/BandsList';
import { addBand } from '../actionCreators/Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <BandsList bands={this.props.bands} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands
});

export default connect(mapStateToProps, { addBand })(BandsContainer);
