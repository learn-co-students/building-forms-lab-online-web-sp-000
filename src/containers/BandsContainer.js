import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import addBand from '../actions/addBand'
import Bands from '../components/Bands'
import { connect } from 'react-redux';

class BandsContainer extends Component {

  render() {
    debugger;
    return(
      <div>
        <Bands bands={this.props.bands} />
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (band) => {
//       dispatch(addBand(band))
//     }
//   }
// }

const mapStateToProps = state => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);
