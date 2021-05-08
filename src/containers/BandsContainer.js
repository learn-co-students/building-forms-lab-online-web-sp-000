import React, { Component } from 'react';
//Step 1: import connect from react-redux to get access to store 
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {


  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} /> 
        <Band bands={this.props.bands} />
      </div>
    )
  }
};

//pass props to state 
const mapStateToProps = ({ bands }) => 
({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({
    type: 'ADD_BAND',
    band
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
