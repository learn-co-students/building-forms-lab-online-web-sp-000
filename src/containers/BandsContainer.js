import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from './Band'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map( (bandObj, index) => { return <Band name={bandObj.name} key={index} />} )
  }
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


const mapStateToProps = (state) => {
  return { bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return { addBand: (formData) => { dispatch({ type: 'ADD_BAND', payload: formData}) }}
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
