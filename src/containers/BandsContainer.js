import React, { Component } from 'react';
//Step 1: import connect from react-redux to get access to store 
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => 
  <Band key={id} text={band} />)

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} /> 
        {this.renderBands()}
      </div>
    )
  }
};

//pass props to state 
const mapStateToProps = state => {
  return {
      bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({
    type: 'ADD_BAND',
    payload: formData 
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
