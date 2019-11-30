import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput.js'
import Band from '../components/Band.js'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band.name} />)
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
