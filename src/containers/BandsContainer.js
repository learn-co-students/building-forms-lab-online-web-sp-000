import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBandNames = () => this.props.bands.map((band, id) => <Band key={id} name={band.name} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBandNames()}
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
  return({
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
