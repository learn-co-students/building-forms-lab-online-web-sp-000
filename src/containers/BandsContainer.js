import React, { Component } from 'react';
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
 
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        
        <li>"The Black Keys", "The White Stripes"</li>
        <li>"Black Moth Super Rainbow"</li>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({
      type: "ADD_BAND",
      formData
    })
  }
}

export default connect(null, mapDispatchToProps)(BandsContainer);


