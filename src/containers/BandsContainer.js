import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <li>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    bands: state.bands
  }
};

const mapDispatchtoProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BandsContainer)
