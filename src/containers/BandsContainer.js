import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import {connect} from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands})
const mapDispatchToProps = dispatch => ({addBand: band => dispatch({type: 'ADD_BAND', band}) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// You will need to write the BandsContainer component.
// This component should act as your connection to the 
// Redux store and should be a child of the App component.
// Any values we want to use from Redux as well as any
// actions we want to dispatch should be set up and available 
// in BandsContainer so they can be passed down to other components.