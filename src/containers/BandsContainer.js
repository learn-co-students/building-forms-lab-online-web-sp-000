import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/actions';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
        {console.log(this.props)}
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band: band})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
