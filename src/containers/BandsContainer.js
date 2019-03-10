import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import BandsList from '../components/BandsList';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <BandsList bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    { addBand: band => dispatch({ type: "ADD_BAND", band }) }
  )
}

// const mapDispatchToProps = (dispatch) => (
//   { addBand: band => dispatch({ type: "ADD_BAND", band }) }
// )

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
