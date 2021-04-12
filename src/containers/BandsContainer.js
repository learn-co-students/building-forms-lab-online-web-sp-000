import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {

  renderBand = () => {
    return this.props.bands.map((band, id) => <Band key={id} band={band} />)
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.renderBand()}</ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', name: formData})
})

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)
