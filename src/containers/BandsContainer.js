import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BandInput } from '../components/BandInput'
import manageBand from '../reducers/manageBand'
import Bands from '../components/Bands'


class BandsContainer extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}


// const addBand = band => {
//   console.log('in action, band', band)
//   return {
//     type: 'ADD_BAND',
//     band
//   };
// };

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({type: 'ADD_BAND', band}) })


const mapStateToProps = (state) => {
  return {
    bands: state.bands
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
//export default BandsContainer;