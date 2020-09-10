import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        Bands Container
        <BandInput bands = {this.props.bands} addBand = {this.props.addBand}/>
        {this.props.bands.map( (band, index) => <li key={index}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}
const mapDispatchToProps = dispatch => {

  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData}),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (BandsContainer)
